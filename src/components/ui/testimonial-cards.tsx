"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
  role?: string;
}

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
  role,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex:
          position === "front" ? "2" : position === "middle" ? "1" : "0",
      }}
      animate={{
        rotate:
          position === "front"
            ? "-6deg"
            : position === "middle"
            ? "0deg"
            : "6deg",
        x:
          position === "front"
            ? "0%"
            : position === "middle"
            ? "12%"
            : "24%",
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(e) => {
        dragRef.current = (e as unknown as MouseEvent).clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - (e as unknown as MouseEvent).clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[420px] w-[clamp(260px,90vw,320px)] select-none place-content-center space-y-6 rounded-2xl border-2 border-brand-steel/30 bg-brand-navy/90 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-20 w-20 rounded-full border-2 border-brand-steel/40 bg-brand-ice object-cover"
      />
      <span className="text-center text-lg italic text-brand-ice/80">
        &ldquo;{testimonial}&rdquo;
      </span>
      <div className="text-center">
        <span className="block text-sm font-semibold text-brand-orange">
          {author}
        </span>
        {role && (
          <span className="block text-xs text-brand-ice/50 mt-1">{role}</span>
        )}
      </div>
    </motion.div>
  );
}
