import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Zap, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
        
        <div className="container relative z-10 px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                <Sparkles className="w-4 h-4" />
                Muuda oma keha ja meel
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
              Kõige tõhusam personaaltreeningu platvorm
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              Professionaalne juhendamine ja kohandatud programmid, mis on aidanud sadu inimesi muutuda. Algajatest sportlasteni — saavuta oma treeningueesmärgid personaalse juhendamisega.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium text-base"
                data-testid="button-hero-start"
              >
                Alusta kohe
              </Button>
              <Button 
                variant="ghost"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-8 py-6 font-medium text-base group"
                data-testid="button-hero-learn"
              >
                Vaata programme
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Pills - Sliding Marquee */}
      <div className="border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="py-6">
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0 gap-4 px-2">
                {[
                  "Personaaltreening",
                  "Toitumiskavad", 
                  "Online juhendamine",
                  "Rühmatreeningud",
                  "Keha analüüs",
                  "Edusammude jälgimine",
                  "Jõutreening",
                  "Kaalulangetus",
                  "Venitusharjutused",
                  "HIIT treeningud"
                ].map((feature, i) => (
                  <span 
                    key={`${setIndex}-${i}`} 
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 whitespace-nowrap"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "500+", label: "Rahulolevat klienti" },
              { value: "10+", label: "Aastat kogemust" },
              { value: "5000+", label: "Läbitud treeningut" },
              { value: "98%", label: "Edukuse määr" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-semibold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
                Minust
              </span>
              
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Hinnad
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Vali oma treeningprogramm
            </h2>
            <p className="text-gray-400 text-lg">
              Vali pakett, mis sobib sinu eesmärkide ja elustiiliga. Kõik paketid sisaldavad personaalset tähelepanu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ServiceCard 
              title="Online" 
              price="€120" 
              description="Ideaalne enesemotiveeritud inimestele"
              features={[
                "Kohandatud treeningkava",
                "Iganädalased konsultatsioonid",
                "Toitumisnõustamine",
                "Tehnika analüüs video põhjal",
                "24/7 tugi rakenduses"
              ]}
            />
            <ServiceCard 
              title="Hübriid" 
              price="€280" 
              description="Parim mõlemast maailmast"
              popular={true}
              features={[
                "Kõik Online paketist",
                "2 kohapealset treeningut kuus",
                "Kehakoostise analüüs",
                "Kohandatud menüüd",
                "Prioriteetne tugi"
              ]}
            />
            <ServiceCard 
              title="Eliit" 
              price="€650" 
              description="Täielik süvitsi juhendamine"
              features={[
                "3 treeningut nädalas",
                "Igapäevane vastutus",
                "Toidukorvi juhend",
                "Toidulisandite protokollid",
                "Füsioteraapia konsultatsioon"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Tagasiside
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Mida kliendid ütlevad
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Ma ei uskunud, et suudan sellised tulemused saavutada vaid 3 kuuga. Distsipliin, mida siin õppisin, muutis mu elu.",
                author: "Kadri Tamm",
                role: "Ettevõtja"
              },
              {
                quote: "Tähelepanu detailidele vormi ja tehnika osas on võrratu. Mingeid vigastusi, ainult puhas progress.",
                author: "Marten Kask",
                role: "Tarkvaraarendaja"
              },
              {
                quote: "See on väljakutsuv, see on tasustav ja see on absoluutselt iga treeningu väärt. Parim investeering endasse.",
                author: "Tõnis Rebane",
                role: "Arhitekt"
              }
            ].map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8"
                data-testid={`card-testimonial-${i}`}
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{story.quote}"
                </p>
                <div>
                  <div className="font-medium text-white">{story.author}</div>
                  <div className="text-sm text-gray-500">{story.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
                  Võta ühendust
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Valmis alustama oma muutumist?
                </h2>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  Täida vorm ja vastan sulle 24 tunni jooksul. Loome koos sinu teekonna eduni.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Asukoht</h3>
                      <p className="text-gray-500">Viru väljak 4, 10111 Tallinn, Eesti</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Kontakt</h3>
                      <p className="text-gray-500">tere@fitpro.ee</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-semibold text-white">
              FitPro
            </div>
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
