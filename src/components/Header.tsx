import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronRight } from "lucide-react";
import { translations } from "../data";
import { WWCoLogo } from "./WWCoLogo";

interface HeaderProps {
  currentLang: "vi" | "en";
  setLang: (lang: "vi" | "en") => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  setLang,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dict = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: currentLang === "vi" ? "Trang chủ" : "Home" },
    { id: "solutions", label: dict.navbar.solutions },
    { id: "projects", label: dict.navbar.projects },
    { id: "process", label: dict.navbar.process },
    { id: "blog", label: dict.navbar.blog },
    { id: "about", label: dict.navbar.about },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/72 backdrop-blur-[18px] border-b border-white/45 shadow-header py-3"
          : "bg-white/40 backdrop-blur-[12px] border-b border-white/20 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="brand-logo-trigger"
            onClick={() => handleLinkClick("hero")}
            className="flex items-center cursor-pointer group"
          >
            <WWCoLogo />
          </div>

          {/* Nav Items - Desktop */}
          <nav id="desktop-navbar" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-luxury relative cursor-pointer ${
                    isActive
                      ? "text-brand-primary bg-brand-primary/5 font-semibold"
                      : "text-brand-text-secondary hover:text-brand-primary hover:bg-neutral-100"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions: Language */}
          <div id="desktop-actions" className="hidden md:flex items-center space-x-4">
            {/* Lang Toggle */}
            <div className="flex items-center space-x-1 bg-brand-bg-section p-1 rounded-full border border-brand-border">
              <button
                id="toggle-lang-vi"
                disabled={currentLang === "vi"}
                onClick={() => setLang("vi")}
                className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-luxury ${
                  currentLang === "vi"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-brand-text-secondary hover:text-brand-primary"
                }`}
              >
                VI
              </button>
              <button
                id="toggle-lang-en"
                disabled={currentLang === "en"}
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-luxury ${
                  currentLang === "en"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-brand-text-secondary hover:text-brand-primary"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Burger trigger - Mobile */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Language switch quick for mobile */}
            <button
              id="mobile-quick-lang-btn"
              onClick={() => setLang(currentLang === "vi" ? "en" : "vi")}
              className="p-1.5 rounded-full bg-brand-bg-section border border-brand-border text-brand-primary hover:bg-white text-xs font-bold leading-none cursor-pointer flex items-center space-x-1 mr-1"
            >
              <Globe className="w-3.5 h-3.5 text-brand-text-secondary" />
              <span>{currentLang === "vi" ? "VI" : "EN"}</span>
            </button>

            <button
              id="mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-brand-bg-section border border-brand-border text-brand-text-secondary hover:text-brand-primary transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="md:hidden fixed inset-x-0 top-[56px] bottom-0 bg-white/92 backdrop-blur-2xl z-40 flex flex-col justify-between border-t border-white/40 shadow-header animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto"
        >
          <div className="px-6 py-8 space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left py-4 px-4 rounded-2xl flex items-center justify-between font-medium outline-none border-none cursor-pointer transition-luxury ${
                    isActive
                      ? "text-brand-primary bg-brand-primary/5 font-semibold"
                      : "text-brand-text-primary hover:bg-neutral-50"
                  }`}
                >
                  <span className="text-base">{item.label}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-brand-primary translate-x-1" : "text-brand-text-tertiary"}`} />
                </button>
              );
            })}
          </div>

          <div className="p-6 bg-brand-bg-gray border-t border-brand-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-text-secondary tracking-wide uppercase">
                {currentLang === "vi" ? "NGÔN NGỮ" : "LANGUAGE"}
              </span>
              <div className="flex bg-white p-0.5 rounded-full border border-brand-border">
                <button
                  id="mobile-lang-vi"
                  onClick={() => setLang("vi")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-luxury ${
                    currentLang === "vi" ? "bg-brand-primary text-white" : "text-brand-text-secondary"
                  }`}
                >
                  Tiếng Việt
                </button>
                <button
                  id="mobile-lang-en"
                  onClick={() => setLang("en")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-luxury ${
                    currentLang === "en" ? "bg-brand-primary text-white" : "text-brand-text-secondary"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <button
              id="mobile-menu-cta"
              onClick={() => handleLinkClick("contact")}
              className="w-full py-4 rounded-2xl bg-brand-primary text-white font-semibold text-sm shadow-md block text-center cursor-pointer"
            >
              {currentLang === "vi" ? "Nhận Tư Vấn Miễn Phí" : "Get Free Consultation"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
