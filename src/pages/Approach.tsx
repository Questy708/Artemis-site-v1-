import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { companiesData } from "../data/companies";
import { insightsData } from "../data/insights";

export function Approach() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is it ever too early to approach xCelero about partnering?",
      a: "No, it’s never too early to reach out. We don’t see divisions between angel, pre-seed and seed — we’re interested across the board and find that builders’ needs are the same early on. So, even if you don’t think you’re ready, we’d still like to get to know you. We can help forge the beginnings of your blueprint."
    },
    {
      q: "What if I'm still employed elsewhere?",
      a: "Absolutely reach out. We regularly meet with future proto-citizens who are in exactly this position, months away from making the official leap. Whether you're actively planning your transition or just starting to explore a deep-tech thesis, we're happy to meet. We can serve as a sounding board while you think through timing."
    },
    {
      q: "What if I’ve already raised from angels or a pre-seed fund — is it too late?",
      a: "Of course not. While we prefer to be the first institutional capital, we’ve worked with a number of teams that raised small early rounds before coming to us to tap into the XEmbassy network."
    },
    {
      q: "Do I need customers and revenue?",
      a: "Nope. Many of our companies came to us when they were a couple of people with an idea and a lab. We're far more interested in the depth of your understanding of the civilizational challenge you’re solving—and your unique spikes as a builder—than early metrics."
    },
    {
      q: "What does xCelero look for in a thesis?",
      a: "Above all, we look for compelling and contrarian insight into how infrastructure works. What do you understand about a market, material, or system that no one else does? And why is your approach the most likely to leapfrog the status quo?"
    },
    {
      q: "How do you weigh different criteria in your decision-making process?",
      a: "The biggest factor in our decision-making is always the founding team. How innovative, resourceful and resilient are you? What’s your superpower? Why are you going to be the ones to prevail where others won’t? We look for a history of thriving off the beaten path."
    },
    {
      q: "Does xCelero only invest in particular areas or industries?",
      a: "We focus heavily on the 13 Critical Domains—from energy generation and biotech to cognitive systems and hypersonics. But if you’re building something outside of these that will fundamentally upgrade the civilization stack, we still want to learn about the future you’re imagining."
    },
    {
      q: "Do you only partner with companies in major tech hubs?",
      a: "No. Our distributed constellation spans 190 XHansa Hubs across the globe. True sovereignty means innovation can happen anywhere."
    },
    {
      q: "What does your process look like?",
      a: "Our process is rigorous but fast. We typically start with an initial meeting to review your materials and evaluate the civilizational impact. If there's alignment, we dive deeper over the following days or weeks, introducing you to domain experts within our network, before culminating in a final review."
    }
  ];

  return (
    <div className="bg-white text-[#111111]">
      {/* 1. Hero Section */}
      <section className="bg-[#111111] text-white pt-48 pb-40 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-[50px] md:text-[80px] lg:text-[100px] leading-[1] font-display font-medium tracking-tight mb-8">
            You’re not for everyone.<br /><em className="font-serif italic font-normal text-white/50">Neither are we.</em>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            We back founders who go unreasonably deep to<br className="hidden md:block"/>get their beginnings right.
          </p>
        </div>
      </section>

      {/* 2. Carousel Section */}
      <section className="bg-white pt-32 overflow-hidden border-b border-[#111111]/10 rounded-t-[40px] -mt-8 relative z-10 w-full mb-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <h2 className="text-[40px] md:text-[60px] font-display font-medium tracking-tight leading-[1] mb-6">
            We’ve worked with<br className="hidden md:block"/>500+ early teams
          </h2>
          <p className="text-xl text-[#111111]/50 font-serif italic">
            (And built infrastructure of our own)
          </p>
        </div>
        
        <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-16 snap-x snap-mandatory scrollbar-hide py-4 items-stretch" style={{ scrollbarWidth: 'none' }}>
           {companiesData.slice(0, 6).map((company, idx) => (
             <Link 
               to={`/ventures/${company.id}`} 
               key={company.id} 
               className="group shrink-0 w-[300px] md:w-[380px] snap-center flex flex-col relative"
             >
               <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#111111] flex flex-col justify-between p-8">
                  <img 
                    src={`https://images.unsplash.com/photo-15${idx}41888062831-29177a2add6c?auto=format&fit=crop&w=800&q=80`} 
                    alt={company.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 text-white font-display text-2xl font-bold">{company.name}</div>
                  <div className="relative z-10 text-white/90 text-lg font-medium leading-[1.4]">
                    <em className="font-serif italic font-normal text-white/50 mr-2">Imagine if</em>
                    {company.mission.charAt(0).toLowerCase() + company.mission.slice(1)}
                  </div>
               </div>
               <div className="flex items-center gap-3 text-[#FF4D00] font-bold text-[12px] uppercase tracking-[0.1em] group-hover:text-[#111111] transition-colors mt-auto">
                 Read {company.name}'s story
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </div>
             </Link>
           ))}
        </div>
      </section>

      {/* 3. Hero 2 */}
      <section className="bg-white py-32 px-6 md:px-12 text-center max-w-5xl mx-auto border-b border-[#111111]/10">
        <h2 className="text-[40px] md:text-[60px] font-display font-medium tracking-tight leading-[1.1]">
          The best founders have a few things <em className="font-serif italic font-normal text-[#FF4D00]">in common</em>.
        </h2>
      </section>

      {/* 4. Traits Cards (Purple analog - using black bg) */}
      <section className="bg-[#111111] text-white py-32 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF4D00]/5 to-transparent pointer-events-none"></div>
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-12 lg:gap-20 relative z-10">
           <div>
             <h3 className="text-3xl font-display font-medium mb-6 leading-tight">Believe in the art of the pick</h3>
             <p className="text-white/70 font-medium leading-[1.8] text-lg text-balance">
               There’s a popular narrative that a startup’s first few years are for moving fast and finding ways out of tough problems later. We’re firm believers in taking beginnings seriously, in slowing down to speed up. A high degree of startup mortality is baked in at the beginning, so being a good picker is vastly underrated.
             </p>
           </div>
           
           <div className="md:mt-16">
             <h3 className="text-3xl font-display font-medium mb-6 leading-tight">Embrace their extremes</h3>
             <p className="text-white/70 font-medium leading-[1.8] text-lg text-balance">
               We don’t back well-rounded founders. We seek people who have one or two outlier abilities, areas where they have a shot at being the best in the world. This is what allows them to see opportunities others miss, solve problems others can’t crack, and work with a drive that others don’t match.
             </p>
           </div>
           
           <div className="md:mt-32">
             <h3 className="text-3xl font-display font-medium mb-6 leading-tight">Go unreasonably deep</h3>
             <p className="text-white/70 font-medium leading-[1.8] text-lg text-balance">
               There's a particular kind of intensity we look for — a relentless drive that goes far beyond surface insights or hard work. It’s curiosity that crosses over into obsession but reads more “learn-it-all” than “know-it-all.” Our favorite founders don't fear the most in-the-weeds questions because they've already asked them.
             </p>
           </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-[#FAFAFA] py-32 px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <h2 className="text-[40px] md:text-[50px] font-display font-medium tracking-tight leading-[1] text-balance mb-8">
                If this sounds like you, you likely have these questions for us:
              </h2>
              <div className="text-[11px] font-mono tracking-widest text-[#FF4D00] uppercase pt-8 border-t border-[#111111]/20">
                You've got questions.<br/>We've got answers.
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-4">
             {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#111111]/20 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full py-6 flex items-start justify-between text-left group gap-8 hover:bg-[#111111]/5 transition-colors -mx-4 px-4 rounded-xl"
                  >
                    <span className="text-xl lg:text-2xl font-display font-medium tracking-tight group-hover:text-[#FF4D00] transition-colors leading-tight">
                       {faq.q}
                    </span>
                    <span className="shrink-0 w-10 h-10 rounded-full border border-[#111111]/20 flex items-center justify-center group-hover:border-[#FF4D00] group-hover:text-[#FF4D00] transition-colors bg-white shadow-sm mt-1">
                       {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${openFaq === index ? "max-h-[500px] mb-8 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-[#111111]/70 font-medium leading-[1.8] text-lg max-w-2xl mt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Insights Links */}
      <section className="bg-white py-32 px-6 md:px-12 border-t border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-[40px] md:text-[50px] font-display font-medium tracking-tight leading-[1] mb-16 text-center max-w-3xl mx-auto">
            Tactical 0-1 breakdowns to help you assemble a better timeline
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsData.map((post) => (
              <Link to={`/insights/${post.id}`} key={post.id} className="group border border-[#111111]/10 p-8 flex flex-col hover:bg-[FAFAFA] transition-colors">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#FF4D00] mb-8">
                  {post.category}
                </div>
                <h3 className="text-2xl font-display font-medium tracking-tight mb-4 group-hover:text-[#FF4D00] transition-colors leading-[1.2]">
                  {post.title}
                </h3>
                <p className="text-[#111111]/60 font-medium leading-[1.6] mb-12 line-clamp-3">
                  {post.summary}
                </p>
                <div className="mt-auto pt-8 border-t border-[#111111]/10 flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-[#111111]/40 group-hover:text-[#111111]/80 transition-colors">
                  By {post.author}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
