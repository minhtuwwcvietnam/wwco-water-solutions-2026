import React from "react";
import { translations } from "../data";
import { WWCoLogo } from "./WWCoLogo";

interface FooterProps {
  currentLang: "vi" | "en";
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const dict = translations[currentLang];

  return (
    <footer id="website-footer" className="bg-[#F8FAFC] text-slate-800 border-t border-slate-200/60">
      {/* Upper Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Col 1: Brand details (cols-5) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate("hero")}>
              <WWCoLogo height={38} />
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-sm">
              {currentLang === "vi"
                ? "Đơn vị tư vấn, thiết kế và triển khai đồng bộ hệ thống lọc nước trung tâm đầu nguồn, nước nóng trung tâm Heat Pump và sưởi sàn nước nóng cho các biệt thự cao cấp tại Việt Nam."
                : "A premier engineering firm delivering synchronized thermodynamic central hot water plants, whole-house water filtration systems, and hydronic radiant floor heating assemblies for premium villas."}
            </p>
          </div>

          {/* Col 2: Navigation map (cols-3) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              {currentLang === "vi" ? "ĐIỀU HƯỚNG NHANH" : "SYSTEM NAVIGATION"}
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: "solutions", label: dict.navbar.solutions },
                { id: "projects", label: dict.navbar.projects },
                { id: "about", label: dict.navbar.about },
                { id: "process", label: dict.navbar.process },
                { id: "blog", label: dict.navbar.blog },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-500 hover:text-brand-primary text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coordinates (cols-4) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              {currentLang === "vi" ? "LIÊN HỆ WWCo" : "WWCo COORDINATES"}
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-500">
              <p className="leading-relaxed">
                <strong className="text-slate-900 block mb-0.5">{currentLang === "vi" ? "Địa Chỉ:" : "Head Representative:"}</strong>
                {dict.contact.address}
              </p>
              <p>
                <strong className="text-slate-900 block mb-0.5">{currentLang === "vi" ? "Điện Thoại:" : "Support Lines:"}</strong>
                {dict.contact.hotline}
              </p>
              <p>
                <strong className="text-slate-900 block mb-0.5">Email:</strong>
                {dict.contact.emailLabel.replace("Email kết nối: ", "").replace("Connection Email: ", "")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Copyright Area */}
      <div className="border-t border-slate-200/60 bg-slate-100/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} {dict.brandFullName}. All rights reserved.
          </span>
          <span className="tracking-wide text-[10px] uppercase font-bold text-brand-primary">
            {currentLang === "vi" ? "TIÊU CHUẨN KỸ THUẬT CHÂU ÂU" : "EUROPEAN ENGINEERING SPECIFICATIONS"}
          </span>
        </div>
      </div>
    </footer>
  );
};
