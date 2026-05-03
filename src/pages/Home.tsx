import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { ReviewSection } from "../components/ReviewSection";

export function Home() {
  return (
    <div className="bg-[#FAFAFA] text-[#111111]">
      <Hero />
      <Intro />
      <ReviewSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-end pb-24 px-6 md:px-12 border-b border-[#111111]/10 pt-32">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center space-x-4 mb-12"
          >
            <div className="w-3 h-3 bg-[#FF4D00]"></div>
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#111111]/50">
              xCelero Labs / XHansa 3.0 Platform
            </span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.9] font-display font-medium tracking-tight mb-8 text-balance uppercase"
          >
            Critical<br />
            Technologies.
          </motion.h1>
        </div>

        <div className="lg:col-span-4 flex flex-col lg:items-end">
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="text-lg leading-[1.6] text-[#111111]/60 font-medium mb-12 max-w-md lg:text-right"
          >
            Critical tech isn't just software. It's the nervous system of civilization. For the Global South, it means sovereignty.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/platform" className="px-8 py-4 bg-[#111111] text-white text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-[#FF4D00] transition-colors flex items-center justify-center sm:justify-start gap-4 group w-full sm:w-auto">
              Explore The Platform
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto mt-24 h-[50vh] md:h-[60vh] overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" 
          alt="Clean Room Laboratory" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}

function Intro() {
  const stats = [
    { label: "XHansa Hubs", value: "190" },
    { label: "African Nodes", value: "171" },
    { label: "Fellows", value: "500" },
    { label: "XEmbassy Sq Ft", value: "42K" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 border-b border-[#111111]/10">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-[11px] font-mono tracking-widest uppercase mb-12 text-[#FF4D00]">The Future We're Building</h2>
          <div className="text-[#111111]/80 font-medium leading-[1.7] space-y-6 text-xl text-balance">
            <p>
              The dominant model of global innovation is broken. It is centralized, extractive, and myopic. We reject the models that hoard opportunity.
            </p>
            <p>
              Under xHansa, true sovereignty is technological: the ability to generate electricity, secure food, purify water, and defend networks on one's own terms.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-16">
          {stats.map((stat, i) => (
            <div key={i} className="border-t border-[#111111]/10 pt-4">
              <div className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-2">{stat.value}</div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#111111]/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
