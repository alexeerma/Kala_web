import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertContactRequest } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      // Validate with shared schema first if needed, though react-hook-form usually handles this
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Validation failed");
        }
        if (res.status === 500) {
          const error = api.contact.create.responses[500].parse(await res.json());
          throw new Error(error.message || "Server error");
        }
        throw new Error("Failed to send message");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "I'll get back to you as soon as possible.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
}
