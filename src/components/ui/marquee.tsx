"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function Marquee() {
  const { scrollY } = useScroll();
  // Adjust the multiplier to control speed and direction
  const x = useTransform(scrollY, (v) => -v * 0.5);

  return (
    <div className="w-full bg-[#d30b1f] text-white py-4 overflow-hidden border-y-2 border-black">
      <motion.div
        style={{ x }}
        className="whitespace-nowrap flex gap-8 text-xl font-mono font-bold uppercase tracking-widest"
      >
        {/* Repeat content enough times to cover screen width + scroll distance */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex gap-8 shrink-0">
            <span>Infrastructure</span>
            <span>•</span>
            <span>Robotique</span>
            <span>•</span>
            <span>Data Science</span>
            <span>•</span>
            <span>Développement Web</span>
            <span>•</span>
            <span>Deep Learning</span>
            <span>•</span>
            <span>Réseau</span>
            <span>•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
