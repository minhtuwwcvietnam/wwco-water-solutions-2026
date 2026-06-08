import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import { translations } from "../data";

interface HeroProps {
  currentLang: "vi" | "en";
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onNavigate }) => {
  const dict = translations[currentLang];
  const hero = dict.hero;

  // Render icons for statistics to add a premium technical touch
  const getStatIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-brand-primary" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-brand-primary" />;
      case 2:
        return <HeartHandshake className="w-5 h-5 text-brand-primary" />;
      case 3:
        return <Eye className="w-5 h-5 text-brand-primary" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[720px] md:min-h-[760px] lg:min-h-[90vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-slate-900"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80"
          alt="WWCo Premium Villa Central Water Engineering"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Customized overlay gradient for enhanced text contrast and elite modern look */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(248, 250, 252, 0.92) 0%, rgba(248, 250, 252, 0.78) 42%, rgba(248, 250, 252, 0.50) 100%)",
            backdropFilter: "blur(1px)",
          }}
        />
        {/* Mobile secondary contrast enhancer */}
        <div className="absolute inset-0 bg-white/35 md:hidden" />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-10">
          <div className="max-w-[900px] xl:max-w-[1050px] space-y-6 sm:space-y-8 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm animate-fade-in self-start select-none">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[11px] font-semibold text-[#475569] tracking-widest uppercase">
                {dict.brandSubtitle}
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading-title"
              className="max-w-full mb-6 md:mb-8 text-[38px] sm:text-[46px] md:text-[56px] lg:text-[60px] leading-[78.8px] font-normal text-[#052f89] uppercase tracking-tight md:tracking-[-0.02em] whitespace-pre-line"
            >
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtext"
              className="text-[16px] text-[#475569] font-normal leading-[1.65] max-w-[626px]"
            >
              {hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div id="hero-actions-container" className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-cta-consult"
                onClick={() => onNavigate("contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#183C6F] hover:bg-[#112D55] text-white font-normal text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-luxury cursor-pointer flex items-center justify-center space-x-2 select-none"
              >
                <span>{hero.ctaConsult}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-explore"
                onClick={() => onNavigate("solutions")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/50 backdrop-blur-md border border-white/75 text-[#0F172A] font-normal text-sm hover:bg-white hover:border-[#183C6F]/30 hover:text-[#183C6F] transition-luxury cursor-pointer flex items-center justify-center select-none"
              >
                {hero.ctaExplore}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats base container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 relative z-10">
        <div
          id="hero-stats-row"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-[24px] border shadow-sm select-none"
          style={{
            background: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(18px)",
            borderColor: "rgba(255, 255, 255, 0.6)",
          }}
        >
          {hero.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`hero-stat-card-${idx}`}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 group p-2 rounded-2xl hover:bg-white/40 transition-luxury"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/5 flex items-center justify-center">
                  {getStatIcon(idx)}
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span
                className="text-[11px] text-center w-full font-semibold text-[#475569] leading-normal max-w-[170px]"
                style={idx === 1 ? { width: "159px" } : {}}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
