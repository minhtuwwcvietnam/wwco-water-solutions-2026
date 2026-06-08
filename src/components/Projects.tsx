import React, { useState, useEffect } from "react";
import { X, MapPin, Grid, Shield, Cpu, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import { translations, viProjects, enProjects, Project } from "../data";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectsProps {
  currentLang: "vi" | "en";
}

export const Projects: React.FC<ProjectsProps> = ({ currentLang }) => {
  const dict = translations[currentLang];
  const projectsData = currentLang === "vi" ? viProjects : enProjects;
  
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const filterTabs = [
    { id: "all", label: dict.projects.filterAll },
    { id: "hotwater", label: dict.projects.filterHot },
    { id: "filtration", label: dict.projects.filterFiltration },
    { id: "heating", label: dict.projects.filterHeating },
    { id: "all-in-one", label: dict.projects.filterAllInOne },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedFilter === "all") return true;
    return proj.type === selectedFilter;
  });

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const getCategoryBadge = (type: string) => {
    switch (type) {
      case "hotwater":
        return dict.projects.filterHot;
      case "filtration":
        return dict.projects.filterFiltration;
      case "heating":
        return dict.projects.filterHeating;
      case "all-in-one":
        return dict.projects.filterAllInOne;
      default:
        return type;
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.referrerPolicy = "no-referrer";
    e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
            <span className="text-[10px] font-bold tracking-widest uppercase">
              {currentLang === "vi" ? "DỰ ÁN TIÊU BIỂU" : "FEATURED PROJECTS"}
            </span>
          </div>
          <h2
            id="projects-section-title"
            className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#052f89] uppercase"
          >
            {dict.projects.title}
          </h2>
          <p
            id="projects-section-subtitle"
            className="text-base text-brand-text-secondary leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {dict.projects.subtitle}
          </p>
        </div>

        {/* Filter Tab Chips Row */}
        <div id="projects-filter-row" className="flex justify-center max-w-full overflow-x-auto pb-2">
          <div className="flex space-x-1 bg-white/40 backdrop-blur-md p-1 rounded-full border border-white/60 shadow-sm max-w-full overflow-x-auto scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`project-filter-pill-${tab.id}`}
                  onClick={() => {
                    setSelectedFilter(tab.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-luxury whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-brand-primary text-white shadow-sm font-semibold"
                      : "text-brand-text-secondary hover:text-brand-primary hover:bg-white/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div
          id="projects-grid-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {currentProjects.map((proj, index) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              onClick={() => setActiveProject(proj)}
              className="group bg-white rounded-[28px] border border-white/55 overflow-hidden shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 transition-luxury cursor-pointer flex flex-col justify-between"
            >
              {/* Card Thumbnail */}
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover image-transition group-hover:scale-105"
                  id={`project-thumbnail-${proj.id}`}
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-brand-primary border border-white/60 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-sm">
                  {getCategoryBadge(proj.type)}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-1.5 text-brand-text-tertiary">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {proj.location}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-lg font-bold text-brand-text-primary tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-brand-text-secondary leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-border flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-primary group-hover:underline">
                    {dict.projects.viewProjectDetail}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-brand-primary/5 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Numerical Pagination Controller */}
        {filteredProjects.length > 6 && (
          <div id="projects-pagination" className="flex justify-center pt-8 border-t border-brand-border">
            <div id="projects-pagination-row" className="flex items-center space-x-2.5">
              {/* Prev button */}
              <button
                id="projects-pagination-prev"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-luxury cursor-pointer ${
                  currentPage === 1
                    ? "border-neutral-250 text-neutral-300 pointer-events-none"
                    : "border-brand-border bg-white text-brand-text-primary hover:bg-neutral-100"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    id={`projects-pagination-page-${pageNum}`}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full text-xs sm:text-sm font-bold transition-luxury cursor-pointer ${
                      isActive
                        ? "bg-brand-primary text-white shadow-sm font-bold"
                        : "bg-white border border-brand-border text-brand-text-secondary hover:text-brand-primary hover:bg-neutral-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next button */}
              <button
                id="projects-pagination-next"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-luxury cursor-pointer ${
                  currentPage === totalPages
                    ? "border-neutral-250 text-neutral-300 pointer-events-none"
                    : "border-brand-border bg-white text-brand-text-primary hover:bg-neutral-100"
                }`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div id="no-projects-fallback" className="text-center py-16 bg-white rounded-[24px] border border-brand-border">
            <span className="text-sm font-medium text-brand-text-secondary">
              {currentLang === "vi"
                ? "Không tìm thấy dự án nào trong danh mục này."
                : "No projects found matching the selected system category."}
            </span>
          </div>
        )}
      </div>

      {/* High-fidelity Specifications Detail Overlay Drawer Modal */}
      {activeProject && (
        <div
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Backdrop screen */}
          <div
            id="modal-backdrop-blur"
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal content body container */}
          <div className="flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10 pointer-events-none">
            <div
              id={`project-modal-card-${activeProject.id}`}
              className="bg-white/90 backdrop-blur-[24px] rounded-[28px] border border-white/60 shadow-2xl w-full max-w-[1200px] md:w-[82vw] h-[86vh] md:h-[84vh] max-h-[88vh] md:max-h-[84vh] overflow-hidden relative animate-in zoom-in-95 duration-200 pointer-events-auto flex flex-col md:grid md:grid-cols-[55%_45%]"
            >
              {/* Close Button top-right */}
              <button
                id="close-project-modal-btn"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-brand-text-primary hover:text-brand-primary hover:scale-110 flex items-center justify-center transition-luxury cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Visual Block Column 1 */}
              <div className="relative aspect-[4/3] md:aspect-auto h-[40%] md:h-full bg-neutral-100 overflow-hidden shrink-0">
                <ProjectGallery project={activeProject} currentLang={currentLang} />
                <div className="absolute top-4 left-4 z-10 bg-white/85 backdrop-blur-md text-brand-primary border border-white/60 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-md pointer-events-none">
                  {getCategoryBadge(activeProject.type)}
                </div>
              </div>

              {/* Specs Block Column 2 */}
              <div className="p-7 sm:p-8 lg:p-9 space-y-7 md:space-y-8 text-left flex flex-col justify-start overflow-y-auto h-[60%] md:h-full max-h-full scrollbar-thin scrollbar-thumb-slate-200">
                {/* 1. Tiêu đề dự án */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold uppercase tracking-widest leading-none">
                      {activeProject.location}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[28px] font-bold text-[#0F172A] leading-tight">
                    {activeProject.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.65]">
                    {activeProject.description}
                  </p>
                </div>

                {/* 2. THÔNG TIN CÔNG TRÌNH */}
                <div className="space-y-4">
                  <h4 className="text-[13px] font-bold text-[#052f89] uppercase tracking-wide">
                    {currentLang === "vi" ? "Thông tin công trình" : "Project Info"}
                  </h4>
                  <div className="border border-slate-200 rounded-[16px] overflow-hidden bg-slate-50/50">
                    <div className="divide-y divide-slate-200/60">
                      {[
                        { 
                          label: currentLang === "vi" ? "Loại hình" : "Project Type", 
                          value: activeProject.specs.find(s => s.label === "Loại hình" || s.label === "Type" || s.label === "Quy mô")?.value || "Đang cập nhật" 
                        },
                        { 
                          label: currentLang === "vi" ? "Địa điểm" : "Location", 
                          value: activeProject.location 
                        },
                        { 
                          label: currentLang === "vi" ? "Năm hoàn thành" : "Completed Year", 
                          value: "2025" 
                        },
                        { 
                          label: currentLang === "vi" ? "Giải pháp triển khai" : "Implemented Solution", 
                          value: activeProject.type === "hotwater" ? (currentLang === "vi" ? "Nước nóng trung tâm" : "Central Hot Water") 
                               : activeProject.type === "filtration" ? (currentLang === "vi" ? "Lọc nước tổng đầu nguồn" : "Central water filtration")
                               : activeProject.type === "heating" ? (currentLang === "vi" ? "Sưởi sàn bằng nước nóng" : "Hydronic Underfloor Heating")
                               : activeProject.type === "all-in-one" ? (currentLang === "vi" ? "Giải pháp nước toàn diện" : "All-in-one Water System")
                               : "Đang cập nhật"
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center py-3 px-4">
                          <span className="w-full sm:w-1/3 text-[12px] sm:text-[13px] text-slate-500 mb-1 sm:mb-0">
                            {item.label}
                          </span>
                          <span className="w-full sm:w-2/3 text-[13px] sm:text-[14px] text-[#0F172A] font-semibold">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. CẤU HÌNH HỆ THỐNG CHÍNH */}
                <div className="space-y-4">
                  <h4 className="text-[13px] font-bold text-[#052f89] uppercase tracking-wide">
                    {currentLang === "vi" ? "Cấu hình hệ thống chính" : "Core System Config"}
                  </h4>
                  <div className="border border-slate-200 rounded-[16px] overflow-hidden bg-slate-50/50">
                    <div className="divide-y divide-slate-200/60">
                      {[
                        {
                          code: "H",
                          label: currentLang === "vi" ? "HEATPUMP AIR-SOURCE" : "AIR-SOURCE HEATPUMP",
                          value: activeProject.specs.find(s => s.label === "Hệ nước nóng" || s.label === "Hot Water System")?.value || (currentLang === "vi" ? "Không triển khai" : "Not deployed")
                        },
                        {
                          code: "F",
                          label: currentLang === "vi" ? "HỆ LỌC TỔNG TỰ ĐỘNG" : "CENTRAL FILTRATION",
                          value: activeProject.specs.find(s => s.label === "Hệ lọc nước" || s.label === "Water Filtration" || s.label.includes("lọc"))?.value || (currentLang === "vi" ? "Không triển khai" : "Not deployed")
                        },
                        {
                          code: "S",
                          label: currentLang === "vi" ? "HỆ SƯỞI SÀN" : "UNDERFLOOR HEATING",
                          value: activeProject.specs.find(s => s.label === "Hệ sưởi sàn" || s.label === "Underfloor Heating")?.value || (currentLang === "vi" ? "Không triển khai" : "Not deployed")
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row py-3.5 px-4 items-start sm:items-center space-y-1.5 sm:space-y-0 text-[13px] sm:text-[14px]">
                          <div className="w-full sm:w-5/12 flex items-center space-x-2.5">
                            <span className="w-5 h-5 flex-shrink-0 text-[10px] font-bold rounded bg-[#052f89]/10 text-[#052f89] flex items-center justify-center">
                              {item.code}
                            </span>
                            <span className="text-slate-500 font-medium">
                              {item.label}
                            </span>
                          </div>
                          <div className="w-full sm:w-7/12 sm:pl-2">
                            <span className={`font-semibold ${item.value === "Không triển khai" || item.value === "Not deployed" ? "text-slate-400 font-normal italic" : "text-[#0F172A]"}`}>
                              {item.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. ĐIỂM KỸ THUẬT NỔI BẬT */}
                <div className="space-y-4">
                  <h4 className="text-[13px] font-bold text-[#052f89] uppercase tracking-wide">
                    {currentLang === "vi" ? "Điểm kỹ thuật nổi bật" : "Technical Highlights"}
                  </h4>
                  <ul className="space-y-3">
                    {activeProject.highlights.map((hlt, idx) => (
                      <li key={idx} className="text-[14px] sm:text-[15px] text-slate-600 flex items-start space-x-3 leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#052f89] mt-2.5 shrink-0 opacity-80" />
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
