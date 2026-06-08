import React, { useState, useMemo, useEffect } from "react";
import { BookOpen, Calendar, Clock, Filter, ArrowLeft, ArrowRight, Search, X } from "lucide-react";
import { translations, viArticles, enArticles, Article } from "../data";

interface BlogProps {
  currentLang: "vi" | "en";
}

export const Blog: React.FC<BlogProps> = ({ currentLang }) => {
  const dict = translations[currentLang];
  const articlesData = currentLang === "vi" ? viArticles : enArticles;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedArticle) {
        setSelectedArticle(null);
      }
    };

    if (selectedArticle) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArticle]);

  const ITEMS_PER_PAGE = 6;

  // Filter Categories Mapper
  const categories = [
    { id: "all", label: dict.blog.filterAll },
    { id: "hotwater", label: dict.blog.filterHot },
    { id: "filtration", label: dict.blog.filterFilter },
    { id: "heating", label: dict.blog.filterHeat },
    { id: "experience", label: dict.blog.filterExp },
  ];

  // Process and filter the articles
  const filteredArticles = useMemo(() => {
    let result = articlesData;

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter((a) => a.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [articlesData, selectedCategory, searchQuery]);

  // Total pages
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  // Articles to display
  const displayedArticles = useMemo(() => {
    // If pagination is not active, we just show the first 6 items
    if (!showPagination) {
      return filteredArticles.slice(0, 6);
    }

    // If active, divide based on currentPage
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, showPagination, currentPage]);

  const handlePageChange = (pageNum: number) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
    // Smooth scroll back to top of the blog grid
    const element = document.getElementById("blog-header-box");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCTAContactClick = () => {
    setSelectedArticle(null);
    // Smooth scroll to contact section
    setTimeout(() => {
      const contactSec = document.getElementById("contact");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.referrerPolicy = "no-referrer";
    e.currentTarget.src = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80";
  };

  const isVi = currentLang === "vi";

  const getCTATexts = () => {
    const isArt2 = selectedArticle?.id === "art2";
    const cat = selectedArticle?.category;
    if (isArt2) {
      return {
        title: isVi ? "Cần tư vấn hệ nước nóng cho biệt thự?" : "Need hot water consulting for your villa?",
        desc: isVi 
          ? "WWCo có thể khảo sát tuyến ống, vị trí phòng máy và nhu cầu sử dụng để đề xuất phương án phù hợp."
          : "WWCo can perform a site audit of your piping layout, equipment room spacing, and specific hot water loads to propose the optimal custom design.",
        btn: isVi ? "Liên hệ tư vấn" : "Contact our experts"
      };
    }
    if (cat === "filtration") {
      return {
        title: isVi ? "Cần tư vấn giải pháp lọc nước trung tâm cho biệt thự?" : "Need water filtration consulting for your villa?",
        desc: isVi 
          ? "WWCo có thể xét nghiệm nguồn nước đầu vào, khảo sát lưu lượng thực tế để tư vấn cấu hình cột lọc thô, than hoạt tính và hạt làm mềm phù hợp."
          : "WWCo will analyze your local water chemistry and peak flows to engineer the highly specific configurations of media and softeners your property requires.",
        btn: isVi ? "Liên hệ tư vấn" : "Contact our experts"
      };
    }
    if (cat === "heating") {
      return {
        title: isVi ? "Cần tư vấn hệ sưởi sàn nước nóng cho biệt thự?" : "Need hydronic underfloor heating consulting for your villa?",
        desc: isVi 
          ? "Hệ sưởi sàn cần phối hợp cao độ dầm sàn xây thô và lớp hoàn thiện mặt nền rất sớm. Chúng tôi đồng hành cùng Đội KTS & MEP của bạn."
          : "Hydronic floors demand detailed design coordination with structural slab drafts. Our engineering team directly consults alongside your lead architects.",
        btn: isVi ? "Liên hệ tư vấn" : "Contact our experts"
      };
    }
    return {
      title: isVi ? "Cần tư vấn giải pháp nước tổng thể tiện nghi cho biệt thự?" : "Need complete luxury water solutions for your villa?",
      desc: isVi 
        ? "Chúng tôi sẽ khảo sát tuyến hạ tầng, nhu cầu công năng sử dụng để tư vấn sơ đồ công nghệ tối ưu, đồng bộ nhất."
        : "We perform a thorough review of structural layouts and target fixtures to specify highly integrated, high-volume equipment setups.",
      btn: isVi ? "Liên hệ tư vấn" : "Contact our experts"
    };
  };

  return (
    <section
      id="blog"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div id="blog-header-box" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
            <span className="text-[10px] font-bold tracking-widest uppercase">
              {currentLang === "vi" ? "KIẾN THỨC CHUYÊN SÂU" : "ENGINEERING INSIGHTS"}
            </span>
          </div>
          <h2
            id="blog-section-title"
            className="text-[40px] font-normal tracking-tight text-[#052f89] uppercase"
          >
            {dict.blog.title}
          </h2>
          <p
            id="blog-section-subtitle"
            className="text-base text-brand-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            {dict.blog.subtitle}
          </p>
        </div>

        {/* Categories select row & search box */}
        <div
          id="blog-controls-row"
          className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-border pb-6"
        >
          {/* Filters pills */}
          <div className="flex space-x-1 bg-white/40 backdrop-blur-md p-1 rounded-full border border-white/60 max-w-full overflow-x-auto scrollbar-none shrink-0 self-start md:self-center">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`blog-filter-btn-${cat.id}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-luxury whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-brand-primary text-white shadow-sm"
                      : "text-brand-text-secondary hover:text-brand-primary hover:bg-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search container */}
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              id="search-articles-input"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={currentLang === "vi" ? "Tìm kiếm bài viết..." : "Search insights..."}
              className="w-full pl-9 pr-4 py-2.5 rounded-full border border-white/60 bg-white/40 backdrop-blur-md text-xs sm:text-sm font-medium text-brand-text-primary placeholder-brand-text-tertiary focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white transition-all duration-300"
            />
            <Search className="w-4 h-4 text-brand-text-tertiary absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Articles Cards Grid */}
        <div
          id="articles-grid-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left"
        >
          {displayedArticles.map((art) => (
            <div
              key={art.id}
              id={`article-card-${art.id}`}
              onClick={() => setSelectedArticle(art)}
              className="group bg-white rounded-[28px] border border-white/55 overflow-hidden shadow-luxury hover:shadow-luxury-hover hover:bg-white hover:-translate-y-1 transition-luxury cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-neutral-200">
                <img
                  src={art.image}
                  alt={art.title}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover image-transition group-hover:scale-105"
                  id={`article-thumb-${art.id}`}
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 text-[9px] font-bold text-brand-primary uppercase tracking-wider shadow-sm">
                  {art.categoryLabel}
                </div>
              </div>

              {/* Card Technical Details Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-[10px] sm:text-xs font-semibold text-brand-text-tertiary tracking-wide uppercase">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-brand-text-primary tracking-tight leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-brand-text-secondary leading-relaxed line-clamp-3">
                    {art.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-border flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-primary group-hover:underline">
                    {dict.blog.readMore}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-brand-primary/5 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results fallback */}
        {displayedArticles.length === 0 && (
          <div id="no-articles-fallback" className="text-center py-16 bg-brand-bg-gray rounded-3xl border border-brand-border">
            <span className="text-sm font-medium text-brand-text-secondary">
              {dict.blog.noArticles}
            </span>
          </div>
        )}

        {/* View More Button or Numerical Pagination */}
        {filteredArticles.length > 6 && (
          <div id="blog-navigation-panel" className="flex justify-center pt-8 border-t border-brand-border">
            {!showPagination ? (
              <button
                id="blog-view-more-trigger"
                onClick={() => setShowPagination(true)}
                className="px-8 py-3.5 rounded-full bg-white border border-brand-border text-brand-text-primary hover:border-brand-text-secondary hover:text-brand-primary font-bold text-sm shadow-sm hover:shadow-md transition-luxury cursor-pointer flex items-center space-x-2"
              >
                <span>{dict.blog.viewMore}</span>
              </button>
            ) : (
              /* Custom Luxury Pagination Controller */
              <div id="blog-pagination-row" className="flex items-center space-x-2.5">
                {/* Prev button */}
                <button
                  id="pagination-prev"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-luxury cursor-pointer ${
                    currentPage === 1
                      ? "border-neutral-200 text-neutral-300 pointer-events-none"
                      : "border-brand-border text-brand-text-primary hover:bg-neutral-100"
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
                      id={`pagination-page-${pageNum}`}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-full text-xs sm:text-sm font-bold transition-luxury cursor-pointer ${
                        isActive
                          ? "bg-brand-primary text-white shadow-sm"
                          : "bg-white border border-brand-border text-brand-text-primary hover:bg-brand-bg-gray"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next button */}
                <button
                  id="pagination-next"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-luxury cursor-pointer ${
                    currentPage === totalPages
                      ? "border-neutral-200 text-neutral-300 pointer-events-none"
                      : "border-brand-border text-brand-text-primary hover:bg-neutral-100"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Screen Full Overlay Dialog Modal to view complete article contents */}
      {selectedArticle && (
        <div
          id="article-read-modal"
          className="fixed inset-0 z-50 overflow-y-auto block"
        >
          {/* Backdrop screen */}
          <div
            id="article-backdrop-blur"
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 bg-black/45 backdrop-blur-[8px] transition-opacity duration-300"
          />

          {/* Modal layout container */}
          <div 
            className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8 relative"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              id={`article-detail-card-${selectedArticle.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/85 backdrop-blur-[24px] rounded-[28px] border border-white/65 shadow-2xl w-[94vw] md:w-[90vw] lg:w-[84vw] lg:max-w-[1180px] h-[90vh] md:h-[84vh] lg:max-h-[86vh] overflow-hidden relative animate-in zoom-in-95 duration-200 flex flex-col lg:flex-row"
            >
              {/* Close Button top-right */}
              <button
                id="close-article-modal-btn"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-brand-text-primary hover:text-brand-primary hover:scale-110 flex items-center justify-center transition-luxury cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Image cover */}
              <div className="relative w-full lg:w-1/2 shrink-0 bg-neutral-200 h-[220px] sm:h-[260px] lg:h-full">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent lg:from-neutral-900/90 lg:via-neutral-900/20" />
                <div className="absolute bottom-5 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 text-left space-y-2">
                  <span className="text-[10px] font-bold text-white bg-brand-primary/75 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    {selectedArticle.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Informational details content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-7 text-left overflow-y-auto flex-1 lg:w-1/2">
                <div className="flex items-center space-x-4 text-xs font-semibold text-brand-text-tertiary uppercase tracking-wider border-b border-brand-border pb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                {/* Article detail body renderer */}
                <div className="space-y-6 font-sans">
                  {selectedArticle.id === "art2" ? (
                    /* Specially Redesigned Expert Consultation Structure for art2 */
                    <div id="art2-expert-layout" className="space-y-6 text-[#0F172A]">
                      
                      {/* Section 1: Summary Box */}
                      <div className="bg-brand-primary/[0.03] border border-brand-primary/10 rounded-[16px] p-5">
                        <h4 className="text-xs sm:text-sm font-bold tracking-widest text-brand-primary uppercase mb-3">
                          {isVi ? "Tóm tắt nhanh" : "Quick Summary"}
                        </h4>
                        <ul className="space-y-2.5 text-[15px] sm:text-[16px] text-[#475569] leading-[1.7]">
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 mr-3 shrink-0" />
                            <span>
                              {isVi 
                                ? "Nước nóng chờ lâu thường không phải do máy yếu, mà do nước nguội còn nằm trong đường ống."
                                : "Long hot water wait times are usually not due to a weak heater, but because cooled water remains inside the pipeline."}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 mr-3 shrink-0" />
                            <span>
                              {isVi
                                ? "Với biệt thự có tuyến ống dài, cần thiết kế đường hồi và bơm hồi tuần hoàn."
                                : "For villas with long piping systems, a recirculation loop and return pump are essential."}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 mr-3 shrink-0" />
                            <span>
                              {isVi
                                ? "Hệ thống cần được tính toán theo vị trí phòng máy, chiều dài ống và thói quen sử dụng thực tế."
                                : "The system must be carefully engineered based on equipment room positioning, pipe runs, and exact peak usage habits."}
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Section 2: Vấn đề thường gặp */}
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-[17px] font-bold tracking-tight text-[#0F172A] font-[650] uppercase">
                          {isVi ? "Vấn đề thường gặp" : "Common Challenge"}
                        </h4>
                        <div className="bg-rose-50/40 border border-rose-100/70 rounded-[14px] p-4 text-[#475569] text-[15px] sm:text-[16px] leading-[1.7]">
                          {isVi
                            ? "Người dùng đã đầu tư hệ nước nóng cao cấp nhưng vẫn phải chờ từ 1 đến 2 phút mới có nước ấm ở các vòi tắm nằm xa phòng kỹ thuật."
                            : "Homeowners often invest heavily in premium central boilers or heat pumps, yet they still experience a 1 to 2 minute lag before hot water arrives at distant bathroom fixtures."}
                        </div>
                      </div>

                      {/* Section 3: Nguyên nhân kỹ thuật */}
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-[17px] font-bold tracking-tight text-[#0F172A] font-[650] uppercase">
                          {isVi ? "Nguyên nhân kỹ thuật" : "Technical Root Causes"}
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5">
                          {[
                            isVi 
                              ? "Nước trong đường ống dẫn bị nguội đi tự nhiên sau mỗi lần tắt vòi và để lâu không sử dụng."
                              : "Water trapped inside the distribution supply pipes cools down organically during idle periods.",
                            isVi
                              ? "Tuyến ống dắt từ phòng máy trung tâm đến các vòi tắm xa có chiều dài quá lớn."
                              : "The physical piping length and diameter from the main boiler room to terminal outlets is excessively long.",
                            isVi
                              ? "Hệ thống thiếu đường ống hồi tuần hoàn hoặc bơm hồi chưa được thiết lập cơ chế điều khiển tối ưu."
                              : "Lack of a dedicated return recirculation pipe loop, or poorly calibrated circulation pumping cycles."
                          ].map((item, idx) => (
                            <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-[14px] flex items-start gap-3">
                              <span className="font-mono text-brand-primary bg-brand-primary/5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                                {idx + 1}
                              </span>
                              <span className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.7]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section 4: Giải pháp WWCo đề xuất */}
                      <div className="space-y-3">
                        <h4 className="text-base sm:text-[17px] font-bold tracking-tight text-[#0F172A] font-[650] uppercase">
                          {isVi ? "Giải pháp WWCo đề xuất" : "WWCo Proposed Solutions"}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Item 01 */}
                          <div className="border border-brand-primary/10 bg-white rounded-[16px] p-4 hover:shadow-sm transition-all">
                            <span className="font-mono text-xl sm:text-2xl text-brand-primary font-bold block mb-2">01</span>
                            <h5 className="font-extrabold text-[#0F172A] text-[15px] sm:text-base leading-snug mb-1.5">
                              {isVi ? "Đường ống hồi" : "Recirculation Piping"}
                            </h5>
                            <p className="text-xs sm:text-sm text-[#475569] leading-[1.65]">
                              {isVi
                                ? "Đường ống hồi đưa nước nguội ở điểm xa quay về bồn/tuyến chính, giúp duy trì nước ấm gần điểm sử dụng."
                                : "Dedicated loop routing cooled standing water back into central storage tanks, ensuring instant warm water comfort."}
                            </p>
                          </div>
                          {/* Item 02 */}
                          <div className="border border-brand-primary/10 bg-white rounded-[16px] p-4 hover:shadow-sm transition-all">
                            <span className="font-mono text-xl sm:text-2xl text-brand-primary font-bold block mb-2">02</span>
                            <h5 className="font-extrabold text-[#0F172A] text-[15px] sm:text-base leading-snug mb-1.5">
                              {isVi ? "Bơm tuần hoàn" : "Circulation Pump"}
                            </h5>
                            <p className="text-xs sm:text-sm text-[#475569] leading-[1.65]">
                              {isVi
                                ? "Bơm hồi hoạt động theo cảm biến nhiệt hoặc khung giờ sử dụng, giúp giảm thời gian chờ nước nóng."
                                : "Activates dynamically when inline temperature sensors register drops below pre-set targets."}
                            </p>
                          </div>
                          {/* Item 03 */}
                          <div className="border border-brand-primary/10 bg-white rounded-[16px] p-4 hover:shadow-sm transition-all">
                            <span className="font-mono text-xl sm:text-2xl text-brand-primary font-bold block mb-2">03</span>
                            <h5 className="font-extrabold text-[#0F172A] text-[15px] sm:text-base leading-snug mb-1.5">
                              {isVi ? "Điều khiển thông minh" : "Smart Controls"}
                            </h5>
                            <p className="text-xs sm:text-sm text-[#475569] leading-[1.65]">
                              {isVi
                                ? "Không cho bơm chạy liên tục; cài đặt theo nhiệt độ hoặc lịch sử dụng để tiết kiệm điện và giảm hao nhiệt."
                                : "Utilizes customized timeframes or smart presence sensors to prevent 24/7 pump wear and major energy loss."}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section 5: Góc nhìn WWCo callout */}
                      <div className="bg-[#F1F5F9] border-l-4 border-brand-primary rounded-r-[16px] p-5">
                        <span className="text-[11px] font-bold tracking-wider text-brand-primary uppercase block mb-1">
                          {isVi ? "Góc nhìn chuyên gia WWCo" : "WWCo Perspective"}
                        </span>
                        <p className="text-[15px] sm:text-[16px] text-[#0F172A] font-medium leading-[1.7] italic">
                          {isVi
                            ? "“Một hệ nước nóng tốt không chỉ nằm ở công suất máy. Trải nghiệm thực tế phụ thuộc nhiều vào đường ống, bơm hồi, cảm biến nhiệt và cách điều khiển vận hành.”"
                            : "“A superior hot water system is defined by more than just raw compressor wattage. The real comfort experience relies deeply on smart pipeline runs, return loops, thermal sensors, and refined automatic logic.”"}
                        </p>
                      </div>

                    </div>
                  ) : (
                    /* Clean Structured Parser for All Other Articles */
                    <div className="space-y-4">
                      {selectedArticle.content.map((pText, pIdx) => {
                        // Check if paragraph starts with bullet points or numbered lists
                        const matchNum = pText.match(/^([1-9])\.\s*(.+)$/);
                        if (matchNum) {
                          const num = matchNum[1];
                          const rest = matchNum[2];
                          const colonIdx = rest.indexOf(":");
                          const dashIdx = rest.indexOf(" - ");
                          let title = "";
                          let body = rest;
                          if (colonIdx !== -1) {
                            title = rest.substring(0, colonIdx).trim();
                            body = rest.substring(colonIdx + 1).trim();
                          } else if (dashIdx !== -1) {
                            title = rest.substring(0, dashIdx).trim();
                            body = rest.substring(dashIdx + 3).trim();
                          }
                          return (
                            <div key={pIdx} className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 sm:p-5 flex gap-4 hover:shadow-sm transition-all">
                              <span className="font-mono text-brand-primary font-bold text-lg sm:text-2xl shrink-0">
                                0{num}
                              </span>
                              <div className="space-y-1.5 text-left">
                                {title && (
                                  <h5 className="font-extrabold text-[#0F172A] text-sm sm:text-[15px] uppercase tracking-wide">
                                    {title}
                                  </h5>
                                )}
                                <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.7]">
                                  {body}
                                </p>
                              </div>
                            </div>
                          );
                        }

                        // Intro paragraph style
                        if (pIdx === 0) {
                          return (
                            <div key={pIdx} className="bg-[#F8FAFC] border-l-4 border-brand-primary/40 p-4 rounded-r-[16px]">
                              <p className="text-[15px] sm:text-[16px] text-[#0F172A] font-medium leading-[1.7]">
                                {pText}
                              </p>
                            </div>
                          );
                        }

                        // Normal paragraphs styling
                        return (
                          <p
                            key={pIdx}
                            className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.7] whitespace-pre-line"
                          >
                            {pText}
                          </p>
                        );
                      })}

                      {/* Generic category callout for other articles */}
                      <div className="bg-[#F1F5F9]/50 border-l-2 border-brand-primary/30 rounded-r-[14px] p-4 mt-6">
                        <p className="text-xs sm:text-sm text-[#475569] italic leading-[1.65]">
                          {isVi 
                            ? "Tại WWCo, chúng tôi định bồi các giải pháp nước toàn diện cho biệt thự từ khâu khảo sát thực tế, đo đạc thông số nhiệt, áp suất cho đến vẽ sơ đồ 3D MEP hoàn chỉnh."
                            : "At WWCo, we specialize in high-end villa water solutions, backing our installations with precise flow measurements, layout planning, and complete 3D MEP integration models."}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Call-to-action Section inside popup */}
                  <div className="bg-neutral-50/80 border border-neutral-200/60 rounded-[16px] p-5 text-center space-y-3 mt-8">
                    <h5 className="text-sm font-bold text-brand-text-primary tracking-tight">
                      {getCTATexts().title}
                    </h5>
                    <p className="text-xs sm:text-[13px] text-brand-text-secondary max-w-sm mx-auto leading-relaxed">
                      {getCTATexts().desc}
                    </p>
                    <button
                      onClick={handleCTAContactClick}
                      className="inline-flex items-center space-x-1.5 bg-brand-primary text-white hover:bg-brand-primary/90 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer select-none"
                    >
                      <span>{getCTATexts().btn}</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border flex justify-end">
                  <button
                    id="back-list-article-btn"
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 rounded-full border border-brand-border text-brand-text-primary hover:border-brand-text-secondary hover:text-brand-primary text-xs font-bold transition-luxury cursor-pointer"
                  >
                    {dict.blog.backToHome || (isVi ? "Quay lại" : "Back")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
