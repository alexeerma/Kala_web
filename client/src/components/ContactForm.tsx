import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, ArrowRight } from "lucide-react";

const packages = [
  { value: "1x-personaaltreening", label: "1x Personaaltreening - 50€" },
  { value: "personaaltreening-sobraga", label: "Personaaltreening sõbraga - 75€" },
  { value: "7x-personaaltreening", label: "7x Personaaltreening - 350€" },
  { value: "7x-personaaltreening-sobraga", label: "7x Personaaltreening sõbraga - 495€" },
  { value: "treeningkava", label: "Treeningkava - 60€" },
  { value: "online-juhendamine", label: "Online juhendamine - 150€/kuu" },
  { value: "online-juhendamine-3-kuud", label: "Online juhendamine 3 kuud - 450€" },
];

export function ContactForm() {
  const mutation = useContact();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      selectedPackage: "",
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
          name="selectedPackage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-gray-400">Pakett (valikuline)</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger 
                    className="bg-white/5 border-white/10 text-white rounded-xl focus:ring-white/20 h-12"
                    data-testid="select-package"
                  >
                    <SelectValue placeholder="Vali pakett" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-zinc-900 border-white/10">
                  {packages.map((pkg) => (
                    <SelectItem 
                      key={pkg.value} 
                      value={pkg.value}
                      className="text-white focus:bg-white/10 focus:text-white"
                    >
                      {pkg.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
