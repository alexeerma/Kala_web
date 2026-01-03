import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, ArrowRight } from "lucide-react";

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-400">Nimi</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Sinu nimi" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white rounded-xl focus:ring-white/20 h-12 placeholder:text-gray-500"
                    data-testid="input-name"
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
                <FormLabel className="text-sm text-gray-400">E-post</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="sina@näide.ee" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white rounded-xl focus:ring-white/20 h-12 placeholder:text-gray-500"
                    data-testid="input-email"
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
              <FormLabel className="text-sm text-gray-400">Sõnum</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Räägi meile oma treeningueesmärkidest..." 
                  {...field} 
                  className="bg-white/5 border-white/10 text-white rounded-xl focus:ring-white/20 min-h-[140px] resize-none placeholder:text-gray-500"
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="bg-white text-black hover:bg-gray-100 rounded-full font-medium px-8 py-6 text-sm transition-all group"
          data-testid="button-submit"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saadan...
            </>
          ) : (
            <>
              Saada sõnum
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
