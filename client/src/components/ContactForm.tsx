import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

// Formspree vorm - loo tasuta konto formspree.io ja asenda see oma vormi ID-ga
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdakdjbw";

const packageCategories = [
  {
    category: "Harrastajad",
    packages: [
  { value: "1x-personaaltreening", label: "1x Personaaltreening - 60€" },
  { value: "personaaltreening-sobraga", label: "Personaaltreening sõbraga - 78€" },
  { value: "7x-personaaltreening", label: "7x Personaaltreening - 366€" },
  { value: "7x-personaaltreening-sobraga", label: "7x Personaaltreening sõbraga - 479€" },
  { value: "treeningkava", label: "Treeningkava - 60€" },
    ],
  },
  {
    category: "Sportlased",
    packages: [
  { value: "1x-ÜKE-treening", label: "ÜKE sportlasele - 80€" },
  { value: "7x-ÜKE-treening", label: "7x ÜKE sportlasele - 366€" },
  { value: "grupitreening", label: "Grupitreening (Max 4 inimest) - 100€" },
  { value: "sportlase-treeningkava", label: "Treeningkava sportlasele - 80€" },
    ],
  },
  {
    category: "Online coaching",
    packages: [
  { value: "online-juhendamine", label: "Online juhendamine - 150€/kuu" },
  { value: "online-juhendamine-3-kuud", label: "Online juhendamine 3 kuud - 450€" },
    ],
  },
  {
    category: "Kuupõhised paketid",
    packages: [
  { value: "1x-nadalas-kuupõhine", label: "Kuupõhine liikmesus 1-treening nädalas - 180€" },
  { value: "2x-nadalas-kuupõhine", label: "Kuupõhine liikmesus 2-treening nädalas - 320€" },
  { value: "3x-nadalas-kuupõhine", label: "Kuupõhine liikmesus 3-treening nädalas - 420€" },
    ],
  },
];

// Flatten packages for lookup
const packages = packageCategories.flatMap(cat => cat.packages);

const contactFormSchema = z.object({
  name: z.string().min(1, "Nimi on kohustuslik"),
  email: z.string().email("Palun sisesta kehtiv e-posti aadress"),
  selectedPackage: z.string().optional(),
  message: z.string().min(1, "Sõnum on kohustuslik"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const [location] = useLocation();
  
  // Get package from URL query parameter
  const getPackageFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("pakett") || "";
  };
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      selectedPackage: getPackageFromUrl(),
      message: "",
    },
  });

  // Update form when URL changes
  useEffect(() => {
    const packageFromUrl = getPackageFromUrl();
    if (packageFromUrl) {
      form.setValue("selectedPackage", packageFromUrl);
    }
  }, [location]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const packageLabel = packages.find(p => p.value === data.selectedPackage)?.label || "Pole valitud";
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          pakett: packageLabel,
          message: data.message,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Saatmine ebaõnnestus");
      }
      
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Sõnum saadetud!",
        description: "Võtan Sinuga ühendust 24 tunni jooksul.",
      });
    } catch (error) {
      toast({
        title: "Viga",
        description: "Sõnumi saatmine ebaõnnestus. Palun proovi uuesti.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    placeholder="sina@email.ee" 
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
                <SelectContent className="bg-zinc-900 border-white/10 max-h-[400px]">
                  {packageCategories.map((category, categoryIndex) => (
                    <div key={category.category}>
                      {categoryIndex > 0 && (
                        <div className="h-px bg-white/10 mx-2 my-2" />
                      )}
                      <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {category.category}
                      </div>
                      {category.packages.map((pkg) => (
                    <SelectItem 
                      key={pkg.value} 
                      value={pkg.value}
                          className="text-white focus:bg-white/10 focus:text-white pl-6"
                    >
                      {pkg.label}
                    </SelectItem>
                      ))}
                    </div>
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
                  placeholder="Räägi mulle oma treeningueesmärkidest..." 
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
          disabled={isSubmitting || isSuccess}
          className="bg-white text-black hover:bg-gray-100 rounded-full font-medium px-8 py-6 text-sm transition-all group"
          data-testid="button-submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saadan...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" /> Saadetud!
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
