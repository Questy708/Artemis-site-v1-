import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { companiesData } from "../data/companies";

export function VentureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companiesData.find((c) => c.id === id);

  if (!company) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen text-[#111111] flex flex-col items-center justify-center">
        <h1 className="text-[60px] font-display font-medium tracking-tight mb-8">Not Found</h1>
        <button onClick={() => navigate("/ventures")} className="px-5 py-2.5 border border-[#111111] text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-[#111111] hover:text-white transition-colors">
          Return to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto">
          <Link to="/ventures" className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#111111]/50 hover:text-[#FF4D00] flex items-center gap-2 mb-12 w-fit transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to Portfolio
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-8">
             <div className="px-4 py-2 border border-[#111111] bg-[#FF4D00]/10 text-[#FF4D00] text-[11px] font-mono tracking-widest uppercase font-bold">
              {company.field}
            </div>
             <div className="px-4 py-2 border border-[#111111] bg-[#111111]/5 text-[#111111] text-[11px] font-mono tracking-widest uppercase font-bold">
              {company.funding}
            </div>
          </div>

          <h1 className="text-[60px] md:text-[90px] leading-[0.9] font-display font-medium tracking-tight mb-8 uppercase text-balance">
            {company.name}
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-3xl text-balance">
            {company.focus}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-8">
            <h3 className="text-[11px] uppercase font-mono tracking-widest text-[#FF4D00] mb-8">The Challenge & Thesis</h3>
            <div className="text-[#111111]/70 font-medium leading-[1.8] space-y-6 text-lg">
              <p>{company.mission}</p>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="border border-[#111111]/10 p-8 bg-white">
              <h3 className="text-[11px] uppercase font-mono tracking-widest text-[#111111]/40 mb-8 pb-4 border-b border-[#111111]/10">At a Glance</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] uppercase font-mono text-[#111111]/40 mb-1">Funding</p>
                  <p className="text-sm font-medium text-[#111111]">{company.funding}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase font-mono text-[#111111]/40 mb-1">Location</p>
                  <p className="text-sm font-medium text-[#111111]">{company.location}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase font-mono text-[#111111]/40 mb-1">Team Size</p>
                  <p className="text-sm font-medium text-[#111111]">{company.teamSize}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase font-mono text-[#111111]/40 mb-1">Technologies</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {company.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 border border-[#111111]/10 text-[#111111]/70">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
