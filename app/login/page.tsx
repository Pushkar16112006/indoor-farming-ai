import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-slate-950 text-center px-4">
      
      {/* --- BACKGROUND EFFECTS (DARK MODE) --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* The Grid: Switched to faint white lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* The Glowing Green Orb: Removed multiply blend so it glows on black */}
        <div className="absolute w-[600px] h-[600px] bg-green-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Grow Smarter with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
            Indoor Farming AI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Optimize your crop yield with machine learning. Enter your soil and environmental data to get instant, data-driven recommendations.
        </p>
        
        <Link 
          href="/login" 
          className="px-8 py-4 text-lg font-bold text-slate-950 transition-all duration-300 bg-green-500 rounded-full hover:bg-green-400 hover:shadow-[0_0_2rem_-0.5rem_#22c55e] hover:-translate-y-1 inline-block"
        >
          Get Started for Free
        </Link>
      </div>
      
    </main>
  );
}