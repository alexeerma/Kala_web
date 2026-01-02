import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const mutation = useContact();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactRequest) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs tracking-widest text-gray-400">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your Name" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white rounded-none focus:ring-white/20 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs tracking-widest text-gray-400">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your@email.com" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white rounded-none focus:ring-white/20 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs tracking-widest text-gray-400">Goals & Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell me about your fitness goals..." 
                  {...field} 
                  className="bg-white/5 border-white/10 text-white rounded-none focus:ring-white/20 min-h-[150px] resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full md:w-auto px-8 py-6 bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase tracking-wider text-sm transition-all"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
