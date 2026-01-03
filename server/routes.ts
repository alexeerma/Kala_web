import type { Express } from "express";
import { type Server } from "http";
import { sendContactEmail } from "./resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  selectedPackage: z.string().optional(),
  message: z.string().min(1),
});

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const input = contactSchema.parse(req.body);
      await sendContactEmail({
        name: input.name,
        email: input.email,
        selectedPackage: input.selectedPackage || "Pole valitud",
        message: input.message,
      });
      res.status(200).json({ success: true, message: "E-kiri saadetud!" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.')
        });
        return;
      }
      console.error("Email send error:", err);
      res.status(500).json({ message: "E-kirja saatmine ebaõnnestus" });
    }
  });

  return httpServer;
}
