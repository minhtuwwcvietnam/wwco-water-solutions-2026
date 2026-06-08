import React, { useState } from "react";
import { Check, Cpu, Eye, ArrowRight, Settings, Sliders, Layers } from "lucide-react";
import { translations, viSolutions, enSolutions, Solution } from "../data";

interface SolutionsProps {
  currentLang: "vi" | "en";
  onNavigate: (sectionId: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ currentLang, onNavigate }) => {
  const dict = translations[currentLang];
  const solutionsData = currentLang === "vi" ? viSolutions : enSolutions;
  const [activeTab, setActiveTab] = useState<"hotwater" | "filtration" | "heating">("hotwater");

  const activeSolution = solutionsData.find((s) => s.id === activeTab) || solutionsData[0];

  const getTabTitle = (id: string, lang: "vi" | "en") => {
    if (lang === "vi") {
      switch (id) {
        case "hotwater":
          return "HỆ NƯỚC NÓNG";
        case "filtration":
          return "HỆ LỌC NƯỚC";
        case "heating":
          return "HỆ SƯỞI SÀN";
        default:
          return "";
      }
    } else {
      switch (id) {
        case "hotwater":
          return "HOT WATER";
        case "filtration":
          return "WATER FILTRATION";
        case "heating":
          return "UNDERFLOOR HEATING";
        default:
          return "";
      }
    }
  };

  const getCardTitle = (id: string, lang: "vi" | "en") => {
    if (lang === "vi") {
      switch (id) {
        case "hotwater":
          return "HỆ NƯỚC NÓNG";
        case "filtration":
          return "HỆ LỌC NƯỚC";
        case "heating":
          return "HỆ SƯỞI SÀN";
        default:
          return "";
      }
    } else {
      switch (id) {
        case "hotwater":
          return "HỆ NƯỚC NÓNG";
        case "filtration":
          return "HỆ LỌC NƯỚC";
        case "heating":
          return "HỆ SƯỞI SÀN";
        default:
          return "";
      }
    }
  };

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case "hotwater":
        return <Cpu className="w-4 h-4" />;
      case "filtration":
        return <Sliders className="w-4 h-4" />;
      case "heating":
        return <Layers className="w-4 h-4" />;
      default:
        return <Settings className="w-4 h-4" />;
    }
  };

  // Safe image fallback in case local images do not render in the sandboxed preview environment
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.referrerPolicy = "no-referrer";
    if (activeTab === "hotwater") {
      e.currentTarget.src = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80";
    } else if (activeTab === "filtration") {
      e.currentTarget.src = "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80";
    } else {
      e.currentTarget.src = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <section
      id="solutions"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
            <span className="text-[14px] font-bold tracking-widest uppercase">
              {currentLang === "vi" ? "DANH MỤC GIẢI PHÁP" : "SOLUTION PORTFOLIO"}
            </span>
          </div>
          <h2
            id="solutions-section-title"
            className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-normal tracking-tight text-[#052f89] uppercase lg:whitespace-nowrap"
          >
            {dict.solutions.title}
          </h2>
          <p
            id="solutions-section-subtitle"
            className="text-base text-brand-text-secondary leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {dict.solutions.subtitle}
          </p>
        </div>

        {/* Dynamic Nav Tabs Pill */}
        <div id="solutions-tabs-pills-row" className="flex justify-center w-full">
          <div className="inline-flex bg-white/40 backdrop-blur-md p-1.5 rounded-full border border-white/60 shadow-sm max-w-full overflow-x-auto scrollbar-none flex-nowrap">
            {solutionsData.map((sol) => {
              const isActive = activeTab === sol.id;
              return (
                <button
                  key={sol.id}
                  id={`solution-tab-pill-${sol.id}`}
                  onClick={() => setActiveTab(sol.id as any)}
                  className={`px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold tracking-wider transition-luxury flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10"
                      : "text-brand-text-secondary hover:text-brand-primary hover:bg-white/40"
                  }`}
                >
                  {getSolutionIcon(sol.id)}
                  <span>{getTabTitle(sol.id, currentLang)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content area */}
        <div
          id={`solution-content-panel-${activeTab}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 items-start"
        >
          {/* Left panel: Info & benefits & specs (cols-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-primary tracking-widest block uppercase">
                {activeSolution.badge}
              </span>
              <h3 className="text-2.5xl sm:text-3.5xl font-extrabold text-brand-text-primary tracking-tight uppercase">
                {getCardTitle(activeSolution.id, currentLang)}
              </h3>
              <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed whitespace-pre-line font-normal">
                {activeSolution.description}
              </p>
            </div>

            {/* Custom Benefits list */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-brand-text-primary tracking-wide uppercase border-b border-brand-border pb-2">
                {activeSolution.benefitsTitle}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeSolution.benefits.map((benefit, bIdx) => (
                  <li
                    key={bIdx}
                    id={`benefit-[${activeTab}]-${bIdx}`}
                    className="flex items-start space-x-2.5 text-sm text-brand-text-secondary"
                  >
                    <div className="min-w-[18px] min-h-[18px] w-[18px] h-[18px] rounded-full bg-brand-primary/5 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-brand-primary stroke-[3]" />
                    </div>
                    <span className="leading-tight font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications sheet */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-brand-text-primary tracking-wide uppercase border-b border-brand-border pb-2">
                {activeSolution.specsTitle}
              </h4>
              <div className="overflow-hidden border border-white/40 rounded-2xl bg-white/40 backdrop-blur-sm shadow-sm">
                <table className="min-w-full divide-y divide-brand-border table-fixed">
                  <tbody className="divide-y divide-brand-border">
                    {activeSolution.specs.map((spec, sIdx) => (
                      <tr
                        key={sIdx}
                        className="hover:bg-white/50 transition-colors"
                      >
                        <td className="w-1/3 px-4 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-brand-text-primary border-r border-brand-border">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 sm:py-4 text-xs sm:text-sm text-brand-text-secondary text-left font-normal leading-relaxed">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA action button */}
            <div className="pt-2">
              <button
                id={`btn-solution-action-${activeTab}`}
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-brand-primary hover:bg-brand-secondary text-white font-medium text-xs sm:text-sm shadow-sm transition-luxury cursor-pointer"
              >
                <span>{activeSolution.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right panel: Visual render & Diagram flow card (cols-5) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Aspect card image */}
            <div className="bg-white/72 backdrop-blur-[18px] rounded-[28px] p-2.5 border border-white/55 shadow-luxury group overflow-hidden">
              <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] bg-neutral-200">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover image-transition group-hover:scale-105"
                  id={`solution-image-${activeTab}`}
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50 shadow-sm">
                  <span className="text-[10px] font-bold text-brand-primary tracking-widest uppercase">
                    {activeSolution.imageLabel}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 text-left">
                <p className="text-xs text-brand-text-secondary leading-relaxed font-normal">
                  {activeSolution.imageDesc}
                </p>
              </div>
            </div>

            {/* Principle Workflow steps card */}
            <div className="p-6 bg-white/40 backdrop-blur-md rounded-[24px] border border-white/30 shadow-sm">
              <div className="flex items-center space-x-2 border-b border-brand-border pb-3 mb-4">
                <Eye className="w-4 h-4 text-brand-primary" />
                <h4 className="text-sm font-bold text-brand-text-primary tracking-wide uppercase">
                  {activeSolution.diagramTitle}
                </h4>
              </div>
              <div className="space-y-4 relative">
                {/* Visual vertical connector line */}
                <div className="absolute left-[13px] top-6 bottom-6 w-0.5 bg-brand-border" />

                {activeSolution.diagramSteps.map((step, dIdx) => (
                  <div
                    key={dIdx}
                    id={`diagram-step-[${activeTab}]-${dIdx}`}
                    className="flex space-x-3.5 relative z-10"
                  >
                    <div className="w-7 h-7 rounded-full bg-white border-2 border-brand-primary text-[10px] font-bold text-brand-primary flex items-center justify-center shadow-sm shrink-0 mt-0.5">
                      0{dIdx + 1}
                    </div>
                    <div className="text-left space-y-1">
                      <h5 className="text-xs sm:text-xs font-bold text-brand-text-primary uppercase tracking-wide">
                        {step.title}
                      </h5>
                      <p className="text-xs text-brand-text-secondary leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
