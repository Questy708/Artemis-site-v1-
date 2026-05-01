import { Link } from "react-router-dom";
import { insightsData } from "../data/insights";

export function Insights() {
  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="w-3 h-3 bg-[#FF4D00] mb-8"></div>
            <h1 className="text-[60px] md:text-[90px] leading-[0.9] font-display font-medium tracking-tight mb-8 uppercase text-balance">
              Insights.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-xl text-balance">
              News, dispatches, and perspectives from the frontier of civilizational technology.
            </p>
          </div>
          <div className="h-[40vh] md:h-[60vh] w-full overflow-hidden mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80" 
              alt="Insights & Research" 
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#111111]/10 border-grid">
            {insightsData.map((post) => (
              <Link 
                to={`/insights/${post.id}`} 
                key={post.id} 
                className="block p-10 hover:bg-[#FAFAFA] transition-colors border-r border-b border-[#111111]/10 group"
              >
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF4D00]">
                    {post.category}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111]/40">
                    {post.date}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium tracking-tight mb-4 text-[#111111] group-hover:text-[#FF4D00] transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-[14px] font-medium text-[#111111]/60 leading-[1.6] mb-8 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-[#111111]/40 border-t border-[#111111]/10 pt-4 w-full block">
                      By {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
