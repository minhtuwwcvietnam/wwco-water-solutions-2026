import React, { useState } from "react";
import { Phone, MapPin, Mail, Clock, HelpCircle, Check, Loader2, PartyPopper } from "lucide-react";
import { translations } from "../data";

interface ContactFormProps {
  currentLang: "vi" | "en";
}

export const ContactForm: React.FC<ContactFormProps> = ({ currentLang }) => {
  const dict = translations[currentLang];
  const contact = dict.contact;

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [message, setMessage] = useState("");
  
  // Multi-interests selection state
  const [interests, setInterests] = useState<string[]>([]);
  // Source water selection state
  const [sourceWater, setSourceWater] = useState("tap");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleInterest = (id: string) => {
    if (interests.includes(id)) {
      setInterests(interests.filter((item) => item !== id));
    } else {
      setInterests([...interests, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim() || !location.trim()) {
      alert(currentLang === "vi" ? "Vui lòng nhập đầy đủ các thông tin bắt buộc!" : "Please fill in all required fields!");
      return;
    }

    setLoading(true);
    // Simulate API pipeline delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset form fields
      setFullName("");
      setPhone("");
      setEmail("");
      setLocation("");
      setProjectSize("");
      setMessage("");
      setInterests([]);
      setSourceWater("tap");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
            <span className="text-[10px] font-bold tracking-widest uppercase">
              {currentLang === "vi" ? "LIÊN HỆ ĐĂNG KÝ" : "QUOTATION SHEET"}
            </span>
          </div>
          <h2
            id="contact-section-title"
            className="text-[40px] font-normal tracking-tight text-[#052f89] uppercase"
          >
            {contact.title}
          </h2>
          <p
            id="contact-section-subtitle"
            className="text-base text-brand-text-secondary leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {contact.subtitle}
          </p>
        </div>

        {/* Form & Company Split Block */}
        <div id="contact-split-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left panel: Form sheet (cols-7) */}
          <div className="lg:col-span-7 bg-white/72 backdrop-blur-[18px] rounded-[28px] border border-white/55 p-6 sm:p-8 shadow-luxury relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-primary/1 blur-[40px] pointer-events-none" />
            
            {success ? (
              /* Submission Success screen */
              <div
                id="submit-success-indicator"
                className="py-12 px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto shadow-md">
                  <PartyPopper className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-text-primary">
                    {currentLang === "vi" ? "Yêu Cầu Thành Công!" : "Request Sent Successfully!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                    {contact.submitSuccess}
                  </p>
                </div>
                <button
                  id="reset-success-btn"
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-full bg-brand-primary text-white hover:bg-brand-secondary text-xs font-bold transition-luxury cursor-pointer"
                >
                  {currentLang === "vi" ? "Gửi một yêu cầu khác" : "Submit another request"}
                </button>
              </div>
            ) : (
              /* Registration Form */
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">
                      {contact.formName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="input-full-name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={currentLang === "vi" ? "Nguyễn Văn A" : "John Doe"}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-gray text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white transition-all duration-300"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">
                      {contact.formPhone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="input-phone-number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={currentLang === "vi" ? "0913 212 295" : "+84 913 212 295"}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-gray text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">
                      {contact.formEmail} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="input-email-address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="waterwisecentralvn@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-gray text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white transition-all duration-300"
                    />
                  </div>

                  {/* Location field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">
                      {contact.formLocation} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="input-workplace-location"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder={currentLang === "vi" ? "Cầu Giấy, Hà Nội" : "Cau Giay, Hanoi"}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-gray text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Project size floor */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">
                    {contact.formProjectSize}
                  </label>
                  <input
                    type="number"
                    id="input-floor-size"
                    value={projectSize}
                    onChange={(e) => setProjectSize(e.target.value)}
                    placeholder="250"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-gray text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* Multi-interests solution checkboxes */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider block">
                    {contact.formInterest}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "hotwater", label: contact.formInterestHot },
                      { id: "filtration", label: contact.formInterestFilter },
                      { id: "heating", label: contact.formInterestHeat },
                    ].map((interest) => {
                      const isChecked = interests.includes(interest.id);
                      return (
                        <div
                          key={interest.id}
                          id={`form-interest-pill-${interest.id}`}
                          onClick={() => toggleInterest(interest.id)}
                          className={`px-4 py-3 rounded-2xl border text-xs font-semibold cursor-pointer transition-luxury flex items-center justify-between ${
                            isChecked
                              ? "bg-brand-primary/8 border-brand-primary text-brand-primary"
                              : "bg-white/40 border-white/50 text-brand-text-secondary hover:bg-white"
                          }`}
                        >
                          <span className="leading-tight pr-1">{interest.label.replace(" chuyên sâu", "").replace(" ấm áp", "").replace(" Heatpump", "")}</span>
                          <div className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-all ${isChecked ? "bg-brand-primary border-brand-primary" : "border-neutral-300 bg-white"}`}>
                            {isChecked && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Source Water radios selector */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider block">
                    {contact.formSourceWater}
                  </label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    {[
                      { id: "tap", label: contact.formSourceTap },
                      { id: "well", label: contact.formSourceWell },
                    ].map((mode) => {
                      const isRadioSelected = sourceWater === mode.id;
                      return (
                        <div
                          key={mode.id}
                          id={`form-sourcewater-radio-${mode.id}`}
                          onClick={() => setSourceWater(mode.id)}
                          className={`flex-1 px-4 py-3 rounded-2xl border text-xs font-semibold cursor-pointer transition-luxury flex items-center justify-start space-x-3 ${
                            isRadioSelected
                              ? "bg-brand-primary/8 border-brand-primary text-brand-primary"
                              : "bg-white/40 border-white/50 text-brand-text-secondary hover:bg-white"
                          }`}
                        >
                          <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 ${isRadioSelected ? "border-brand-primary" : "border-neutral-300"}`}>
                            {isRadioSelected && <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />}
                          </div>
                          <span>{mode.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Remarks Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">
                    {contact.formMessage}
                  </label>
                  <textarea
                    id="input-remarks-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={currentLang === "vi" ? "Ví dụ: Biệt thự 4 tầng, 5 phòng tắm, có bồn tắm nằm..." : "Example: 4-story villa, 5 bathrooms, 1 large bathtub..."}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-gray text-xs sm:text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary focus:bg-white transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="submit-register-btn"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold text-xs sm:text-sm shadow-md shadow-brand-primary/15 transition-luxury flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{currentLang === "vi" ? "Đang gửi yêu cầu..." : "Sending..."}</span>
                    </>
                  ) : (
                    <span>{contact.btnSubmit}</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right panel: Headquarters coordinates (cols-5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white/72 backdrop-blur-[18px] rounded-[28px] border border-white/55 p-6 sm:p-8 shadow-luxury space-y-6">
              <h3 className="text-lg font-bold text-brand-text-primary uppercase tracking-tight border-b border-brand-border pb-3.5">
                {contact.companyInfo}
              </h3>

              <div id="office-info-rows" className="space-y-5">
                {/* Physical address label */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-brand-text-tertiary uppercase tracking-wider">
                      {currentLang === "vi" ? "Địa chỉ văn phòng" : "Office Address"}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-normal">
                      {contact.address}
                    </p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-brand-text-tertiary uppercase tracking-wider">
                      {currentLang === "vi" ? "Điện thoại tư vấn 24/7" : "Consultation Hotline"}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-normal">
                      {contact.hotline}
                    </p>
                  </div>
                </div>

                {/* Mail addresses */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-brand-text-tertiary uppercase tracking-wider">
                      {currentLang === "vi" ? "Email kết nối MEP" : "MEP Collaboration Email"}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-normal">
                      {contact.emailLabel.replace("Email hỗ trợ thiết kế: ", "").replace("Engineering Support Email: ", "")}
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-brand-text-tertiary uppercase tracking-wider">
                      {currentLang === "vi" ? "Giờ đóng mở văn phòng" : "Operational Hours"}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-normal">
                      {contact.workingHours.replace("Giờ làm việc: ", "").replace("Operating Hours: ", "")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Map container/banner */}
            <div className="bg-white/72 backdrop-blur-[18px] rounded-[28px] border border-white/55 p-3 shadow-luxury overflow-hidden aspect-[16/9] bg-neutral-200 relative group cursor-pointer" onClick={() => window.open('https://maps.google.com/?q=Số+7+lô+4,+Khu+báo+Nhân+Dân,+Phường+Xuân+Phương,+Hà+Nội')}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Representative location map"
                className="w-full h-full object-cover rounded-[20px] filter grayscale opacity-90 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neutral-900/10 rounded-[20px]" />
              <div className="absolute inset-x-4 bottom-4 bg-white/90 backdrop-blur-sm border border-white/40 p-3 rounded-2xl shadow-sm text-left">
                <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase block">
                  Cơ sở chính | Hanoi HQ
                </span>
                <span className="text-xs text-brand-text-secondary mt-0.5 block leading-tight">
                  {currentLang === "vi" ? "Số 7 lô 4, Khu báo Nhân Dân, P. Xuân Phương, Hà Nội" : "No 7 Block 4, Nhan Dan Newspaper Residence, Xuan Phuong, Hanoi"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
