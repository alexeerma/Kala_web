import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Building2, CreditCard, Instagram, Facebook, Linkedin } from "lucide-react";
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
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
              Valmis alustama oma teekonda parema tervise poole? Täida vorm ja võtan Sinuga ühendust 24 tunni jooksul.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/rasmuskala/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" data-testid="link-hero-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/rasmus.kalaa" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" data-testid="link-hero-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rasmus-kala-534295157/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" data-testid="link-hero-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
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
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-6">
                      Kontaktandmed
                    </h2>
                    
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-0.5">Asukoht</h3>
                          <p className="text-gray-400 text-sm">Tartu + Tallinn</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-0.5">E-post</h3>
                          <p className="text-gray-400 text-sm">info@rasmuskala.ee</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-0.5">Telefon</h3>
                          <p className="text-gray-400 text-sm">+372 569 24511
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Info */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-6">
                      Ettevõtte andmed
                    </h2>
                    
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-0.5">Rasmus Kala</h3>
                          <p className="text-gray-400 text-sm">OÜ RK PERFORMANCE</p>
                          <p className="text-gray-500 text-xs mt-1">Registrikood: 17362262</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <CreditCard className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-0.5">LHV Pank</h3>
                          <p className="text-gray-400 text-sm break-all">EE607700771012317599</p>
                          <p className="text-gray-500 text-xs mt-1">Ei ole käibemaksukohuslane</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full"></div>
                  
                  <div className="relative z-10">
                    <h3 className="font-medium text-white mb-3">Treeningute asukohad</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Eratreeningud toimuvad Tartu Ülikooli Akadeemilises Spordiklubis, Tartu MyFitness klubides või vastavalt kokkuleppele Sinu valitud jõusaalis Tartus ja Tallinnas.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden group"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-6">Saada sõnum</h3>
                  <ContactForm />
                </div>
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
                RasmusKala
              </span>
            </Link>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} RasmusKala. Kõik õigused kaitstud. | <a href="https://alexeerma.ee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web by Alexeerma</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors" data-testid="link-social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" data-testid="link-social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" data-testid="link-social-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
