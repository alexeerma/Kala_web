import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function ServiceCard({ title, price, description, features, popular }: ServiceCardProps) {
  return (
    <Card className={`border-none rounded-none flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${popular ? 'bg-white text-black' : 'bg-white/5 text-white'}`}>
      <CardHeader>
        {popular && <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Most Popular</div>}
        <CardTitle className="font-display text-3xl uppercase">{title}</CardTitle>
        <div className="mt-4 mb-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className={`text-sm ml-1 ${popular ? 'text-gray-600' : 'text-gray-400'}`}>/month</span>
        </div>
        <CardDescription className={popular ? 'text-gray-600' : 'text-gray-400'}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 mt-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check className={`w-5 h-5 shrink-0 ${popular ? 'text-black' : 'text-white'}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full rounded-none font-bold uppercase tracking-wider py-6 ${
            popular 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
          onClick={() => {
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
}
