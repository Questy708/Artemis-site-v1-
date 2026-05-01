import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { SearchModal } from "./SearchModal";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans flex flex-col selection:bg-[#FF4D00]/20 selection:text-[#111111]">
      <Nav />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#111111]/10 h-[80px] flex items-center px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-6 h-6 bg-[#FF4D00] flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-[10px]">X</span>
            </div>
            <span className="text-sm font-bold tracking-tight uppercase whitespace-nowrap hidden sm:inline text-[#111111]">xCelero Labs</span>
          </Link>
          
          <div className="hidden lg:flex space-x-8 items-center">
            {[
              { name: "Manifesto", path: "/manifesto" },
              { name: "Approach", path: "/approach" },
              { name: "Infrastructure", path: "/platform" },
              { name: "The Routes", path: "/routes" },
              { name: "Ventures", path: "/ventures" },
              { name: "Insights", path: "/insights" },
              { name: "Fellowship", path: "/fellowship" }
            ].map((item) => (
              <Link key={item.name} to={item.path} className="text-[11px] uppercase tracking-[0.1em] font-medium text-[#111111]/60 hover:text-[#FF4D00] transition-colors relative">
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="p-2 border border-[#111111]/10 hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-colors group flex items-center gap-2"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-[#111111] group-hover:text-white" />
              <span className="hidden sm:inline-flex text-[10px] font-mono font-medium text-[#111111]/40 group-hover:text-white/50">⌘K</span>
            </button>
            <Link to="/fellowship" className="px-5 py-2.5 border border-[#111111] text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-[#111111] hover:text-white transition-colors hidden sm:inline-flex">
              Collaborate
            </Link>
          </div>
        </div>
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#111111]/10 py-20 bg-[#111111] text-[#FAFAFA]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-6 h-6 bg-[#FF4D00] flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">X</span>
            </div>
            <span className="text-sm font-bold tracking-tight uppercase whitespace-nowrap">xCelero Labs</span>
          </div>
          <p className="text-[11px] text-[#FAFAFA]/50 font-mono uppercase tracking-[0.1em] leading-relaxed">
            BUILDING THE WORLD'S NEXT ENGINE<br/> OF CIVILIZATION-LEVEL PROGRESS.
          </p>
        </div>
        
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF4D00]">Platform</span>
            <Link to="/manifesto" className="text-sm text-[#FAFAFA]/60 hover:text-white transition-colors">Manifesto</Link>
            <Link to="/approach" className="text-sm text-[#FAFAFA]/60 hover:text-white transition-colors">Approach</Link>
            <Link to="/platform" className="text-sm text-[#FAFAFA]/60 hover:text-white transition-colors">Infrastructure</Link>
            <Link to="/insights" className="text-sm text-[#FAFAFA]/60 hover:text-white transition-colors">Insights</Link>
          </div>
          <div className="flex flex-col gap-4">
             <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF4D00]">Global</span>
            <Link to="/routes" className="text-sm text-[#FAFAFA]/60 hover:text-white transition-colors">The Routes</Link>
            <Link to="/ventures" className="text-sm text-[#FAFAFA]/60 hover:text-white transition-colors">Ventures</Link>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-[#FAFAFA]/10 flex justify-between items-center text-[10px] text-[#FAFAFA]/40 uppercase tracking-widest font-mono">
        <div>© {new Date().getFullYear()} xCelero labs.</div>
        <div className="hidden sm:block">A Union of Regions</div>
      </div>
    </footer>
  );
}
