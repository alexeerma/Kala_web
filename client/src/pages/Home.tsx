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
                Transform your body and mind
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
              The most effective personal training platform
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              Expert coaching and customized programs powering hundreds of transformations. From beginners to athletes, achieve your fitness goals with personalized guidance.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium text-base"
                data-testid="button-hero-start"
              >
                Get Started
              </Button>
              <Button 
                variant="ghost"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-8 py-6 font-medium text-base group"
                data-testid="button-hero-learn"
              >
                View Programs
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Pills */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
              "Personal Training",
              "Nutrition Plans", 
              "Online Coaching",
              "Group Sessions",
              "Body Analysis",
              "Progress Tracking"
            ].map((feature, i) => (
              <span 
                key={i} 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "5,000+", label: "Sessions Completed" },
              { value: "98%", label: "Success Rate" },
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
                <div className="text-sm text-gray-600">Years of experience</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
                About me
              </span>
              
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                More than just workouts. A complete transformation.
              </h2>
              
              <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                <p>
                  I believe that true strength is built in the mind first. The body simply follows. My philosophy isn't about quick fixes—it's about building a sustainable lifestyle that empowers you.
                </p>
                <p>
                  With over 10 years of experience in strength and conditioning, I've helped hundreds of clients transform not just their physique, but their confidence and discipline.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { icon: Target, label: "Goal Focused" },
                  { icon: Zap, label: "High Energy" },
                  { icon: Users, label: "Community" },
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
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Choose your training program
            </h2>
            <p className="text-gray-400 text-lg">
              Select the plan that fits your goals and lifestyle. All plans include personalized attention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ServiceCard 
              title="Online" 
              price="$150" 
              description="Perfect for self-motivated individuals"
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
              description="The best of both worlds"
              popular={true}
              features={[
                "Everything in Online",
                "2 In-Person Sessions/Month",
                "Body Composition Analysis",
                "Custom Meal Plans",
                "Priority Support"
              ]}
            />
            <ServiceCard 
              title="Elite" 
              price="$800" 
              description="Full immersion coaching"
              features={[
                "3 Sessions Per Week",
                "Daily Accountability",
                "Grocery Shopping Guide",
                "Supplement Protocols",
                "Physiotherapy Access"
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
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              What clients are saying
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "I never thought I could achieve these results in just 3 months. The discipline I learned here changed my life.",
                author: "Sarah Johnson",
                role: "Entrepreneur"
              },
              {
                quote: "The attention to detail on form and technique is unmatched. No injuries, just pure progress.",
                author: "Michael Torres",
                role: "Software Engineer"
              },
              {
                quote: "It's challenging, it's rewarding, and it's absolutely worth every session. Best investment in myself.",
                author: "David Reynolds",
                role: "Architect"
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
                  Get in touch
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to start your transformation?
                </h2>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  Fill out the form and I'll get back to you within 24 hours. Let's build your roadmap to success together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Location</h3>
                      <p className="text-gray-500">123 Fitness Street, New York, NY 10012</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Contact</h3>
                      <p className="text-gray-500">hello@fitpro.com</p>
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
              © {new Date().getFullYear()} FitPro Training. All rights reserved.
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
