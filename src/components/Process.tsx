import React, { useState } from "react";
import { ShieldAlert, FileCode2, HardHat, Wrench, CheckSquare, Activity, HelpCircle } from "lucide-react";
import { translations, viProcess, enProcess } from "../data";

interface ProcessProps {
  currentLang: "vi" | "en";
}

export const Process: React.FC<ProcessProps> = ({ currentLang }) => {
  const dict = translations[currentLang];
  const processData = currentLang === "vi" ? viProcess : enProcess;
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const getStepIcon = (iconName: string, isActive: boolean) => {
    const className = `w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-brand-primary" : "text-brand-text-secondary"}`;
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className={className} />;
      case "FileCode2": return <FileCode2 className={className} />;
      case "HardHat": return <HardHat className={className} />;
      case "Wrench": return <Wrench className={className} />;
      case "CheckSquare": return <CheckSquare className={className} />;
      case "Activity": return <Activity className={className} />;
      default: return <HelpCircle className={className} />;
    }
  };

  const activeStep = processData[activeStepIdx];
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = () => {
    setImageError(prev => ({ ...prev, [activeStep.image || '']: true }));
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-brand-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 lg:space-y-5">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
            <span className="text-[10px] font-bold tracking-widest uppercase">
              {currentLang === "vi" ? "LỘ TRÌNH KỸ THUẬT" : "ENGINEERING LIFECYCLE"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#052f89] uppercase leading-tight md:whitespace-nowrap text-balance">
            {dict.process.title}
          </h2>
          <p className="text-base text-brand-text-secondary leading-relaxed max-w-3xl mx-auto font-normal text-balance">
            {dict.process.subtitle}
          </p>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start justify-center max-w-[1240px] mx-auto h-auto lg:h-[640px]">
          
          {/* Left Column: Vertical Tabs (Desktop) / Horizontal Tabs (Mobile) */}
          <div className="w-full lg:w-[320px] flex shrink-0 lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar snap-x snap-mandatory">
            {processData.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              const shortTitleVi = {
                "01": "Khảo sát & xét nghiệm nước",
                "02": "Thiết kế nguyên lý",
                "03": "Chốt phương án & vật tư",
                "04": "Phối hợp MEP",
                "05": "Lắp đặt & chạy thử",
                "06": "Nghiệm thu & bảo trì"
              }[step.step] || step.title;
              
              const shortTitleEn = {
                "01": "Site Survey & Testing",
                "02": "System Design",
                "03": "Approval & Procurement",
                "04": "MEP Coordination",
                "05": "Installation & Testing",
                "06": "Handover & Maintenance"
              }[step.step] || step.title;

              const displayTitle = currentLang === "vi" ? shortTitleVi : shortTitleEn;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`flex items-center gap-4 p-4 lg:py-4 lg:px-5 rounded-2xl h-[72px] lg:h-auto lg:min-h-[76px] transition-all text-left flex-shrink-0 w-[300px] lg:w-full snap-start border ${
                    isActive 
                      ? "bg-white border-brand-primary/20 shadow-sm ring-1 ring-brand-primary/5" 
                      : "bg-[#F8FAFC]/50 lg:bg-transparent border-transparent hover:bg-white hover:border-slate-200"
                  }`}
                >
                  <div className={`w-11 h-11 flex-shrink-0 rounded-[14px] flex items-center justify-center transition-colors ${
                    isActive ? "bg-brand-primary/10" : "bg-slate-200/60"
                  }`}>
                    {getStepIcon(step.icon || "", isActive)}
                  </div>
                  <div>
                    <div className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${
                      isActive ? "text-brand-primary" : "text-slate-400"
                    }`}>
                      {currentLang === "vi" ? `BƯỚC 0${idx + 1}` : `STEP 0${idx + 1}`}
                    </div>
                    <div className={`text-[13.5px] sm:text-[14px] font-[700] uppercase tracking-[0.015em] line-clamp-2 mt-0.5 transition-colors ${
                      isActive ? "text-slate-900" : "text-slate-500"
                    }`}>
                      {displayTitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card */}
          <div className="w-full flex-1 h-full lg:min-h-[500px]">
            <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] flex flex-col md:flex-row h-full min-h-[460px]">
              
              {/* Content Panel (55-60%) */}
              <div className="w-full md:w-[58%] p-6 sm:p-10 lg:p-12 flex flex-col items-start justify-start h-full">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-4 px-3 py-1.5 bg-brand-primary/5 rounded-md inline-block">
                  {currentLang === "vi" ? `BƯỚC ${activeStep.step}` : `STEP ${activeStep.step}`}
                </span>
                <h3 className="text-[19px] sm:text-[22px] lg:text-[24px] leading-[1.22] font-[700] uppercase tracking-[0.01em] text-brand-text-primary mb-3.5">
                  {activeStep.title}
                </h3>
                <h4 className="text-[15px] font-medium text-brand-text-tertiary mb-5 leading-relaxed">
                  {activeStep.subtitle}
                </h4>
                <p className="text-[15.5px] text-brand-text-secondary leading-[1.7] mb-8 text-balance">
                  {activeStep.desc}
                </p>

                {activeStep.detail && (
                  <ul className="space-y-4 w-full">
                    {activeStep.detail.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-[15px] text-brand-text-secondary leading-[1.6]">
                        <span className="mt-[7px] mr-3.5 w-1.5 h-1.5 rounded-full bg-brand-primary/80 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image Panel (40-45%) */}
              <div className="w-full md:w-[42%] p-4 pb-6 sm:pb-4 sm:pr-4 sm:pl-0 h-[280px] sm:h-[340px] md:h-full flex flex-col shrink-0">
                <div className="w-full h-full relative overflow-hidden bg-slate-100 rounded-[22px] sm:rounded-[26px]">
                  {!imageError[activeStep.image || ''] ? (
                    <img 
                      src={activeStep.image} 
                      alt={activeStep.imageAlt || activeStep.title} 
                      className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                      key={activeStep.image}
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100/80 animate-in fade-in zoom-in-95 duration-500">
                      <Wrench className="w-12 h-12 text-slate-300 stroke-[1.5] mb-2" />
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{currentLang === 'vi' ? 'Sắp cập nhật' : 'Coming soon'}</span>
                    </div>
                  )}
                  {!imageError[activeStep.image || ''] && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

