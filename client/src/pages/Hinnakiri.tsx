import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

function PriceCard({ title, price, description, features, popular }: PriceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col h-full p-8 rounded-2xl transition-all duration-300 ${
        popular 
          ? 'bg-white text-black' 
          : 'bg-white/[0.03] border border-white/10 text-white hover:border-white/20'
      }`}
      data-testid={`card-price-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
            Populaarseim
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`text-sm leading-relaxed ${popular ? 'text-gray-600' : 'text-gray-400'}`}>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-semibold">{price}</span>
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

      <Link href="/kontakt">
        <Button 
          className={`w-full rounded-full font-medium py-6 ${
            popular 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}
          data-testid={`button-choose-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Võta ühendust
        </Button>
      </Link>
    </motion.div>
  );
}

export default function Hinnakiri() {
  const packages = [
    {
      title: "1x Personaaltreening",
      price: "50€",
      description: "Ideaalne alustuseks",
      features: [
        "Saame tuttavaks",
        "Paneme paika esialgsed eesmärgid",
        "Õpime esmased vajalikud harjutused"
      ]
    },
    {
      title: "Personaaltreening sõbraga",
      price: "75€",
      description: "Treeni koos sõbraga",
      features: [
        "Saame tuttavaks",
        "Paneme paika esialgsed eesmärgid Teie mõlema jaoks",
        "Õpime esmased vajalikud harjutused",
        "Motiveeriv keskkond"
      ]
    },
    {
      title: "7x Personaaltreening",
      price: "350€",
      description: "Terviklik treeningpakett",
      popular: true,
      features: [
        "Investeering tervisesse",
        "Märgatavalt parem enesetunne",
        "Harjutuste tehnika paraneb",
        "Räägime toitumise ja taastumise olulisusest",
        "Energiatase on tõusnud",
        "Omandad harjutused iseseisvaks treenimiseks"
      ]
    },
    {
      title: "7x Personaaltreening sõbraga",
      price: "495€",
      description: "Terviklik pakett kahele",
      features: [
        "Investeering tervisesse",
        "Märgatavalt parem enesetunne",
        "Harjutuste tehnika paraneb",
        "Räägime toitumise ja taastumise olulisusest",
        "Energiatase on tõusnud",
        "Omandate mõlemad harjutused iseseisvaks või koos treenimiseks"
      ]
    },
    {
      title: "Treeningkava",
      price: "60€",
      description: "Personaalne treeningkava",
      features: [
        "Sinu võimetele vastav",
        "Eesmärgipärane",
        "Progresseeruv",
        "Sinu eripäradele üles ehitatud"
      ]
    },
    {
      title: "Online juhendamine",
      price: "150€",
      description: "Kuupõhine juhendamine",
      features: [
        "Kuupõhine kava",
        "Privaatne ja personaalne lähenemine",
        "Pidev tagasiside ja nõustamine",
        "Videoanalüüsid",
        "Toitumisnõustamine"
      ]
    },
    {
      title: "Online juhendamine 3 kuud",
      price: "450€",
      description: "Pikaajaline juhendamine",
      features: [
        "Kuupõhine kava",
        "Privaatne ja personaalne lähenemine",
        "Pidev tagasiside ja nõustamine",
        "Videoanalüüsid",
        "Toitumisnõustamine",
        "Säästad 15% võrreldes kuupõhisega"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Hinnakiri
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Vali endale sobiv pakett
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
              Personaalsed treeningpaketid igale tasemele. Alusta oma teekonda parema tervise ja enesetunde poole.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <PriceCard key={i} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Valmis alustama?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Võta minuga ühendust ja leiame koos Sulle sobiva lahenduse.
          </p>
          <Link href="/kontakt">
            <Button 
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium text-base group"
              data-testid="button-cta-contact"
            >
              Võta ühendust
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/">
              <span className="text-xl font-semibold text-white cursor-pointer">
                RasmusKala
              </span>
            </Link>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} RasmusKala. Kõik õigused kaitstud. | <a href="https://alexeerma.ee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web by Alexeerma</a>
            </div>
            <div className="flex gap-6">
              {['Instagram', 'Twitter', 'YouTube'].map(social => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                  data-testid={`link-social-${social.toLowerCase()}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
