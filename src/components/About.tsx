import React from "react";
import { Award, CheckCircle2, ChevronRight, HardHat, FileText, Verified } from "lucide-react";
import { translations } from "../data";

interface AboutProps {
  currentLang: "vi" | "en";
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const dict = translations[currentLang];
  const about = dict.about;

  const getCommitmentIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileText className="w-5 h-5 text-brand-primary" />;
      case 1:
        return <Verified className="w-5 h-5 text-brand-primary" />;
      case 2:
        return <HardHat className="w-5 h-5 text-brand-primary" />;
      case 3:
        return <Award className="w-5 h-5 text-brand-primary" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Split Section: Title & Intro & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Intros (cols-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {currentLang === "vi" ? "GIỚI THIỆU THƯƠNG HIỆU" : "BRAND INTRODUCTION"}
                </span>
              </div>
              <h2
                id="about-title"
                className="text-[39px] leading-[55px] font-normal text-[#143b6c] max-w-[900px] tracking-tight uppercase"
                style={{ width: "900px", maxWidth: "100%" }}
              >
                {about.title}
              </h2>
              <p
                id="about-subtitle"
                className="text-[16px] font-normal text-brand-text-secondary leading-relaxed pr-4"
              >
                {about.subtitle}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-brand-border">
              <h3 className="text-lg font-bold text-[#143b6c] tracking-tight uppercase">
                {about.introTitle}
              </h3>
              <p className="text-[16px] text-brand-text-secondary leading-relaxed font-normal whitespace-pre-line">
                {about.intro}
              </p>
            </div>
          </div>

          {/* Right Column: Quote Card (cols-5) */}
          <div className="lg:col-span-5 pt-4 lg:pt-16">
            <div className="relative bg-white/72 backdrop-blur-[18px] rounded-[28px] p-8 border border-white/55 shadow-luxury overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-primary/2 blur-[40px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-brand-secondary/3 blur-[30px] pointer-events-none" />
              
              {/* Quote Marks decor */}
              <span className="text-[120px] font-serif leading-none absolute -top-8 left-4 text-brand-primary/5 select-none font-black">
                “
              </span>
              
              <div className="relative z-10 space-y-6">
                <blockquote className="text-base sm:text-lg italic font-medium text-brand-text-primary leading-relaxed text-left">
                  {about.quote}
                </blockquote>
                <div className="border-t border-brand-border pt-4 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-xs shadow-md">
                    WW
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                      {currentLang === "vi" ? "Ban Điều Hành WWCo" : "WWCo Executive Board"}
                    </div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-brand-primary mt-0.5">
                      {currentLang === "vi" ? "Kiểm Soát Kỹ Thuật" : "TECHNICAL DIRECTORS"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: WWCo OPERATIONAL COMMITMENTS */}
        <div id="about-commitments-block" className="space-y-8 pt-8 border-t border-brand-border text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#052f89] uppercase tracking-tight">
              {about.commitmentsTitle}
            </h3>
            <p className="text-sm text-brand-text-secondary leading-relaxed max-w-3xl">
              {about.commitmentsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {about.commitments.map((cmt, index) => (
              <div
                key={index}
                id={`commitment-box-${index}`}
                className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/50 hover:bg-white/80 hover:border-brand-primary/20 hover:shadow-luxury-hover shadow-sm transition-luxury flex flex-col justify-between text-left space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      {getCommitmentIcon(index)}
                    </div>
                    <span className="text-2xl font-bold text-[#143b6c] select-none">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-brand-text-primary uppercase tracking-wide group-hover:text-brand-primary transition-colors">
                    {cmt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-normal">
                    {cmt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Base Section: TECHNICAL PRINCIPLES */}
        <div id="about-principles-block" className="space-y-8 border-t border-brand-border pt-12 text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#052f89] uppercase tracking-tight">
              {about.principlesTitle}
            </h3>
            <p className="text-sm text-brand-text-secondary leading-relaxed max-w-3xl font-normal">
              {about.principlesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {about.principles.map((prc, prcIdx) => (
              <div
                key={prcIdx}
                id={`technical-rule-${prcIdx}`}
                className="bg-white/40 backdrop-blur-sm rounded-[24px] p-6 sm:p-8 border border-white/50 flex flex-col justify-between text-left space-y-4 hover:shadow-luxury-hover hover:bg-white/85 hover:border-brand-primary/20 transition-luxury"
              >
                <div className="space-y-3">
                  <div className="w-1.5 h-6 bg-brand-primary rounded-full" />
                  <h4 className="text-sm sm:text-base font-bold text-brand-text-primary uppercase tracking-wide">
                    {prc.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-normal">
                    {prc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
