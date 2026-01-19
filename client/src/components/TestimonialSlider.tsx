import { motion } from "framer-motion";
import { useState, useRef } from "react";

const testimonials = [
  {
    quote: "Soovitan, Rasmus leiab alati lahendused probleemidele ja suudab teha kavasid lähtuvalt sportlase vajadusest.",
    author: "Aleksander",
    authorJob: "BigBank Tartu võrkpallur"
  },
  {
    quote: "Olen Rasmusega treeninud 2,5 aastat, tunnen ennast võistlustel enesekindlamalt ja jõusaalis tugevamana, meeldib, et jõusaali kavad on mitmekülgsed ja arvestavad ka minu spordialaga! On näha, et hoolib oma treenitavatest ja on oma enda elustiiliga heaks eeskujuks!",
    author: "Katriin",
    authorJob: "Kestvusratsutaja"
  },
  {
    quote: "Tundsin ennast hooaja sees kiiremalt ja võimsamalt, soovitan noor-sportlastele, kes tahavad enda füüsilist võimekust arendada!",
    author: "Kaur",
    authorJob: "Korvpallur"
  },
  {
    quote: "Rasmus on väga äge isiksus ja suurepärane treener. Ta on sotsiaalne, toetav ning oskab luua mõnusa ja motiveeriva õhkkonna. Iga trenn on huvitav, mitmekesine ja alati kohandatud vastavalt treenitava vajadustele.",
    author: "Tauri Kilk",
    authorJob: "Eesti esi meessulgpallur"
  },
  {
    quote: "Lõpuks ometi treener, kes mõistab minu eesmärke ja aitab neid saavutada. Olen väga tänulik!",
    author: "Tiiu",
    authorJob: "Harrastussportlane"
  },
  {
    quote: "Olin jõutreeningutega eelnevalt vähe kokkupuutunud, Rasmusega treenima hakkates sain aru, et jõutrenn võib väga meeldiv olla ja nüüd see on minu igapäeva osa mida alati ootan!",
    author: "Annika",
    authorJob: "Harrastus tennisist"
  },
  {
    quote: "Olen peaaegu aasta Rasmus Kalaga koostööd teinud ning kogu see aeg on meil koostöö sujunud suurepäraselt. ",
    author: "Kaspar",
    authorJob: "Sulgpallur"
  },
  {
    quote: "Lõpuks ometi treener, kes mõistab minu eesmärke ja aitab neid saavutada. Olen väga tänulik!",
    author: "Kaspar Kort",
    authorJob: "Maadleja"
  }
];

export function TestimonialSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDragStart = () => {
    setIsDragging(true);
    if (sliderRef.current) {
      // Remove animation class completely to avoid transform conflicts
      sliderRef.current.classList.remove("animate-marquee");
      sliderRef.current.style.animation = "none";
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Restart animation after a brief delay to allow transform to reset
    const currentRef = sliderRef.current;
    if (currentRef) {
      // Reset transform to let CSS animation take over
      currentRef.style.transform = "";
      // Small delay to ensure smooth transition
      setTimeout(() => {
        if (currentRef) {
          currentRef.classList.add("animate-marquee");
          currentRef.style.animation = "";
        }
      }, 50);
    }
  };

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing">
      <motion.div
        ref={sliderRef}
        className={`flex gap-6 px-3 ${!isDragging ? "animate-marquee" : ""}`}
        drag="x"
        dragConstraints={{ left: -Infinity, right: 0 }}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0 gap-6">
            {testimonials.map((story, i) => (
              <div 
                key={`${setIndex}-${i}`}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 w-[350px] shrink-0 relative overflow-hidden group"
                data-testid={`card-testimonial-${setIndex}-${i}`}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-full"></div>
                
                <div className="relative z-10">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <div className="font-medium text-white">{story.author}</div>
                  <div className="font-light text-sm text-gray">{story.authorJob}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

