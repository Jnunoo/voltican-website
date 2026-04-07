"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ImageIcon, ChevronLeft, ChevronRight, X, Check } from "lucide-react";

export interface HeroImageOption {
  id: string;
  label: string;
  src: string;
  opacity: number;
  blend: string;
  isVideo?: boolean;
}

export const HERO_IMAGES: HeroImageOption[] = [
  {
    id: "shader-only",
    label: "Animated Wave",
    src: "",
    opacity: 0,
    blend: "normal",
  },
  {
    id: "building",
    label: "City Building",
    src: "/hero-building.png",
    opacity: 0.2,
    blend: "luminosity",
  },
  {
    id: "building-full",
    label: "City Building (Full)",
    src: "/hero-building.png",
    opacity: 1,
    blend: "normal",
  },
  {
    id: "v1-network",
    label: "Data Flow",
    src: "/hero-bg-v1.png",
    opacity: 0.55,
    blend: "screen",
  },
  {
    id: "v2-brain",
    label: "AI Brain",
    src: "/hero-bg-v2.png",
    opacity: 0.65,
    blend: "screen",
  },
  {
    id: "v1-full",
    label: "Data Flow (Full)",
    src: "/hero-bg-v1.png",
    opacity: 1,
    blend: "normal",
  },
  {
    id: "v2-full",
    label: "AI Brain (Full)",
    src: "/hero-bg-v2.png",
    opacity: 1,
    blend: "normal",
  },
  {
    id: "video-ai-it",
    label: "AI IT Consulting (Video)",
    src: "/videos/AI_IT_Consulting_Video_Generation.mp4",
    opacity: 1,
    blend: "normal",
    isVideo: true,
  },
  {
    id: "video-cinematic",
    label: "Image to Cinematic (Video)",
    src: "/videos/Image_to_Cinematic_Video.mp4",
    opacity: 1,
    blend: "normal",
    isVideo: true,
  },
];

const STORAGE_KEY = "voltican-hero-image";

interface Props {
  onSelect: (option: HeroImageOption) => void;
  current: HeroImageOption;
}

export function useHeroImage() {
  const [active, setActive] = useState<HeroImageOption>(HERO_IMAGES[3]); // default: AI Brain

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const found = HERO_IMAGES.find((o) => o.id === saved);
        if (found) setActive(found);
      }
    } catch {}
  }, []);

  const select = (option: HeroImageOption) => {
    setActive(option);
    try {
      localStorage.setItem(STORAGE_KEY, option.id);
    } catch {}
  };

  return { active, select };
}

export default function HeroImageSwitcher({ onSelect, current }: Props) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const displayImages = HERO_IMAGES.filter((o) => o.src !== "");

  return (
    <div ref={panelRef} className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        title="Change hero background"
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium transition-all duration-200 hover:border-white/40 group"
        aria-expanded={open}
        aria-label="Change hero background image"
      >
        <ImageIcon className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
        <span className="hidden sm:inline">Background</span>
        <span className="w-4 h-4 rounded-sm overflow-hidden shrink-0 ring-1 ring-white/30">
          {current.src ? (
            <img src={current.src} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-900" />
          )}
        </span>
      </button>

      {/* Picker panel */}
      {open && (
        <div
          className="absolute bottom-full mb-2 right-0 z-[200] bg-[#001a35]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl"
          style={{ width: "320px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white text-sm font-semibold">Hero Background</p>
              <p className="text-white/40 text-xs mt-0.5">Click to apply. Choice is saved.</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Option: shader only */}
          <div className="mb-3">
            <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-2">Animated</p>
            <button
              onClick={() => { onSelect(HERO_IMAGES[0]); setOpen(false); }}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-150 text-left ${
                current.id === HERO_IMAGES[0].id
                  ? "border-brand-orange/60 bg-brand-orange/10"
                  : "border-white/10 hover:border-white/25 hover:bg-white/5"
              }`}
            >
              <div className="w-14 h-9 rounded-md overflow-hidden shrink-0 bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-950 relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(10,103,199,0.8) 0%, rgba(0,62,106,0.9) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/30 text-[8px] font-bold tracking-widest">WAVE</div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-medium">Animated Wave</p>
                <p className="text-white/40 text-[10px]">WebGL shader only</p>
              </div>
              {current.id === HERO_IMAGES[0].id && (
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
              )}
            </button>
          </div>

          {/* Image options grid */}
          <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-2">Photo Backgrounds</p>
          <div className="grid grid-cols-2 gap-2">
            {displayImages.map((opt) => (
              <button
                key={opt.id}
                onClick={() => { onSelect(opt); setOpen(false); }}
                onMouseEnter={() => setHovered(opt.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all duration-150 ${
                  current.id === opt.id
                    ? "border-brand-orange shadow-lg shadow-brand-orange/20 scale-[1.02]"
                    : "border-transparent hover:border-white/30 hover:scale-[1.01]"
                }`}
                title={opt.label}
              >
{opt.isVideo ? (
  <video
    src={opt.src}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
) : (
  <img src={opt.src} alt={opt.label} className="w-full h-full object-cover" />
)}
                {/* Dim overlay for blend modes */}
                {opt.blend !== "normal" && (
                  <div className="absolute inset-0 bg-brand-navy/50" />
                )}
                {/* Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5">
                  <p className="text-white text-[10px] font-semibold leading-tight">{opt.label}</p>
                  {opt.blend !== "normal" && (
                    <p className="text-white/50 text-[9px]">Blended</p>
                  )}
                </div>
                {/* Selected check */}
                {current.id === opt.id && (
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Current selection label */}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <p className="text-white/50 text-[11px]">
              Active: <span className="text-white/80 font-medium">{current.label}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
