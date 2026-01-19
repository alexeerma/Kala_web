import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Check, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import kalarow from "@assets/Kalarow.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  wide?: boolean;
  packageValue?: string;
}

function PriceCard({
  title,
  price,
  description,
  features,
  popular,
  wide,
  packageValue,
}: PriceCardProps) {
  if (wide) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 p-8 lg:px-12 lg:py-10 rounded-2xl transition-all duration-300 overflow-hidden group ${
          popular
            ? "bg-white text-black"
            : "bg-white/[0.03] border border-white/10 text-white hover:border-white/20"
        }`}
        data-testid={`card-price-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {/* Subtle glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent ${
            popular ? "via-black/[0.05]" : "via-white/[0.08]"
          } to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full`}
        ></div>

        {/* Left section - Title, Description, Price */}
        <div className="flex-shrink-0 lg:w-64 relative z-10">
          <h3 className="text-xl lg:text-2xl font-semibold mb-2">{title}</h3>
          <p
            className={`text-sm leading-relaxed mb-4 ${
              popular ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {description}
          </p>
          <span className="text-3xl lg:text-4xl font-semibold">{price}</span>
        </div>

        {/* Middle section - Features in grid */}
        <div className="flex-grow relative z-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <div
                  className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
                    popular ? "bg-black" : "bg-white"
                  }`}
                >
                  <Check
                    className={`w-3 h-3 ${
                      popular ? "text-white" : "text-black"
                    }`}
                  />
                </div>
                <span className={popular ? "text-gray-700" : "text-gray-300"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section - Button */}
        <div className="flex-shrink-0 lg:w-48 relative z-10">
          <Link href={packageValue ? `/kontakt?pakett=${encodeURIComponent(packageValue)}` : "/kontakt"}>
            <Button
              className={`w-full rounded-full font-medium py-6 ${
                popular
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
              data-testid={`button-choose-${title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              Võta ühendust
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col h-full p-8 rounded-2xl transition-all duration-300 overflow-hidden group ${
        popular
          ? "bg-white text-black"
          : "bg-white/[0.03] border border-white/10 text-white hover:border-white/20"
      }`}
      data-testid={`card-price-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Subtle glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${
          popular ? "via-black/[0.05]" : "via-white/[0.08]"
        } to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full`}
      ></div>

      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
            Populaarseim
          </span>
        </div>
      )}

      <div className="mb-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p
          className={`text-sm leading-relaxed ${
            popular ? "text-gray-600" : "text-gray-400"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="mb-8 relative z-10">
        <span className="text-4xl font-semibold">{price}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow relative z-10">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div
              className={`mt-0.5 rounded-full p-0.5 ${
                popular ? "bg-black" : "bg-white"
              }`}
            >
              <Check
                className={`w-3 h-3 ${popular ? "text-white" : "text-black"}`}
              />
            </div>
            <span className={popular ? "text-gray-700" : "text-gray-300"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="relative z-10">
        <Link href={packageValue ? `/kontakt?pakett=${encodeURIComponent(packageValue)}` : "/kontakt"}>
          <Button
            className={`w-full rounded-full font-medium py-6 ${
              popular
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            data-testid={`button-choose-${title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            Võta ühendust
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Hinnakiri() {
  const packages = [
    {
      title: "ÜKE treening",
      price: "60€",
      description: "Sportlasele mõeldud üldkehaline ettevalmistus treening",
      packageValue: "1x-ÜKE-treening",
      features: [
        "Saame tuttavaks",
        "Paneme paika esialgsed eesmärgid",
        "Spordiala spetsiifikat toetav",
        "Vigastusi ennetav",
        "Ajaline kestvus 1h-1,5h",
      ],
    },
    {
      title: "ÜKE treening 7korda",
      price: "366€",
      description: "7 korra ÜKE treening",
      packageValue: "7x-ÜKE-treening",
      features: [
        "Investeering füüsilise võimekuse tõstmisesse",
        "Harjutuste samm-sammuline läbi töötamine korrektse tehnikaga",
        "Spordiala spetsiifikat toetav",
        "Sooritusvõime arendamine",
        "Räägime sporditoitumisest ja taastumisest",
      ],
    },
    {
      title: "Grupitreening (Max 4 inimest)",
      price: "100€",
      description: "Ühekordne grupitreening jõusaalis",
      packageValue: "grupitreening",
      features: [
        "Treeni koos tiimikaaslastega",
        "Jaga tasu grupi vahel",
        "Suurem motivatsioon",
        "Koostöö arendamine",
        "Ajaline kestvus 1h-1,5h",
      ],
    },
    {
      title: "ÜKE Treeningkava",
      price: "80€/kuu",
      description: "Individuaalne ÜKE treeningkava arvestades:",
      packageValue: "sportlase-treeningkava",
      features: [
        "Sinu spordiala",
        "Eesmärke",
        "Hooaega ja võistluste hulka",
        "Kehalisi eripärasid ja vigastusi",
        "Vanust", 
        "Kestus - 1 kuud",
      ],
    },
    {
        title: "Online juhendamine sportlastele 1 kuu",
        price: "140€",
        description: "Kuupõhine juhendamine",
        packageValue: "online-juhendamine",
        features: [
          "Kuupõhine treeningkava",
          "Privaatne ja personaalne lähenemine",
          "Pidev tagasiside ja nõustamine",
          "Videoanalüüsid",
          "Toitumise optimeerimine enne ja peale võistlusi",
        ],
      },
      {
        title: "Online juhendamine 3 kuud",
        price: "395€",
        description: "Pikaajalisem juhendamine",
        packageValue: "online-juhendamine-3-kuud",
        features: [
          "Kuupõhine treeningkava",
          "Privaatne ja personaalne lähenemine",
          "Pidev tagasiside ja nõustamine",
          "Videoanalüüsid",
          "Toitumise optimeerimine enne ja peale võistlusi",
        ],
      },
      {
        title: "Kuupõhine liikmesus 1-treening nädalas",
        price: "Alates 180€",
        description: "Püsikliendi kuupõhised paketid",
        packageValue: "1x-nadalas-kuupõhine",
        features: ["1-treening nädalas - 45 eur treening"],
      },
      {
        title: "Kuupõhine liikmesus 2-treeningut nädalas",
        price: "Alates 320€",
        description: "Püsikliendi kuupõhised paketid",
        packageValue: "2x-nadalas-kuupõhine",
        features: ["2-treeningut nädalas - 40 eur treening"],
      },
      {
        title: "Kuupõhine liikmesus 3-treeningut nädalas",
        price: "Alates 420€",
        description: "Püsikliendi kuupõhised paketid",
        packageValue: "3x-nadalas-kuupõhine",
        features: ["3-treeningut nädalas - 35 eur treening"],
      },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Sportlase hinnakiri - Rasmus Kala"
        description="ÜKE treeningu hinnad sportlastele. Personaalsed paketid spordi arendamiseks ja sooritusvõime parandamiseks."
        url="https://rasmuskala.ee/sportlase-hinnakiri"
        keywords="sportlase hinnakiri, eratreening, rasmus kala"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
              Sportlase hinnakiri
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Vali endale sobiv pakett
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
              Personaalsed treeningpaketid sportlastele. Alustame koostööd ja jõuame järgmise tasemeni.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid - First 3 cards + Treeningkava */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <PriceCard key={i} {...pkg} />
            ))}
            {/* Treeningkava spanning all 3 columns */}
            <div className="lg:col-span-3">
              <PriceCard {...packages[3]} wide={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Online coaching section */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-4">
            Online coaching
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto text-center">
            Online coaching on personaalne ja paindlik nõustamine, mis jõuab
            Sinuni kõikjal, kus on internetiühendus. Koostan sulle personaalse,
            arengule keskenduva treeningkava. Kirjutan sulle iga trenni ette,
            sina vaid treeni kus ja millal sulle sobib.
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-12">
            {packages.slice(4, 6).map((pkg, i) => (
              <div key={`online-${i}`} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]">
                <PriceCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Püsika paketid */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-4">
            Püsikliendi kuupõhised paketid
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto text-center">
            Sobivus- püsiklientidele Treeningud- toimuvad kliendiga kokkulepitud
            aegadel. <br />
            Tühistamine- vähemalt 24h ette, hilise etteteatamisega
            treening loetakse kasutatuks.
          </p>
          <div
            className={`grid gap-6 max-w-6xl mx-auto mt-12 ${
              packages.slice(6).length === 1
                ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {packages.slice(6).map((pkg, i) => (
              <PriceCard key={`membership-${i}`} {...pkg} />
            ))}
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

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Valmis alustama?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
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
