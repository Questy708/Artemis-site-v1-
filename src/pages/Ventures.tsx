import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { companiesData } from "../data/companies";

const categories = ["All", "Featured", "Energy", "Water", "Manufacturing", "Biotech", "Intelligence", "Mobility"];

// Different images for the companies to resemble the varied cards
const companyImages: Record<string, string> = {
  "heliogrid-frontier": "https://images.unsplash.com/photo-1509391366360-1200ba8b51d1?auto=format&fit=crop&w=1200&q=80",
  "aquaos": "https://images.unsplash.com/photo-1544445300-6ac4bfe7dcd1?auto=format&fit=crop&w=1200&q=80",
  "mycelium-structures": "https://images.unsplash.com/photo-1518314916593-332dd0e0474c?auto=format&fit=crop&w=1200&q=80",
  "synth-agri": "https://images.unsplash.com/photo-1530836369250-ef71a3a5e4fd?auto=format&fit=crop&w=1200&q=80",
  "sovereign-data-net": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "aeropulse-logistics": "https://images.unsplash.com/photo-1473663806283-e18e3dd4dfac?auto=format&fit=crop&w=1200&q=80"
};

export function Ventures() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = companiesData.filter(c => {
    const matchesCategory = activeCategory === "All" || activeCategory === "Featured" || c.field === activeCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.mission.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen pb-32">
      <section className="pt-40 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <h1 className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.9] font-display font-medium tracking-tight mb-8">
          We invest in companies long before anyone knows their name.
        </h1>
        <div className="text-xl md:text-2xl text-[#111111]/50 font-medium mb-20 italic font-serif">
          <p>(Often before they even have one.)</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="relative w-full lg:w-[400px] group border-b border-[#111111]/20 hover:border-[#111111] focus-within:!border-[#FF4D00] transition-colors pb-4 flex items-center">
            <Search className="w-5 h-5 text-[#111111]/40 group-focus-within:text-[#FF4D00] mr-4 transition-colors" />
            <input 
              type="text" 
              placeholder="Search companies" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-lg font-medium outline-none w-full placeholder:text-[#111111]/30"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#111111]/40 mr-2 border-r border-[#111111]/10 pr-4">
              Categories
            </span>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                  activeCategory === cat 
                    ? "bg-[#111111] text-white" 
                    : "bg-white border border-[#111111]/10 text-[#111111]/60 hover:bg-[#111111]/5 hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredCompanies.map((company) => (
            <Link 
              to={`/ventures/${company.id}`} 
              key={company.id} 
              className="group/card block flex flex-col"
            >
              {/* TOP VISUAL */}
              <div className="relative aspect-square overflow-hidden mb-8 p-10 flex flex-col justify-between">
                 <div className="absolute inset-0 bg-[#111111]">
                    <img 
                      src={companyImages[company.id] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"} 
                      alt={company.name}
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
                    />
                 </div>
                 
                 <div className="relative z-10 flex flex-col justify-end h-full">
                   <div className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                     {company.name}
                   </div>
                   <p className="text-lg md:text-xl text-white font-medium max-w-xl leading-[1.4] text-balance italic">
                     <span className="font-serif font-normal mr-2 opacity-90">Imagine if</span>
                     {company.mission.charAt(0).toLowerCase() + company.mission.slice(1)}
                   </p>
                 </div>

                 {/* Accent box */}
                 <div className="absolute bottom-10 right-10 z-10 w-12 h-12 bg-[#FF4D00] flex items-center justify-center font-display font-bold text-xl text-white">
                    {company.name.charAt(0)}
                 </div>
              </div>

              {/* BOTTOM INFO */}
              <div className="w-full">
                <dl className="mb-8 pt-4">
                  {[ 
                    {l: 'Focus', v: company.focus},
                    {l: 'Field', v: company.field},
                    {l: 'Funding', v: company.funding},
                    {l: 'Team Size', v: company.teamSize},
                    {l: 'Categories', v: company.technologies.join(' / ')},
                    {l: 'Location', v: company.location},
                  ].map(item => (
                    <div key={item.l} className="flex items-baseline border-b border-[#111111]/10 py-3">
                      <dt className="w-48 text-[11px] font-mono uppercase tracking-widest text-[#111111]/40 mb-1 sm:mb-0">{item.l}</dt>
                      <dd className="flex-1 text-[15px] font-medium text-[#111111]">{item.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center gap-3 text-[#FF4D00] font-bold text-[12px] uppercase tracking-[0.1em] group-hover/card:underline transition-all">
                  Read the story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredCompanies.length === 0 && (
          <div className="py-32 text-center text-xl text-[#111111]/50 font-medium">
            No companies found matching your criteria.
          </div>
        )}
      </section>
    </div>
  );
}
