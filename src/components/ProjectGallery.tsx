import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../data";

interface ProjectGalleryProps {
  project: Project;
  currentLang: "vi" | "en";
}

const PLACEHOLDERS = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
];

const getSafeImagePath = (src: string): string => {
  if (!src) return PLACEHOLDERS[0];
  if (src.startsWith("/images/projects/")) {
    let hash = 0;
    for (let i = 0; i < src.length; i++) {
      hash = src.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % PLACEHOLDERS.length;
    return PLACEHOLDERS[index];
  }
  return src;
};

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, currentLang }) => {
  // Use the images array if available, otherwise fallback to a list with the main image and placeholders
  const images = React.useMemo(() => {
    const rawImages = (project.images && project.images.length > 0)
      ? project.images
      : [
          project.image,
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
        ];
    return rawImages.map(getSafeImagePath);
  }, [project]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Always reset to first image when project changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection("right");
  }, [project]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const handleImageError = (imgUrl: string) => {
    setImageErrors((prev) => ({ ...prev, [imgUrl]: true }));
  };

  const isOnlyOneImage = images.length <= 1;
  const currentImage = images[currentIndex];
  const isImageBroken = !!imageErrors[currentImage];

  // Sliding + fading variant
  const slideVariants = {
    initial: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "right" ? 15 : -15,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "right" ? -15 : 15,
    }),
  };

  return (
    <div className="relative w-full h-full group flex flex-col justify-between select-none">
      {/* Active Image block */}
      <div className="relative flex-grow min-h-[300px] md:min-h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {isImageBroken ? (
            <motion.div
              key="broken-fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-neutral-100 flex items-center justify-center p-6 text-center select-none"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mx-auto text-neutral-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  {currentLang === "vi" ? "WWCo Không Thể Tải Ảnh" : "WWCo Image Unavailable"}
                </p>
                <p className="text-[11px] text-[#A0AEC0]">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.img
              key={currentImage}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              src={currentImage}
              alt={`${project.title} - Step ${currentIndex + 1}`}
              onError={() => handleImageError(currentImage)}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>

        {/* Navigation arrows */}
        {!isOnlyOneImage && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/45 hover:bg-white/80 active:scale-95 backdrop-blur-[12px] border border-white/50 text-[#1E293B] shadow-sm flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 shrink-0" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/45 hover:bg-white/80 active:scale-95 backdrop-blur-[12px] border border-white/50 text-[#1E293B] shadow-sm flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 shrink-0" />
            </button>
          </>
        )}

        {/* Dots Indicator overlay at bottom center */}
        {!isOnlyOneImage && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center bg-white/30 backdrop-blur-[14px] border border-white/40 px-3 py-1.5 rounded-full shadow-sm max-w-[85%] overflow-hidden">
            <div className="flex space-x-2">
              {images.map((_, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={(e) => handleDotClick(idx, e)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive ? "w-6 bg-[#183C6F]" : "w-2 bg-neutral-700/40 hover:bg-neutral-600"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
