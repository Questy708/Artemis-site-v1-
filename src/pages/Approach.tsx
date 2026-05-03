import { useState, useRef, useEffect } from "react";
import { Plus, Minus, ArrowRight, ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { companiesData } from "../data/companies";
import { insightsData } from "../data/insights";
import { ReviewSection } from "../components/ReviewSection";

const traits = [
  {
    title: "Believe in the art of the pick",
    desc: "There’s a popular narrative that a startup’s first few years are for moving fast and finding ways out of tough problems later. We’re firm believers in taking beginnings seriously, in slowing down to speed up. A high degree of startup mortality is baked in at the beginning, so being a good picker of technology, market, and architecture is vastly underrated. Most of the successful founders we’ve worked with didn’t stray far from their original blueprint."
  },
  {
    title: "Embrace their extremes",
    desc: "We don’t back well-rounded founders. We seek people who have one or two outlier abilities, areas where they have a shot at being the best in the world. This is what allows them to see opportunities others miss, solve problems others can’t crack, and work with a drive that others don’t match. The founders who become civilizational architects don’t learn to be adequate at everything. They identify the specific capabilities their company needs, then tackle each one with the same focus they brought to their original domain — or bring on others with extreme talents to complement them."
  },
  {
    title: "Go unreasonably deep",
    desc: "There's a particular kind of intensity we look for — a relentless drive that goes far beyond surface insights or hard work (although we think that matters, too). It’s curiosity that crosses over into obsession but reads more “learn-it-all” than “know-it-all.” It means full immersion in materials science when starting an energy company or working on the factory floor to live the pain of industrial bottlenecks. Our favorite founders don't fear the most in-the-weeds questions because they've already asked them of themselves."
  }
];

const faqs = [
  {
    category: "Timing",
    q: "Is it ever too early to approach xCelero about investing?",
    a: "No, it’s never too early to reach out. We don’t see divisions between angel, pre-seed and seed — we’re interested across the board and find that founders’ needs are the same early on. So, even if you don’t think you’re ready, we’d still like to get to know you. Maybe we can even help in the meantime. (Check out the Blueprint Method if you’re not quite ready to raise but are hoping to get on the path to architectural product-market fit early.)"
  },
  {
    category: "Timing",
    q: "What if I'm still employed elsewhere?",
    a: "Absolutely reach out. We regularly meet with future proto-citizens who are in exactly this position, months away from making the official leap. Whether you're actively planning your transition or just starting to explore an idea, we're happy to meet. We can serve as a sounding board while you explore different markets and think through timing. We can also introduce you to potential design partners and early hires."
  },
  {
    category: "Timing",
    q: "What if I’ve already raised from angels or a pre-seed fund — is it too late?",
    a: "Of course not. While we’re usually the first money in, we’ve worked with a number of teams that raised a small round before coming to us to tap into the XEmbassy network. That said, if you’ve already raised more than a few million dollars, we’re probably not a fit."
  },
  {
    category: "Timing",
    q: "Do I need customers and revenue?",
    a: "Nope. Many of our 500+ companies came to us when they were a couple of people with an idea and a lab. We're far more interested in the depth of your understanding of the civilizational challenge you’re solving and your unique spikes as a builder than any particular metrics."
  },
  {
    category: "Timing",
    q: "I’m raising my Series B or Series C — should I contact you?",
    a: "Nope. We’re explicitly focused on the foundation phase. If you’re raising your third or fourth round, consider a later-stage firm that might be a better fit. And then when you exit that company, contact us for your next one ;)"
  },
  {
    category: "Decision making",
    q: "What does xCelero look for in a thesis?",
    a: "Above all, we look for compelling and contrarian insight into how infrastructure works. What do you understand about a market, material, or system that no one else does or that other companies in the space get wrong? And why is your company the most likely to win at addressing this gap?"
  },
  {
    category: "Decision making",
    q: "How do you weigh different criteria in your decision-making process?",
    a: "The biggest factor in our decision-making is always the founding team. How innovative, resourceful and resilient are you? What’s your superpower? Why are you going to be the ones to prevail where others won’t? What in your history shows that you thrive off the beaten path?"
  },
  {
    category: "Where we invest",
    q: "Does xCelero only invest in particular areas or industries?",
    a: "We focus heavily on the 13 Critical Domains—from energy generation and biotech to cognitive systems and hypersonics. But that’s not where our curiosity ends. If you’re building something outside of these that will fundamentally upgrade the civilization stack, we still want to learn about the future you’re imagining."
  },
  {
    category: "Where we invest",
    q: "Do you invest in companies located outside of major tech hubs?",
    a: "Yes! While we have concentrations in SF and NYC, our flexible constellation spans 190 XHansa Hubs across the globe. True sovereignty means innovation can happen anywhere."
  },
  {
    category: "Where we invest",
    q: "Do you invest outside of the United States?",
    a: "We tend to focus on companies based in the U.S. or allied sovereign zones because that is where we have the most experience and can be the most valuable partners. We’ve made exceptions for companies whose management is located in the U.S. with distributed technical teams."
  },
  {
    category: "Process",
    q: "What does your investment process look like?",
    a: "Our process is rigorous but fast. While most of our decisions are driven by founders, we like to spend at least three to five hours on any company before we make a final decision. Sometimes that happens over a 72-hour period and sometimes it happens over weeks."
  },
  {
    category: "Process",
    q: "What's the best way to get on your radar?",
    a: "Our team reviews every opportunity we receive. A direct referral from someone within the XEmbassy network works best, but cold outreach with a strong technical whitepaper is highly welcome. Good ideas can come from anywhere."
  },
  {
    category: "Process",
    q: "How should I prep for your partner meeting?",
    a: "We recommend focusing on your core technical insight, the specific civilizational bottleneck you are addressing, and demonstrating your mastery of the domain."
  },
  {
    category: "Terms",
    q: "How much do you usually invest in a new company?",
    a: "Our initial investments typically range from $1 million to $7 million, but we’ve gone higher and lower in some cases."
  },
  {
    category: "Terms",
    q: "Do you have strict ownership requirements?",
    a: "Unlike some traditional funds that require 20 to 25% ownership, we don’t. We like to own enough of the company to make sure that we can dedicate meaningful time and resources to helping you build."
  },
  {
    category: "Terms",
    q: "Will xCelero only invest if you can lead the round?",
    a: "No. We don't care about terms like lead, co-lead or follow. We make our own decisions and have a long track record of partnering with outstanding seed-stage syndicates."
  }
];

const categories = ["Timing", "Decision making", "Where we invest", "Process", "Terms"];

export function Approach() {
  const [activeCategory, setActiveCategory] = useState("Timing");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredFaqs = faqs.filter(f => f.category === activeCategory);

  return (
    <div className="text-[#111111] -mt-[80px]">
      {/* 1. Hero Section - Sticky background */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#111111] text-white z-0 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-6 text-center pt-[80px]">
          <h1 className="text-[54px] md:text-[80px] lg:text-[100px] leading-[1.05] md:leading-[1] font-display font-medium tracking-tight mb-8">
            You’re not for everyone.<br />
            <em className="font-serif italic font-normal text-white/50">Neither are we.</em>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed">
            We back founders who go unreasonably deep to<br className="hidden md:block"/>get their beginnings right.
          </p>
        </div>
      </section>

      {/* Wrapper to handle the scroll content over the hero */}
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.2)] rounded-t-[32px] md:rounded-t-[40px]">
        {/* 2. Carousel Section */}
        <section className="pt-24 md:pt-32 overflow-hidden w-full mb-24 md:mb-32">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
            <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-display font-medium tracking-tight leading-[1.05] mb-6">
              We’ve worked with<br className="hidden md:block"/>500+ early teams
            </h2>
            <p className="text-xl md:text-2xl text-[#111111]/50 font-serif italic text-balance">
              (And built companies of our own)
            </p>
          </div>
          
          <div className="flex overflow-x-auto gap-6 md:gap-10 px-6 md:px-12 pb-16 snap-x snap-mandatory scrollbar-hide items-stretch" style={{ scrollbarWidth: 'none' }}>
             {companiesData.slice(0, 6).map((company, idx) => (
               <Link 
                 to={`/ventures/${company.id}`} 
                 key={company.id} 
                 className="group shrink-0 w-[280px] md:w-[380px] snap-center flex flex-col relative"
               >
                 <div className="relative aspect-[0.9] overflow-hidden mb-6 bg-[#111111] flex flex-col justify-end p-8 flex-1 rounded-xl">
                    <img 
                      src={`https://images.unsplash.com/photo-15${idx}41888062831-29177a2add6c?auto=format&fit=crop&w=800&q=80`} 
                      alt={company.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    <div className="absolute inset-0 bg-[#FF4D00]/0 group-hover:bg-[#FF4D00]/90 transition-colors duration-300 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                       <div className="text-white font-bold tracking-widest text-[12px] uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                         Read {company.name}'s Story <ArrowRight className="w-4 h-4" />
                       </div>
                    </div>
                 </div>
                 <div className="text-[14px] font-medium text-[#111111]/70 leading-snug">
                   <span className="text-[#111111] font-bold">{company.name}</span> — {company.focus}
                 </div>
               </Link>
             ))}
          </div>
        </section>

      {/* 3. Hero 2 */}
      <section className="bg-white pb-20 md:pb-32 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <h2 className="text-[36px] md:text-[50px] lg:text-[60px] font-display font-medium tracking-tight leading-[1.1] text-balance">
          The best founders have a few things <em className="font-serif italic font-normal text-[#111111]/50">in common</em>.
        </h2>
      </section>

      {/* 4. Traits Cards */}
      <section className="bg-white pb-32 px-6 md:px-12 relative w-full overflow-hidden">
        <div className="w-full max-w-3xl mx-auto flex flex-col">
           {traits.map((trait, i) => (
             <div 
               key={i} 
               className="sticky bg-white border-t border-[#111111]/10 pt-16 pb-8 shadow-[0_-20px_20px_-20px_rgba(0,0,0,0.05)]" 
               style={{ top: `${100 + i * 20}px`, zIndex: i + 10, minHeight: '350px' }}
             >
               <h3 className="text-[32px] md:text-[44px] font-display font-medium mb-8 leading-[1.1]">{trait.title}</h3>
               <p className="text-lg md:text-xl text-[#111111]/60 font-medium leading-relaxed max-w-2xl text-balance">
                 {trait.desc}
               </p>
               
               {/* Decorative Logo mark */}
               <div className="mt-16 text-[#FF4D00]">
                 <svg width="26" height="53" viewBox="0 0 26 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M3.02421 0.5L0 14.1035H8.64923V52.5H26V0.5H3.02421Z" fill="currentcolor"></path>
                 </svg>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-[#FAFAFA] py-32 px-6 md:px-12 border-t border-[#111111]/10 relative z-50">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-5/12 relative">
            <div className="sticky top-32">
              <h2 className="text-[36px] md:text-[50px] font-display font-medium tracking-tight leading-[1.05] text-balance mb-12">
                If this sounds like you, you likely have these questions for us:
              </h2>
              
              {/* Desktop Categories */}
              <div className="hidden lg:flex flex-col gap-2 relative">
                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#111111]/10"></div>
                 {categories.map(c => (
                   <button 
                     key={c}
                     onClick={() => { setActiveCategory(c); setOpenFaq(null); }}
                     className={`text-left pl-6 py-3 font-medium text-[15px] transition-colors relative ${activeCategory === c ? 'text-[#111111]' : 'text-[#111111]/40 hover:text-[#111111]/70'}`}
                   >
                     {activeCategory === c && (
                       <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF4D00]"></div>
                     )}
                     {c}
                   </button>
                 ))}
              </div>
              
              {/* Mobile Categories Dropdown */}
              <div className="lg:hidden relative">
                 <button 
                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                   className="w-full flex items-center justify-between border-b border-[#111111]/20 py-4 font-display font-medium text-xl"
                 >
                   {activeCategory}
                   <ChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                 </button>
                 {mobileMenuOpen && (
                   <div className="absolute top-full left-0 right-0 bg-white border border-[#111111]/10 shadow-xl z-50 rounded-b-lg overflow-hidden flex flex-col">
                      {categories.map(c => (
                         <button 
                           key={c}
                           onClick={() => { 
                             setActiveCategory(c); 
                             setOpenFaq(null); 
                             setMobileMenuOpen(false); 
                           }}
                           className={`text-left px-6 py-4 font-medium text-sm border-b border-[#111111]/5 last:border-0 ${activeCategory === c ? 'bg-[#FAFAFA] text-[#FF4D00]' : 'text-[#111111]/70'}`}
                         >
                           {c}
                         </button>
                      ))}
                   </div>
                 )}
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 min-h-[600px]">
             {filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-[#111111]/10 pb-2">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full py-8 flex items-start justify-between text-left group gap-8 hover:bg-[#111111]/[0.02] transition-colors -mx-4 px-4 rounded-xl"
                  >
                    <span className="text-[22px] md:text-[26px] font-display font-medium tracking-tight group-hover:text-[#FF4D00] transition-colors leading-[1.2]">
                       {faq.q}
                    </span>
                    <span className={`shrink-0 w-8 h-8 rounded-full border border-[#111111]/10 flex items-center justify-center transition-colors bg-white shadow-sm mt-1 ${openFaq === index ? 'text-[#FF4D00]' : 'group-hover:border-[#FF4D00] group-hover:text-[#FF4D00]'}`}>
                       {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${openFaq === index ? "max-h-[800px] mb-8 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-[#111111]/60 font-medium leading-[1.8] text-[17px] max-w-2xl mt-2">
                      {faq.a}
                    </p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <ReviewSection title="Hard-won wisdom from xCelero founders:" />
      </div>
    </div>
  );
}
