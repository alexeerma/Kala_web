import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const result = await storage.createContactRequest(input);
      res.status(201).json(result);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
           message: err.errors[0].message,
           field: err.errors[0].path.join('.')
        });
        return;
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return httpServer;
}
