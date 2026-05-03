import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ReviewSection } from "../components/ReviewSection";
import { programsData } from "../data/programs";

export function Programs() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 bg-[#111111] text-white">
        <div className="w-full max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[54px] md:text-[80px] lg:text-[100px] leading-[1] font-display font-medium tracking-tight mb-8">
              The Engine of <br />
              <em className="font-serif italic font-normal text-white/40 italic">Transformation</em>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl font-medium leading-relaxed">
              We operate as a Civilizational Venturing Platform, not a fund. Our programs are high-intensity pathways designed for different stages of the beginnings of progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-40 md:gap-64">
            {programsData.map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={`lg:col-span-6 space-y-10 ${idx % 2 !== 0 ? 'lg:col-start-7' : ''}`}>
                   <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center text-white shadow-2xl`}>
                        <program.icon className="w-8 h-8" />
                      </div>
                      <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">
                         STRATUM 0{idx + 1}
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                    <h2 className="text-[48px] md:text-[64px] lg:text-[84px] font-display font-medium tracking-tight leading-[0.95] mb-6">
                      {program.title}
                    </h2>
                    <p className="text-2xl font-serif italic text-[#111111]/40 leading-tight">
                      {program.tagline}
                    </p>
                   </div>

                   <p className="text-[20px] md:text-[22px] text-[#111111]/70 font-medium leading-[1.6] max-w-xl">
                    {program.desc}
                   </p>
                   
                   <div className="grid grid-cols-2 gap-8 pt-4">
                     {program.details.map((detail, i) => (
                       <div key={i} className="border-t border-[#111111]/10 pt-6">
                         <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111111]/40 mb-2">{detail.label}</div>
                         <div className="text-lg font-bold tracking-tight">{detail.value}</div>
                       </div>
                     ))}
                   </div>

                   <div className="pt-8">
                    <Link 
                      to={`/programs/${program.id}`} 
                      className="group inline-flex items-center gap-6 px-10 py-5 bg-[#111111] text-white text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#FF4D00] transition-all"
                    >
                      Explore Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                   </div>
                </div>
                
                <div className={`lg:col-span-6 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-[#F5F5F5] ${idx % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                   <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-6 md:px-12 bg-[#111111] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#FF4D00]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-[40px] md:text-[60px] font-display font-medium tracking-tight leading-[1.1] mb-12">
              Ready to take the <br />
              <em className="font-serif italic font-normal text-white/40 italic">beginning seriously?</em>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/apply" className="px-10 py-5 bg-[#FF4D00] text-white font-bold tracking-widest uppercase text-[12px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                Apply for Cohort 2026 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/approach" className="px-10 py-5 border border-white/20 text-white font-bold tracking-widest uppercase text-[12px] hover:bg-white hover:text-black transition-all text-center">
                Review Program Directives
              </Link>
            </div>
          </div>
          <div className="border border-white/10 p-12 bg-white/5 backdrop-blur-sm">
             <div className="text-[11px] font-mono tracking-widest uppercase text-[#FF4D00] mb-8">Next Deadline</div>
             <div className="text-4xl font-display font-medium mb-4 tracking-tight uppercase">May 15th, 2026</div>
             <p className="text-white/50 font-medium leading-relaxed mb-8">
               Applications are currently open for the xHansa Fellowship (Pioneering Enterprises Cohort) and the xCelero Accelerator.
             </p>
             <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Positions available</span>
                <span className="text-2xl font-display font-medium">1,000 Seats</span>
             </div>
          </div>
        </div>
      </section>

      <ReviewSection />
    </div>
  );
}
