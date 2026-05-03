import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronDown, PlayCircle, Plus, Minus, Users, Zap, Shield, Workflow, Activity } from "lucide-react";
import { programsData } from "../data/programs";

export function ProgramDetail() {
  const { id } = useParams();
  const program = programsData.find((p) => p.id === id);
  const [activeSteps, setActiveSteps] = useState<number[]>([0, 1, 2]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#111111]">
        <div className="text-center px-6">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#FF4D00] mb-4">404_PAGE_NOT_FOUND</p>
          <h1 className="text-3xl font-display font-medium mb-8 uppercase tracking-tighter">Directive Missing</h1>
          <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white text-[12px] font-bold uppercase tracking-widest hover:bg-[#FF4D00] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Return Explorer
          </Link>
        </div>
      </div>
    );
  }

  const programIndex = programsData.indexOf(program) + 1;

  return (
    <div className="bg-white text-[#1B1C1E] min-h-screen selection:bg-[#FF9CDF] selection:text-white pb-0 overflow-x-hidden">
      
      {/* Hero Section Blueprint */}
      <section className="pt-32 pb-12 px-6 lg:px-12 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-12">
          <div className="max-w-2xl">
             <h1 className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium uppercase leading-[0.9] text-[#1B1C1E] tracking-tighter mb-8 font-sans">
                {program.title}
             </h1>
             <p className="text-lg text-[#1B1C1E]/60 max-w-lg leading-relaxed font-sans">
                {program.tagline || "Where founders go from 0 to 1 with unfair odds: we push you to think bigger, execute faster, and 10x your chances of building a category-defining company in 12 months."}
             </p>
          </div>
          
          <button className="inline-flex items-center justify-center gap-2 bg-[#1B1C1E] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black transition-transform hover:scale-105 mb-2">
            Start your company <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1"><path d="M11 1L17 7M17 7L11 13M17 7H0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        
        {/* Banner Graphic Blueprint */}
        <div className="w-full relative overflow-hidden aspect-[2.5/1] bg-gradient-to-r from-[#D7A8F9] via-[#FF9C8E] to-[#FFA07A] flex items-center justify-center">
            <div className="absolute left-16 md:left-32 text-white font-mono text-sm md:text-base font-bold tracking-[0.2em] z-10">FROM 0</div>
            
            {/* Center abstract shape mockup */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center opacity-80">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
                    <path d="M100 0L186.6 50V150L100 200L13.4 150V50L100 0Z" stroke="white" strokeWidth="1"/>
                    <path d="M100 100L186.6 50" stroke="white" strokeWidth="1"/>
                    <path d="M100 100V200" stroke="white" strokeWidth="1"/>
                    <path d="M100 100L13.4 50" stroke="white" strokeWidth="1"/>
                </svg>
                {/* 3 stacked cubes mockup */}
                <div className="absolute inset-0 flex items-center justify-center -translate-y-8">
                    <div className="w-12 h-16 bg-white shrink-0 border border-[#111] rotate-[30deg] skew-y-[20deg]" />
                    <div className="w-12 h-20 bg-white/80 shrink-0 border border-[#111] translate-y-6 -translate-x-4 rotate-[30deg] skew-y-[20deg] pattern-diagonal-lines-sm text-gray-200" />
                    <div className="w-12 h-14 bg-white shrink-0 border border-[#111] translate-y-12 translate-x-4 rotate-[30deg] skew-y-[20deg]" />
                </div>
            </div>

            <div className="absolute right-16 md:right-32 text-white font-mono text-sm md:text-base font-bold tracking-[0.2em] z-10">TO 1</div>
        </div>
      </section>

      {/* Sticky Secondary Nav Blueprint */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-4 mb-24 z-40 bg-white">
          <a href="#our-track-record" className="px-6 py-3 rounded-full bg-[#FAFAFA] text-[#1B1C1E] text-sm font-medium hover:bg-[#F4F4F5] transition-colors border border-transparent hover:border-[#E5E7EB]">Our track record</a>
          <a href="#how-we-help" className="px-6 py-3 rounded-full bg-[#FAFAFA] text-[#1B1C1E] text-sm font-medium hover:bg-[#F4F4F5] transition-colors border border-transparent hover:border-[#E5E7EB]">How we help you</a>
          <a href="#what-you-get" className="px-6 py-3 rounded-full bg-[#FAFAFA] text-[#1B1C1E] text-sm font-medium hover:bg-[#F4F4F5] transition-colors border border-transparent hover:border-[#E5E7EB]">What you get</a>
          <a href="#ideas" className="px-6 py-3 rounded-full bg-[#FAFAFA] text-[#1B1C1E] text-sm font-medium hover:bg-[#F4F4F5] transition-colors border border-transparent hover:border-[#E5E7EB]">Ideas</a>
          <a href="#faq" className="px-6 py-3 rounded-full bg-[#FAFAFA] text-[#1B1C1E] text-sm font-medium hover:bg-[#F4F4F5] transition-colors border border-transparent hover:border-[#E5E7EB]">FAQ</a>
      </div>

      {/* Track Record Section Blueprint */}
      <section id="our-track-record" className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 lg:mb-32">
          <div className="flex items-center mb-6">
             <span className="text-[#FF4D00] text-[10px] mr-2">●</span>
             <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1B1C1E]/60">Our Track Record</span>
          </div>
          <p className="text-2xl lg:text-3xl max-w-3xl font-medium leading-relaxed text-[#1B1C1E]">
            Founders who build with {program.title} don't just start companies, they build category leaders. See how our companies outperform the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {(program.trackRecord || []).map((stat, i) => (
             <div key={i} className="border-l border-[#1B1C1E]/10 pl-6 space-y-4">
               <p className="font-mono text-sm tracking-widest text-[#1B1C1E]/60 uppercase">{stat.label}</p>
               <p className="text-5xl lg:text-7xl font-display font-medium tracking-tighter">
                 {stat.value}
               </p>
             </div>
           ))}
        </div>
      </section>

      <div className="w-full flex justify-center py-8">
         <img src="https://cdn.prod.website-files.com/68623ac33982350852c8bf02/68623ac33982350852c8c2e7_Gutter.png" alt="Divider" className="w-full max-w-[1400px] h-auto object-contain opacity-20" />
      </div>      {/* How We Help You Section Blueprint */}
      <section id="how-we-help" className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative">
         <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
               <div className="space-y-10">
                  <div className="flex items-center mb-6">
                    <span className="text-[#FF4D00] text-[10px] mr-2">●</span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1B1C1E]/60">How we help you</span>
                  </div>
                  <p className="text-3xl lg:text-[40px] font-medium leading-[1.3] text-[#1B1C1E] tracking-tight">
                    We build the company together and provide you with everything you need to 10x your chances - <span className="underline decoration-1 underline-offset-4">for 25% of the company</span>. <span className="text-[#1B1C1E]/40">In 12 months you will...</span>
                  </p>
               </div>
            </div>
            
            <div className="lg:col-span-7">
               {/* Accordion List */}
               <div className="space-y-4">
                  {(program.process || []).map((step, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveSteps(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx])}
                      className={`p-8 bg-[#F9F9F9] group cursor-pointer border transition-colors ${activeSteps.includes(idx) ? 'border-[#E5E7EB]' : 'border-transparent hover:border-[#E5E7EB]'}`}
                    >
                       <div className="flex justify-between items-center gap-4">
                          <h3 className="text-xl md:text-2xl font-medium text-[#1B1C1E] font-sans">
                             {String(idx + 1).padStart(2, '0')}. {step.title}
                          </h3>
                          <div className="w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0">
                             {activeSteps.includes(idx) ? <Minus className="w-5 h-5 text-[#1B1C1E]" /> : <Plus className="w-5 h-5 text-[#1B1C1E]" />}
                          </div>
                       </div>
                       <AnimatePresence>
                         {activeSteps.includes(idx) && (
                           <motion.div
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: "auto" }}
                             exit={{ opacity: 0, height: 0 }}
                             transition={{ duration: 0.3 }}
                             className="overflow-hidden"
                           >
                             <div className="text-[#1B1C1E] text-[15px] leading-relaxed mt-6 space-y-6 max-w-2xl">
                               <p>{step.desc}</p>
                               <p className="text-[#1B1C1E]/60">{step.extended}</p>
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <div className="w-full flex justify-center py-8">
         <img src="https://cdn.prod.website-files.com/68623ac33982350852c8bf02/68623ac33982350852c8c2e7_Gutter.png" alt="Divider" className="w-full max-w-[1400px] h-auto object-contain opacity-20" />
      </div>

      {/* Testimonials Blueprint */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8 lg:space-y-12">
               <div className="aspect-[4/3] w-full bg-gray-200">
                  <img src={program.image} alt="Program representation" className="w-full h-full object-cover" />
               </div>
               {program.testimonial && (
                 <div className="bg-[#F9F9F9] p-8 lg:p-12 lg:-mt-12 lg:mr-12 relative z-10 flex flex-col justify-center">
                    <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-widest text-[#1B1C1E]/60 mb-8">
                       <span>What They Say</span>
                       <span>TRANSFORMATION</span>
                    </div>
                    <p className="text-xl md:text-2xl font-medium text-[#1B1C1E] leading-relaxed mb-12">
                       "{program.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                          <img src={program.testimonial.image} alt={program.testimonial.author} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <div className="font-medium text-[#1B1C1E]">{program.testimonial.author}</div>
                          <div className="text-sm text-[#1B1C1E]/60">{program.testimonial.role}</div>
                       </div>
                    </div>
                 </div>
               )}
            </div>
            
            <div className="aspect-[3/4] lg:aspect-auto h-full w-full bg-gray-200 lg:col-span-1">
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Founder environment" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90" />
            </div>
         </div>
      </section>

      <div className="w-full flex justify-center py-8">
         <img src="https://cdn.prod.website-files.com/68623ac33982350852c8bf02/68623ac33982350852c8c2e7_Gutter.png" alt="Divider" className="w-full max-w-[1400px] h-auto object-contain opacity-20" />
      </div>

      {/* What You Get Grid Blueprint */}
      <section id="what-you-get" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F9F9F9]">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl lg:text-5xl font-display font-medium mb-16">An unfair starting line</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
               {(program.features || []).map((feature, i) => {
                 const IconComponent = 
                   feature.icon === 'Shield' ? Shield :
                   feature.icon === 'Zap' ? Zap :
                   feature.icon === 'Users' ? Users :
                   feature.icon === 'Activity' ? Activity :
                   feature.icon === 'Workflow' ? Workflow :
                   feature.icon === 'Globe' ? Globe : Shield;

                 return (
                   <div key={i} className="space-y-4">
                      <div className="w-8 h-8 flex items-center text-[#FF4D00]">
                         <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-medium">{feature.title}</h4>
                      <p className="text-[#1B1C1E]/70 leading-relaxed text-[15px]">
                         {feature.desc}
                      </p>
                   </div>
                 );
               })}
            </div>
         </div>
      </section>

      {/* Ideas looking for founders Blueprint */}
      <section id="ideas" className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto bg-white">
         <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-16">
            <h2 className="text-5xl md:text-[80px] lg:text-[100px] font-display font-medium leading-[0.8] text-[#1B1C1E] uppercase tracking-tighter max-w-3xl">
               IDEAS LOOKING FOR FOUNDERS
            </h2>
            <p className="text-lg text-[#1B1C1E]/60 max-w-md font-medium leading-relaxed pb-2">
               Pick a problem worth solving. We've done the research, now we're looking for the right people to build it.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#1B1C1E]/10 bg-[#FAFAFA]">
            {(program.ideas || []).map((idea, i) => (
               <div key={i} className="p-8 border-r border-b border-[#1B1C1E]/10 flex flex-col transition-colors duration-300 cursor-pointer group min-h-[400px] hover:bg-white hover:shadow-xl relative z-10 bg-[#FAFAFA]">
                  <div className="flex items-center gap-4 mb-24">
                     <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0 border border-[#1B1C1E]/10">
                        <img src={idea.partnerImage || `https://i.pravatar.cc/100?img=${i+10}`} alt={idea.partner} className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <div className="font-medium text-[#1B1C1E]">{idea.partner}</div>
                        <div className="text-sm text-[#1B1C1E]/60">Partner</div>
                     </div>
                  </div>
                  <div className="mt-auto">
                     <h3 className="text-2xl font-medium mb-4 text-[#1B1C1E] transition-colors duration-300 group-hover:text-[#FF4D00]">{idea.title}</h3>
                     <div className="text-[#1B1C1E]/60 leading-relaxed transition-colors duration-300 group-hover:text-[#1B1C1E] relative pr-6">
                        {idea.desc}
                        <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* From Idea to Company Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto bg-white mb-16 relative">
         <div className="mb-16">
            <h2 className="text-5xl md:text-[80px] lg:text-[100px] font-display font-medium leading-[0.8] text-[#1B1C1E] uppercase tracking-tighter mb-8">
               FROM IDEA TO COMPANY
            </h2>
            <p className="text-lg text-[#1B1C1E]/60 max-w-md font-medium leading-relaxed pb-2">
               See the companies that started as just an idea here and grew into category leaders.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(program.companies || []).map((company, i) => (
               <div key={i} className="flex flex-col group">
                  {/* Dark Top */}
                  <div className="bg-[#111111] text-white p-10 flex flex-col justify-between min-h-[360px]">
                     <div>
                        <h3 className="text-4xl font-display font-medium mb-6 uppercase tracking-tighter">{company.name}</h3>
                        <p className="text-xl leading-relaxed italic text-white/90">Imagine if {company.desc}</p>
                     </div>
                     <div className="w-12 h-12 flex items-center justify-center bg-[#FF4D00] text-xl font-bold uppercase">
                        {company.name[0]}
                     </div>
                  </div>
                  
                  {/* Light Bottom */}
                  <div className="bg-[#F9F9F9] p-8 border border-[#111111]/10 flex-col">
                     {[ 
                        {l: 'Focus', v: company.focus},
                        {l: 'Field', v: company.field},
                        {l: 'Funding', v: company.funding},
                        {l: 'Team Size', v: company.teamSize},
                        {l: 'Categories', v: company.categories},
                        {l: 'Location', v: company.location},
                     ].map(item => (
                        <div key={item.l} className="flex items-baseline border-b border-[#111111]/10 py-3">
                           <dt className="w-24 text-[11px] font-mono uppercase text-[#111111]/40">{item.l}</dt>
                           <dd className="flex-1 text-[15px] font-medium text-[#111111]">{item.v}</dd>
                        </div>
                     ))}
                     <button className="inline-flex items-center gap-2 mt-6 text-[#FF4D00] font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform">
                        READ THE STORY <ArrowLeft className="w-4 h-4 rotate-180" />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Is for you if... */}
      <section className="relative py-32 lg:py-40 bg-[#1B1C1E] text-white px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
           <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background Texture" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
           <div>
              <div className="flex items-center gap-3 mb-10">
                 <div className="tag-polygon text-white/50" />
                 <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-white/50">Ideal Candidates</span>
              </div>
              <h2 className="text-4xl lg:text-[60px] leading-[1.1] font-display font-medium">
                {program.title} is for you if...
              </h2>
           </div>
           
           <div className="space-y-6">
              {(program.isForYouIf || []).map((text, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                   <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#FF9CDF]" />
                   </div>
                   <p className="text-lg font-medium">{text}</p>
                </div>
              ))}
              
              <div className="pt-8">
                 <button className="button relative inline-flex items-center justify-center bg-white text-[#1B1C1E] px-8 py-4 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-105 group overflow-hidden border border-white/20 hover:border-transparent">
                   <span className="relative z-10 transition-colors group-hover:text-white">Start your company</span>
                   <div className="button-gradient !opacity-0 group-hover:!opacity-100 transition-opacity" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Blueprint */}
      <section id="faq" className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-[#1B1C1E]/10">
         <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
               <div>
                  <div className="flex items-center mb-6">
                    <span className="text-[#FF4D00] text-[10px] mr-2">●</span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1B1C1E]/60">FAQ</span>
                  </div>
                  <h2 className="text-6xl md:text-[80px] lg:text-[100px] font-display font-medium uppercase tracking-tighter leading-[0.8] mb-12">ALL YOU NEED<br/>TO KNOW</h2>
                  
                  <button className="inline-flex items-center justify-center bg-[#1B1C1E] text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-black transition-colors">
                     View the full FAQ <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2"><path d="M11 1L17 7M17 7L11 13M17 7H0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
               </div>
            </div>

            <div className="lg:col-span-7 space-y-px bg-[#1B1C1E]/10">
               {(program.faqs || []).map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="bg-white group cursor-pointer flex flex-col justify-center transition-colors border-b border-transparent"
                  >
                     <div className={`flex justify-between items-center bg-white p-6 transition-colors ${activeFaq === idx ? 'bg-[#FAFAFA]' : 'hover:bg-[#FAFAFA]'}`}>
                        <h3 className="text-[17px] font-medium text-[#1B1C1E]">{item.q}</h3>
                        <div className="w-8 h-8 flex items-center justify-center transition-all">
                           {activeFaq === idx ? <Minus className="w-5 h-5 text-[#1B1C1E]" /> : <Plus className="w-5 h-5 text-[#1B1C1E]/60 group-hover:text-[#1B1C1E]" />}
                        </div>
                     </div>
                     <AnimatePresence>
                        {activeFaq === idx && (
                           <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-[#FAFAFA] px-6"
                           >
                              <div className="text-[#1B1C1E]/70 text-[15px] leading-relaxed pb-6 max-w-2xl">
                                 <p>{item.a}</p>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>
      
      {/* Build the exceptional today Footer Banner Blueprint */}
      <section className="relative h-[800px] w-full flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[#1B1C1E]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Build" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
         </div>
         <div className="relative z-10 text-center space-y-12">
            <h2 className="text-5xl md:text-[80px] lg:text-[120px] font-display font-medium text-white uppercase leading-[0.9] tracking-tighter">
              BUILD THE <br /> EXCEPTIONAL <br /> TODAY AND <br /> LAUNCH NOW
            </h2>
            <button className="button relative inline-flex items-center justify-center bg-white text-[#1B1C1E] px-12 py-5 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-105 group overflow-hidden rounded-md">
              <span className="relative z-10 transition-colors group-hover:text-white">Apply</span>
              <div className="button-gradient !opacity-0 group-hover:!opacity-100 transition-opacity" />
            </button>
         </div>
      </section>

    </div>
  );
}

