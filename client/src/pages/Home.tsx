import { Navbar } from "@/components/Navbar";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
    question: "Mis on jõu- ja üldkehaline treening?",
    answer:
      "Jõu- ja üldkehaline treening aitab sul muutuda tugevamaks, vastupidavamaks ja liikuvamaks. Treeningud on läbimõeldud ja eesmärgipõhised ning arendavad kehalisi võimeid ja aitavad ennetada vigastusi. Kuigi seda treening meetodit kasutavad palju sportlased, sobib see suurepäraselt ka igapäevase vormi ja tervise parandamiseks.",
  },
  {
    question: "Kellele jõutreeningud sobivad?",
    answer:
      "Jõutreening sobib kõigile – nii harrastajatele kui ka kogenud treenijatele, sportlastele, kontoritöötajatele, eakamatele ning neile, kes taastuvad vigastusest. Programm kohandatakse alati sinu taseme ja eesmärkide järgi.",
  },
  {
    question: "Kas mul peab olema varasem treeningkogemus?",
    answer:
      "Ei pea. Paljud alustavad täiesti nullist. Alustame alati Sinule sobiva koormusega ja liigume edasi tempos, mis on sulle turvaline ja jõukohane.",
  },
  {
    question: "Milliseid tulemusi on võimalik saavutada?",
    answer: `Jõu- ja üldkehaline treening aitab sul:<br />
- saada tugevamaks ja kasvatada lihasmassi<br />
- parandada sportlikku vormi<br />
- muuta kehakoostist<br />
- parandada liikuvust ja painduvust<br />
- vähendada vigastuste riski<br />
- tunda end paremini ja enesekindlamalt`,
  },
  {
    question: "Kuidas treeningprogramm koostatakse?",
    answer:
      "Programm luuakse personaalselt sulle. Arvesse võetakse sinu  kehalist võimekust, varasemaid vigastusi, elustiili ja eesmärke. Treeninguid kohandatakse järepidevalt vastavalt sinu arengule.",
  },
  {
    question: "Kui tihti peaks treenima?",
    answer:
      "Enamasti piisab 2–4 treeningust nädalas. Oluline on järjepidevus ja treeningute kvaliteet, mitte iga päev treenimine.",
  },
  {
    question: "Kas jõutreening on ohutu?",
    answer:
      "Jah. Õige juhendamise ja läbimõeldud intensiivsusega on jõutreening turvaline. Pöörame palju tähelepanu tehnikale ja korrektsele sooritusele.",
  },
  {
    question: "Kas treeningud sobivad ka vigastuste korral?",
    answer:
      "Jah. Harjutusi saab kohandada vastavalt vigastustele või liikumispiirangutele.",
  },
  {
    question: "Kui pikad on treeningud?",
    answer: "Treening kestab tavaliselt 60min.",
  },
  {
    question: "Millist varustust mul vaja on?",
    answer:
      "Kohapeal jõusaalis treenides on kogu varustus olemas. Online-treeningud kohandatakse vastavalt sellele, kas treenid kodus või jõusaalis.",
  },
  {
    question: "Kui kiiresti tulemusi näeb?",
    answer:
      "Enamasti on esimesed muutused tunda juba 3–6 nädalaga. Silmaga nähtavad tulemused ilmnevad tavaliselt 8–12 nädalaga, kui treenid ja toitud järjepidevalt.",
  },
  {
    question: "Kas annate ka toitumisnõu?",
    answer:
      "Anname üldisi toitumissoovitusi, mis toetavad treeningut ja taastumist. Täpsema toitumiskava puhul soovitame vajadusel spetsialisti.",
  },
  {
    question: "Kuidas alustada?",
    answer:
      "Alustamiseks broneeri konsultatsioon või võta ühendust Minuga kodulehe kaudu. Räägime sinu eesmärkidest ja paneme koos paika treeningplaani, mis sulle päriselt sobib.",
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
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"
          }`}
      >
        <div className="text-gray-400 leading-relaxed px-2">
          {answer.split("<br />").map((line, index, array) => (
            <span key={index}>
              {line}
              {index < array.length - 1 && <br />}
            </span>
          ))}
        </div>
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
      <SEO
        title="Rasmus Kala personaaltreeningud"
        description="Personaaltreeningud sportlastele ja harrastajatele. Üldkehaline ettevalmistus, jõutreeningud ja online juhendamine. Alusta oma teekonda parema tervise poole."
        url="https://rasmuskala.ee"
        keywords="rasmus kala, üldkehaline ettevalmistus, personaaltreening harrastajatele, personaaltreening Tallinnas, ÜKE sportlastele, online coaching, eratreening, personaaltreening"
      />
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
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-6"
            >
              Üldkehaline ettevalmistus sportlastele ja personaaltreening
              harrastajatele
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
            >
              Professionaalne juhendamine ja individuaalsed treening-programmid,
              harrastajatele ja sportlastele
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link href="/kontakt">
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
              </Link>
              <Link href="/hinnakiri">
                <Button
                  variant="ghost"
                  onClick={() =>
                    document
                      .querySelector("#services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white hover:bg-white/5 rounded-full border border-white/10 px-8 py-6 font-medium text-base group"
                  data-testid="button-hero-learn"
                >
                  Vaata programme
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
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
                  "Jõutreening",
                  "Toitumisnõustamine",
                  "Taastumissoovitused",
                  "Elustiil",
                  "Harjumused",
                  "Jooksja jõutreening",
                  "Üldkehaline ettevalmistus",
                  "Grupitreeningud",
                  "Treeningkava",
                  "Online juhendamine",
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
              { value: "5+", label: "Aastat treenritööd" },
              { value: "10+", label: "Aastat spordis" },
              { value: "500+", label: "Eratreeningut" },
              { value: "100+", label: "Õnnelikku klienti" },
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

      {/* What I Do Section */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-4">
              Mida ma teen
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Personaaltreeningud Tartus, Tallinnas ja online's.
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                Olen sertifitseeritud{" "}
                <strong className="text-white">jõusaalitreener</strong>, kes
                pakub{" "}
                <strong className="text-white">personaaltreeninguid</strong> nii
                harrastajatele kui ka sportlastele. Minu teenused hõlmavad{" "}
                <strong className="text-white">jõutreeninguid</strong>,{" "}
                <strong className="text-white">
                  üldkehalist ettevalmistust (ÜKE)
                </strong>{" "}
                sportlastele,{" "}
                <strong className="text-white">online juhendamist</strong> ja{" "}
                <strong className="text-white">toitumisnõustamist</strong>.
                Treenin kliente nii jõusaalis{" "}
                <strong className="text-white">Tallinnas</strong> kui ka{" "}
                <strong className="text-white">online&apos;s</strong>, pakkudes
                paindlikke lahendusi igale tasemele.
              </p>
              <p>
                Minu lähenemine põhineb turvalisel tehnikal,{" "}
                <strong className="text-white">vigastuste ennetamisel</strong>{" "}
                ja järjepideval arengul. Kasutan tõestatud meetodeid, mis
                aitavad saavutada paremaid tulemusi – olgu siis eesmärgiks{" "}
                <strong className="text-white">jõu kasvatamine</strong>, vormi
                parandamine, sooritusvõime tõstmine või tervise säilitamine.
                Pakun ka{" "}
                <strong className="text-white">grupitreeninguid</strong> kuni 4
                inimesele, mis on suurepärane valik tiimikaaslastele või
                sõpradele.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Personaaltreening harrastajale
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Individuaalsed{" "}
                <strong className="text-gray-300">treeningkavad</strong> ja
                juhendamine, mis aitavad parandada vormi, enesetunnet ja
                tervist. Sobib nii algajale kui ka kogenud treenijale. Pakun{" "}
                <strong className="text-gray-300">personaaltreeninguid</strong>{" "}
                nii üksiktreeningutena kui ka pikaajaliste pakettidena.{" "}
                <strong className="text-gray-300">Jõutreening</strong>{" "}
                harrastajatele on suunatud turvalise tehnika õpetamisele ja
                järjepidevale arengule.
              </p>
              <ul className="text-gray-500 text-xs space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Jõutreening algajatele ja kogenud treenijatele</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Vormi parandamine ja kehakoostise muutmine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Toitumisnõustamine ja elustiili muutmine</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Üldkehaline ettevalmistus (ÜKE) sportlastele
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Spordiala spetsiifiline{" "}
                <strong className="text-gray-300">ÜKE treening</strong>{" "}
                sportlastele ja noorsportlastele, mis tõstab sooritusvõimet,
                arendab jõudu ja aitab vähendada vigastuste riski.{" "}
                <strong className="text-gray-300">
                  Üldkehaline ettevalmistus
                </strong>{" "}
                on oluline osa iga spordiharjutuse treeningkavast. Pakun{" "}
                <strong className="text-gray-300">ÜKE treeninguid</strong> nii
                individuaalselt kui ka grupitreeningutena.
              </p>
              <ul className="text-gray-500 text-xs space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>ÜKE treening noorsportlastele ja tippsportlastele</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Vigastuste ennetamine ja taastumise kiirendamine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Sooritusvõime parandamine ja jõu arendamine</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Online juhendamine ja treeningkavad
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Paindlik{" "}
                <strong className="text-gray-300">online coaching</strong> ja{" "}
                <strong className="text-gray-300">online juhendamine</strong>,
                kus saad personaalse treeningkava, videoanalüüsi ja jooksvat
                tagasisidet – treeni seal, kus sulle sobib.{" "}
                <strong className="text-gray-300">
                  Online personaaltreening
                </strong>{" "}
                on ideaalne lahendus neile, kes soovivad treenida kodus või
                reisides. Pakun ka{" "}
                <strong className="text-gray-300">
                  kuupõhiseid treeningkavasid
                </strong>{" "}
                ja <strong className="text-gray-300">toitumisnõustamist</strong>
                .
              </p>
              <ul className="text-gray-500 text-xs space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Kuupõhised treeningkavad ja pidev tagasiside</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Videoanalüüsid ja tehnika parandamine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">•</span>
                  <span>Toitumisnõustamine ja elustiili kohandamine</span>
                </li>
              </ul>
            </motion.div>
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
                <div className="text-3xl font-semibold">5+</div>
                <div className="text-sm text-gray-600">
                  Aastat treeneri kogemust
                </div>
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
                  Üle 10 aastase kogemusega spordis ja aktiivses eluviisis olen aidanud klientidel muuta mitte ainult oma füüsilist tervist, vaid ka enesekindlust ja distsipliini treeningprotsessis.
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/rasmus.kalaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rasmus-kala-534295157/"
                target="_blank"
                rel="noopener noreferrer"
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
