import { CheckCircle2, FileText } from "lucide-react";

export function Fellowship() {
  return (
    <div className="bg-[#FAFAFA] text-[#111111]">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-3 h-3 bg-[#FF4D00] mb-8"></div>
          <h1 className="text-[60px] md:text-[90px] leading-[0.9] font-display font-medium tracking-tight mb-8 uppercase text-balance">
            XHansa<br/>Fellowship.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-3xl text-balance">
            Transforming Xcitizens into lifelong ambassadors. 100 participants per annual cohort forging pacts across micro-cities.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-b border-[#111111]/10 bg-white">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h3 className="text-[11px] font-mono tracking-widest uppercase mb-16 text-[#FF4D00]">What You Bring</h3>
            <ul className="space-y-12">
              {[
                "A willingness to listen more than you speak.",
                "One skill, question, or constraint you're willing to share openly.",
                "Commitment to open-source any adaptation you develop during the immersion."
              ].map((text, i) => (
                <li key={i} className="flex gap-6 items-start border-b border-[#111111]/10 pb-8 last:border-0 last:pb-0">
                  <CheckCircle2 className="w-6 h-6 text-[#111111] shrink-0 mt-1" />
                  <span className="text-[#111111]/70 font-medium leading-[1.8] text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-mono tracking-widest uppercase mb-16 text-[#111111]/40">What You Leave With</h3>
            <ul className="space-y-12">
              {[
                "A mapped entry point into the Union's knowledge flow.",
                "A draft adaptation of one playbook piece, ready to test in your own context.",
                "Access to the xHansa Contribution Portal: a living archive of open-sourced playbooks."
              ].map((text, i) => (
                <li key={i} className="flex gap-6 items-start border-b border-[#111111]/10 pb-8 last:border-0 last:pb-0">
                  <FileText className="w-6 h-6 text-[#111111]/40 shrink-0 mt-1" />
                  <span className="text-[#111111]/70 font-medium leading-[1.8] text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="relative py-32 px-6 md:px-12 text-center bg-[#111111] text-[#FAFAFA] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=2000&q=80" 
          alt="Civilization Frontier" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="w-full max-w-4xl mx-auto relative z-10">
          <h2 className="text-[40px] md:text-[60px] font-display font-medium tracking-tight mb-12 uppercase text-balance max-w-2xl mx-auto">
            Join a leg.<br />Hack a friction.<br />Forge a pact.
          </h2>
          <button className="px-8 py-4 bg-[#FAFAFA] text-[#111111] text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-[#FF4D00] hover:text-[#FAFAFA] transition-colors">
            Apply For Cohort I
          </button>
          <div className="mt-16 text-[10px] font-mono uppercase tracking-widest text-[#FAFAFA]/40 space-y-2">
            <p>Applications close December 31, 2025.</p>
            <p>First departure: January 15, 2026, Lagos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
