import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Target, Zap, Users, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const faqs = [
  {
    question: "Kas personaaltreening sobib algajatele?",
    answer: "Jah, personaaltreening sobib suurepäraselt algajatele! Kohandan kõik harjutused vastavalt Sinu tasemele ja õpetan õiget tehnikat algusest peale. See on tegelikult parim viis alustada, kuna väldid vigade tekkimist ja saad tugeva aluse."
  },
  {
    question: "Kui tihti peaksin treenima?",
    answer: "Optimaalne treeningsagedus sõltub Sinu eesmärkidest ja elustiilist. Algajatele soovitan alustada 2-3 treeninguga nädalas, et keha saaks piisavalt taastuda. Edasijõudnutele võib sobida 4-5 treeningut nädalas."
  },
  {
    question: "Kas ma pean järgima kindlat dieeti?",
    answer: "Ei pea järgima ranget dieeti. Aitan Sul luua jätkusuutlikke toitumisharjumusi, mis sobivad Sinu elustiiliga. Fookus on tasakaalustatud toitumisel, mitte piiravatel dieetidel."
  },
  {
    question: "Kui kiiresti tulemusi näen?",
    answer: "Esimesi muutusi enesetundes ja energiatasemes märkad juba esimeste nädalate jooksul. Nähtavad füüsilised muutused ilmnevad tavaliselt 4-8 nädala pärast järjepideva treenimisega."
  },
  {
    question: "Mis juhtub, kui pean treeningu tühistama?",
    answer: "Treeningu saab tühistada vähemalt 24 tundi ette ilma lisatasuta. Hilisema tühistamise korral läheb treening kaotsi. Erandkorras leiame alati lahenduse."
  },
  {
    question: "Kas pakud ka online treeninguid?",
    answer: "Jah! Pakun nii online juhendamist kui ka personaalseid treeningkavasid. Online juhendamine sisaldab kuupõhist kava, pidevat tagasisidet, videoanalüüse ja toitumisnõustamist."
  },
  {
    question: "Milline varustus mul vaja on?",
    answer: "Treeninguks piisab mugavatest spordiriietest ja tossudest. Kõik vajalikud vahendid on jõusaalis olemas. Koduseks treeninguks soovitan soetada kummilindid ja joogateki."
  },
  {
    question: "Kas saab treenida ka sõbraga koos?",
    answer: "Kindlasti! Pakun spetsiaalseid paarispersonaaltreeningu pakette. See on suurepärane viis hoida motivatsiooni ja jagada kulusid sõbraga."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover-elevate active-elevate-2 rounded-lg px-2 -mx-2"
        data-testid={`faq-${question.slice(0, 20).toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed px-2">{answer}</p>
      </div>
    </div>
  );
}

export default function Minust() {
  const [activeTab, setActiveTab] = useState<'about' | 'faq'>('about');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Minust
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Tutvu lähemalt
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeTab === 'about' 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              data-testid="tab-about"
            >
              Minu lugu
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeTab === 'faq' 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              data-testid="tab-faq"
            >
              Korduma kippuvad küsimused
            </button>
          </div>
        </div>
      </section>

      {/* About Tab Content */}
      {activeTab === 'about' && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
                    alt="Personal Trainer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white text-black rounded-2xl p-6 shadow-2xl">
                  <div className="text-3xl font-semibold">10+</div>
                  <div className="text-sm text-gray-600">Aastat kogemust</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                  Rohkem kui lihtsalt treening. Täielik muutumine.
                </h2>
                
                <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Usun, et tõeline jõud sünnib esmalt mõistuses. Keha järgneb lihtsalt. Minu filosoofia ei keskendu kiirlahendustele — see on jätkusuutliku elustiili loomine, mis annab sulle jõudu.
                  </p>
                  <p>
                    Üle 10 aasta kogemusega jõu- ja vormiharjutustes olen aidanud sadu kliente muuta mitte ainult oma keha, vaid ka enesekindlust ja distsipliini.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { icon: Target, label: "Eesmärgipõhine" },
                    { icon: Zap, label: "Kõrge energia" },
                    { icon: Users, label: "Kogukond" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 text-center">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/kontakt">
                    <Button 
                      className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium"
                      data-testid="button-about-contact"
                    >
                      Võta ühendust
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Tab Content */}
      {activeTab === 'faq' && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
                  Korduma kippuvad küsimused
                </h2>
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/">
              <span className="text-xl font-semibold text-white cursor-pointer">
                FitPro
              </span>
            </Link>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} FitPro Treening. Kõik õigused kaitstud.
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
