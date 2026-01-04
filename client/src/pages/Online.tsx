import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Building2,
  CreditCard,
  Instagram,
  Facebook,
  Linkedin,
  User,
  Target,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/Kala_tossu_1767425326571.jpg";
import aboutImage from "@assets/Kalav3_1767425407543.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Online() {
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
              Online coaching
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Leiame parima lahenduse Sinule läbi online juhendamise.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
              Valmis alustama oma teekonda parema tervise poole? Leia endale
              parim online liikmelisus.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/rasmuskala/"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                data-testid="link-hero-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/rasmus.kalaa"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                data-testid="link-hero-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rasmus-kala-534295157/"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                data-testid="link-hero-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-10 md:py-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 lg:space-y-8">
              {/* Top row - Card and Icon items with equal height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                {/* Left Column - Text Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative flex"
                >
                  <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/20 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-white/30 relative overflow-hidden group w-full flex flex-col">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full"></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg text-white mb-4">
                        Online coachingu info
                      </h3>
                      <p className="text-base text-gray-300 leading-relaxed flex-1">
                        Online Coaching eratreeneriga on personaalne ja paindlik
                        nõustamine, mis jõuab Sinuni kõikjal, kus on
                        internetiühendus. Koostan sulle personaalse, arengule
                        keskenduva treeningkava. Kirjutan sulle iga trenni ette,
                        sina vaid treeni kus ja millal sulle sobib.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Icon-based items */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col justify-center space-y-6"
                >
                  {/* Privaatne ja personaalne */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm mb-0.5">Privaatne ja personaalne</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Olen Sinu isiklik juhendaja treening teekonnal ja koos saavutame Sinu eesmärgid
                    </p>
                  </div>
                </div>

                {/* Treeningkava */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm mb-0.5">Treeningkava</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Minu juhendamisel saad treeningkava, mis on kohandatud täpselt Sinu eesmärgide ja elustiiliga. Pidevalt suheldes olen Sulle toeks ja hoian motivatsiooni üleval. 
                      Sina filmid oma treeninguid ja saadad need mulle. Mina vaatan need läbi, analüüsin ja annan Sulle tagasisidet.
                    </p>
                  </div>
                </div>

                {/* Igakuine nõustamine */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm mb-0.5">Igakuine nõustamine</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Nõustan sind toitumise, taastumise, harjumuste, suhtumise ja muude oluliste tulemusi mõjutavate faktorite osas.
                    </p>
                  </div>
                </div>
              </motion.div>
              </div>

              {/* Picture at bottom - spans both columns */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-white/5 border border-white/20 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-white/30 relative group">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full z-10"></div>
                  
                  <img 
                    src={heroImage} 
                    alt="Online coaching" 
                    className="w-full h-full object-cover relative z-0"
                  />
                </div>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 text-center"
                >
                  <Link href="/kontakt">
                    <Button
                      className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium text-base group"
                      data-testid="button-cta-online"
                    >
                      Võta ühendust
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
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
              © {new Date().getFullYear()} RasmusKala. Kõik õigused kaitstud. |{" "}
              <a
                href="https://alexeerma.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Web by Alexeerma
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
