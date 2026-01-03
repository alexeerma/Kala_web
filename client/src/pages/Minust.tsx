import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Users,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import aboutImage from "@assets/Kalav3_1767425407543.jpg";
import kalaminust from "@assets/Kala.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Minust() {
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

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Intro Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5">
                  <img
                    src={kalaminust}
                    alt="Personal Trainer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
                  Minu taust
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <h4 className="text-lg font-medium text-white mb-6 leading-tight">
                    Mina olen Rasmus, <br /> Olen sertifitseeritud
                    jõusaalitreener, <br />
                    omades EOK kutsetunnistust EKR 4.
                  </h4>
                  <p>
                    Sport ja tervislik eluviis on mulle südamelähedane valdkond.
                    Ma olen lapsest saati tegelenud aktiivselt spordiga ja tahan
                    aidata ka Sinul realiseerida enda kehalist potentsiaali.
                  </p>
                  <p>
                    Olen lõpetanud Tartu Ülikooli Kehakultuuriteaduskonna
                    kehalise kasvatuse ja spordi eriala ning läbinud erinevaid
                    erialaseid koolitusi.
                  </p>
                  <p>
                    Mul on olemas kogemus ÜKE treenerina pallimängualade
                    (jalgpall, korvpall), reketialade (tennis, sulgpall) kui ka
                    individuaal-sportlaste treenimisel (kergejõustik, maadlus,
                    ratsutajad).
                  </p>
                  <p>
                    Minu klientideks on ka täiesti tavalised inimesed
                    erinevatelt elualadelt, kes on otsustanud enda tervist ja
                    heaolu muuta (ettevõtjad, IT spetsialistid, arstid,
                    õpetajad).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Mida ma teen?
                  </h2>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <p>
                      Viin läbi{" "}
                      <span className="text-white font-medium">
                        ÜKE treeninguid
                      </span>{" "}
                      ehk üldkehalise ettevalmistuse treeninguid. ÜKE
                      treeningute läbiviimisel ja planeerimisel pean oluliseks
                      spordiala füüsilisi nõudmisi.
                    </p>
                    <p>
                      Personaal-treeningutesse ootan ka inimesi, kes tahavad
                      enda füüsilist võimekust arendada ja teha jõutreeningutest
                      enda igapäevaelu osa.
                    </p>
                    <p>
                      Erineva tasemega sportlaste ja harrastajatega tegelemisel
                      lähtun nende kehalisest hetkeseisust, spordialast ja
                      soovitud eesmärkidest, et välja töötada individuaalne
                      tegevuskava.
                    </p>
                    <p>
                      Treenerina ma tahan, et iga sportlane saaks kasutada enda
                      täit potentsiaali füüsiliste võimete arendamisel.{" "}
                      <span className="text-white font-medium">
                        Iga inimene on erinev ja vajab individuaalset
                        lähenemist.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                Minu treeningfilosoofia
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Minu treeningute filosoofia on see, et{" "}
                  <span className="text-white font-medium">
                    treening peab olema nauditav ja arendav
                  </span>
                  . Läbi selle tekib elustiili muutus, mis tagab järjepidevuse
                  ja jõudmise soovitud tulemusteni.
                </p>
                <p>
                  Kõige olulisemaks pean treeneritöö juures seda, et saan aidata
                  inimestel jõuda sinna, kus treeningutest saab nende igapäeva
                  osa.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Target, label: "Individuaalne" },
                  { icon: Target, label: "Eesmärgipärane" },
                  { icon: Zap, label: "Jätkusuutlik" },
                  { icon: Users, label: "Arenev" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 text-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group"
                  >
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full"></div>

                    <div className="relative z-10 w-full flex flex-col items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Link href="/kontakt">
                <Button
                  className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium"
                  data-testid="button-about-contact"
                >
                  Võta ühendust
                </Button>
              </Link>
            </motion.div>
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
