import { Check } from "lucide-react";
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
    <div 
      className={`relative flex flex-col h-full p-8 rounded-2xl transition-all duration-300 ${
        popular 
          ? 'bg-white text-black' 
          : 'bg-white/[0.03] border border-white/10 text-white hover:border-white/20'
      }`}
      data-testid={`card-service-${title.toLowerCase()}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`text-sm ${popular ? 'text-gray-600' : 'text-gray-400'}`}>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-semibold">{price}</span>
        <span className={`text-sm ml-1 ${popular ? 'text-gray-500' : 'text-gray-500'}`}>/month</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 rounded-full p-0.5 ${popular ? 'bg-black' : 'bg-white'}`}>
              <Check className={`w-3 h-3 ${popular ? 'text-white' : 'text-black'}`} />
            </div>
            <span className={popular ? 'text-gray-700' : 'text-gray-300'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full rounded-full font-medium py-6 ${
          popular 
            ? 'bg-black text-white hover:bg-gray-800' 
            : 'bg-white text-black hover:bg-gray-100'
        }`}
        onClick={() => {
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        data-testid={`button-choose-${title.toLowerCase()}`}
      >
        Choose {title}
      </Button>
    </div>
  );
}
