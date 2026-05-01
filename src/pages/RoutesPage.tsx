import { LocateFixed, Navigation, Map } from "lucide-react";

export function RoutesPage() {
  const routes = [
    {
      leg: "1. Gulf of Guinea Arc",
      cities: "Lagos, Accra, Abidjan, Douala",
      focus: "Fintech infrastructure, decentralized energy grids, circular economy supply chains.",
    },
    {
      leg: "2. The Swahili Corridor",
      cities: "Nairobi, Kigali, Dar es Salaam, Kampala",
      focus: "Agri-tech resilience, mobile-first logistics, conservation tech.",
    },
    {
      leg: "3. The Southern Anchor",
      cities: "Johannesburg, Cape Town, Gaborone, Maputo",
      focus: "Deep tech, advanced materials, sovereign data centers, biotech.",
    },
    {
      leg: "4. The Maghreb Bridge",
      cities: "Casablanca, Tunis, Cairo, Algiers",
      focus: "Renewable energy export (solar/green hydrogen), arid-climate agriculture, trade tech.",
    },
    {
      leg: "5. The Sahel Frontier",
      cities: "Dakar, Bamako, Niamey, N’Djamena",
      focus: "Off-grid survival tech, water desalination/harvesting, sovereign identity systems.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] text-[#111111]">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="w-3 h-3 bg-[#FF4D00] mb-8"></div>
            <h1 className="text-[60px] md:text-[90px] leading-[0.9] font-display font-medium tracking-tight mb-8 uppercase text-balance">
              The<br/>Routes.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-xl text-balance mb-12">
              The Routes is not a program. It is a covenant. It optimizes not for startup success alone, but for flow restoration globally.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <div className="px-4 py-2 border border-[#111111] text-[11px] font-mono tracking-widest uppercase font-bold">19 Global Cities</div>
               <div className="px-4 py-2 border border-[#111111] text-[11px] font-mono tracking-widest uppercase font-bold">190 Hubs</div>
            </div>
          </div>
          <div className="h-[40vh] md:h-[60vh] w-full overflow-hidden mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
              alt="Global Routes" 
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col space-y-16">
            {routes.map((route, i) => (
              <div key={i} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-[#111111]/10 pb-16 last:border-0 hover:bg-[#111111]/[0.02] transition-colors -mx-6 px-6 sm:mx-0 sm:px-0">
                <div className="lg:col-span-4">
                  <div className="text-[11px] font-mono font-bold text-[#FF4D00] mb-2">{route.leg}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#111111]/50 flex items-center gap-2">
                     <LocateFixed className="w-3 h-3" />
                     {route.cities}
                  </div>
                </div>
                
                <div className="lg:col-span-6">
                  <p className="text-lg leading-[1.7] text-[#111111]/70 font-medium">{route.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
