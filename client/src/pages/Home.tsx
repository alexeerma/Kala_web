import { Navbar } from "@/components/Navbar";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Users,
  ChevronRight,
  ChevronDown,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import heroImage from "@assets/Kala_tossu_1767425326571.jpg";
import aboutImage from "@assets/Kalav3_1767425407543.jpg";
import kalarow from "@assets/Kalarow.jpeg";
import kalaminust from "@assets/Kala.jpg";

const faqs = [
  {
    question: "Kas personaaltreening sobib algajatele?",
    answer:
      "Jah, personaaltreening sobib suurepäraselt algajatele! Kohandan kõik harjutused vastavalt Sinu tasemele ja õpetan õiget tehnikat algusest peale. See on tegelikult parim viis alustada, kuna väldid vigade tekkimist ja saad tugeva aluse.",
  },
  {
    question: "Kui tihti peaksin treenima?",
    answer:
      "Optimaalne treeningsagedus sõltub Sinu eesmärkidest ja elustiilist. Algajatele soovitan alustada 2-3 treeninguga nädalas, et keha saaks piisavalt taastuda. Edasijõudnutele võib sobida 4-5 treeningut nädalas.",
  },
  {
    question: "Kas ma pean järgima kindlat dieeti?",
    answer:
      "Ei pea järgima ranget dieeti. Aitan Sul luua jätkusuutlikke toitumisharjumusi, mis sobivad Sinu elustiiliga. Fookus on tasakaalustatud toitumisel, mitte piiravatel dieetidel.",
  },
  {
    question: "Kui kiiresti tulemusi näen?",
    answer:
      "Esimesi muutusi enesetundes ja energiatasemes märkad juba esimeste nädalate jooksul. Nähtavad füüsilised muutused ilmnevad tavaliselt 4-8 nädala pärast järjepideva treenimisega.",
  },
  {
    question: "Mis juhtub, kui pean treeningu tühistama?",
    answer:
      "Treeningu saab tühistada vähemalt 24 tundi ette ilma lisatasuta. Hilisema tühistamise korral läheb treening kaotsi. Erandkorras leiame alati lahenduse.",
  },
  {
    question: "Kas pakud ka online treeninguid?",
    answer:
      "Jah! Pakun nii online juhendamist kui ka personaalseid treeningkavasid. Online juhendamine sisaldab kuupõhist kava, pidevat tagasisidet, videoanalüüse ja toitumisnõustamist.",
  },
  {
    question: "Milline varustus mul vaja on?",
    answer:
      "Treeninguks piisab mugavatest spordiriietest ja tossudest. Kõik vajalikud vahendid on jõusaalis olemas. Koduseks treeninguks soovitan soetada kummilindid ja joogateki.",
  },
  {
    question: "Kas saab treenida ka sõbraga koos?",
    answer:
      "Kindlasti! Pakun spetsiaalseid paarispersonaaltreeningu pakette. See on suurepärane viis hoida motivatsiooni ja jagada kulusid sõbraga.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover-elevate active-elevate-2 rounded-lg px-2 -mx-2"
        data-testid={`faq-${question
          .slice(0, 20)
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed px-2">{answer}</p>
      </div>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
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
                Sihtgrupp: Harrastajad, sportlased ja noorsportlased
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6"
            >
              Üldkehaline ettevalmistus vastavalt Sinu füüsilistele eesmärkidele
              või spordialale.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
            >
              Professionaalne juhendamine ja kohandatud programmid, mis on
              Algajatest kuni sportlasteni aitanud oma taset tõsta.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium text-base"
                data-testid="button-hero-start"
              >
                Alusta kohe
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
                  "Vigastusest taastumine",
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
              { value: "50+", label: "Rahulolevat klienti" },
              { value: "7+", label: "Aastat kogemust" },
              { value: "5000+", label: "Läbitud treeningut" },
              { value: "100%", label: "Hea enesetunne" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-semibold text-white mb-2">
                  {stat.value}
                </div>
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
                  src={kalaminust}
                  alt="Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-black rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-semibold">7+</div>
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
                Tere, olen Rasmus. Olen sertifitseeritud jõusaalitreener, omades
                EOK kutsetunnistust EKR 4.
              </h2>

              <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                <p>
                  Sport ja tervislik eluviis on mulle südamelähedane valdkond.
                  Ma olen lapsest saati tegelenud aktiivselt spordiga ja tahan
                  aidata ka Sinul realiseerida enda kehalist potentsiaali.
                </p>
                <p>
                  Üle 10 aasta kogemusega jõu- ja liikumisharjutustes olen
                  aidanud kliente muuta mitte ainult oma keha, vaid ka
                  enesekindlust ja distsipliini.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { icon: Target, label: "Eesmärgipõhine" },
                  { icon: Zap, label: "High energy" },
                  { icon: Users, label: "Kogukond" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 text-center"
                  >
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
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Teenused
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Personaalsed treeningpaketid
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Alates üksikutest treeningutest kuni pikaajalise online
              juhendamiseni — leia endale sobiv lahendus.
            </p>
            <Link href="/hinnakiri">
              <Button
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium text-base group"
                data-testid="button-view-pricing"
              >
                Vaata hinnakirja
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 md:py-28 bg-white/[0.02] overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Tagasiside
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Mida kliendid räägivad
            </h2>
          </div>
        </div>

        <TestimonialSlider />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              KKK
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Korduma kippuvad küsimused
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full"></div>

                <div className="relative z-10">
                  {faqs.map((faq, i) => (
                    <FAQItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={kalarow} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Valmis alustama oma muutumist?
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Võta minuga ühendust ja leiame koos Sulle sobiva lahenduse. Vastan
              24 tunni jooksul.
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-semibold text-white">RasmusKala</div>
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
                href="https://www.instagram.com/rasmuskala/"
                className="text-gray-500 hover:text-white transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/rasmus.kalaa"
                className="text-gray-500 hover:text-white transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rasmus-kala-534295157/"
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
