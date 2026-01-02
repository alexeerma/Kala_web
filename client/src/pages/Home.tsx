import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { ArrowDown, Dumbbell, Timer, Trophy, Users } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* gym workout dark moody aesthetic */}
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center gap-6"
          >
            <motion.span variants={fadeInUp} className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-gray-400">
              Transform Your Body
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-white">
              Forge Your <br />
              <span className="text-stroke">Legacy</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed">
              Elite personal training designed to push your limits. 
              Break through barriers and build the physique you deserve.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="pt-8">
              <button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                Start Your Journey
                <div className="absolute inset-0 border border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-white/50 w-8 h-8" />
        </motion.div>
      </section>

      {/* Stats / Features Banner */}
      <div className="border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Dumbbell, label: "Strength Training", value: "100%" },
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: Timer, label: "Sessions", value: "5k+" },
              { icon: Trophy, label: "Transformations", value: "150+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-8 h-8 text-white mb-2" />
                <div className="text-3xl font-display font-bold">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 border border-white/10 z-0 translate-x-4 translate-y-4"></div>
              {/* fitness trainer portrait black and white */}
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
                alt="Trainer Portrait" 
                className="w-full h-auto grayscale relative z-10 shadow-2xl"
              />
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 md:order-2"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl mb-6">
                More Than Just <br /><span className="text-gray-500">A Workout</span>
              </motion.h2>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-gray-300">
                <p className="text-lg">
                  I believe that true strength is built in the mind first. The body simply follows. My philosophy isn't about quick fixes or temporary results—it's about building a sustainable lifestyle that empowers you.
                </p>
                <p className="text-lg">
                  With over 10 years of experience in strength and conditioning, I've helped hundreds of clients transform not just their physique, but their confidence and discipline.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-20 bg-white mb-6"></div>
                  <p className="font-display text-xl uppercase tracking-widest text-white">
                    - Alex "Iron" Mercer
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Training Programs</h2>
            <p className="text-gray-400 text-lg">Choose the path that fits your goals and lifestyle.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard 
              title="Online" 
              price="$150" 
              description="Perfect for self-motivated individuals who need structure."
              features={[
                "Customized Workout Plan",
                "Weekly Check-ins",
                "Nutritional Guidance",
                "Form Analysis via Video",
                "24/7 In-app Support"
              ]}
            />
            <ServiceCard 
              title="Hybrid" 
              price="$350" 
              description="The best of both worlds. Guidance + hands-on coaching."
              popular={true}
              features={[
                "Everything in Online",
                "2 In-Person Sessions/Month",
                "Advanced Body Composition Analysis",
                "Custom Meal Plans",
                "Priority Support"
              ]}
            />
            <ServiceCard 
              title="Elite" 
              price="$800" 
              description="Full immersion coaching for maximum results."
              features={[
                "3 Sessions Per Week",
                "Daily Accountability",
                "Grocery Shopping Guide",
                "Supplement Protocols",
                "Physiotherapy Consultation"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl text-center mb-16">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "I never thought I could achieve these results in just 3 months. The discipline I learned here changed my life.",
                author: "Sarah J.",
                role: "Entrepreneur"
              },
              {
                quote: "The attention to detail on form and technique is unmatched. No injuries, just pure progress.",
                author: "Mike T.",
                role: "Software Engineer"
              },
              {
                quote: "It's brutal, it's tough, and it's absolutely worth every drop of sweat. Best investment in myself.",
                author: "David R.",
                role: "Architect"
              }
            ].map((story, i) => (
              <div key={i} className="bg-card p-8 border border-white/5 relative group hover:border-white/20 transition-colors">
                <div className="text-6xl text-white/10 font-serif absolute top-4 left-4">"</div>
                <p className="text-gray-300 mb-6 relative z-10 pt-4 leading-relaxed">
                  {story.quote}
                </p>
                <div>
                  <div className="font-bold text-white uppercase tracking-wider">{story.author}</div>
                  <div className="text-sm text-gray-500">{story.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white text-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl mb-6">Ready to <br />Start?</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-md">
                Don't wait for motivation. Discipline starts now. Fill out the form and let's build your roadmap to success.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-gray-600">123 Iron Street, Muscle District<br />New York, NY 10012</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Contact</h3>
                  <p className="text-gray-600">training@ironforge.com<br />+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-wider">Get in Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-display font-bold tracking-tighter text-white">
            IRON<span className="text-gray-500">FORGE</span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} IronForge Training. All rights reserved.
          </div>
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
            {['Instagram', 'Twitter', 'YouTube'].map(social => (
              <a key={social} href="#" className="text-gray-500 hover:text-white uppercase text-xs tracking-widest transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
