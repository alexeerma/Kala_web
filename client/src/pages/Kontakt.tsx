import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Kontakt
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Võta minuga ühendust
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Valmis alustama oma teekonda parema tervise poole? Täida vorm ja võtan Sinuga ühendust 24 tunni jooksul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                  Kontaktandmed
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Asukoht</h3>
                      <p className="text-gray-400">Viru väljak 4, 10111 Tallinn, Eesti</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">E-post</h3>
                      <p className="text-gray-400">tere@fitpro.ee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Telefon</h3>
                      <p className="text-gray-400">+372 5XX XXXX</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h3 className="font-medium text-white mb-3">Treeningute ajad</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Esmaspäev - Reede</span>
                      <span className="text-white">07:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Laupäev</span>
                      <span className="text-white">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pühapäev</span>
                      <span className="text-white">10:00 - 16:00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-10"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Saada sõnum</h3>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
