"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export default function Marquee() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic number for the skew effect. You can also make it
   * responsive to scroll velocity.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 2 * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full bg-[#d30b1f] text-white py-4 overflow-hidden border-y-2 border-black">
      <motion.div className="whitespace-nowrap flex gap-8 text-xl font-mono font-bold uppercase tracking-widest" style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
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
