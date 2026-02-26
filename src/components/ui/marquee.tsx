"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";

const ITEMS = [
  "Infrastructure",
  "Robotique",
  "Data Science",
  "Developpement Web",
  "Deep Learning",
  "Reseau",
] as const;

const SPEED_PX_PER_SECOND = 80;

export default function Marquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCopyRef = useRef<HTMLDivElement>(null);

  const [copies, setCopies] = useState(2);

  const copyWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const lastTimestampRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useLayoutEffect(() => {
    const updateSizing = () => {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      const copyWidth = firstCopyRef.current?.getBoundingClientRect().width ?? 0;

      if (!viewportWidth || !copyWidth) {
        return;
      }

      copyWidthRef.current = copyWidth;
      const requiredCopies = Math.max(2, Math.ceil(viewportWidth / copyWidth) + 1);
      setCopies((current) => (current === requiredCopies ? current : requiredCopies));
    };

    updateSizing();

    const observer = new ResizeObserver(updateSizing);
    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }
    if (firstCopyRef.current) {
      observer.observe(firstCopyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      reducedMotionRef.current = mediaQuery.matches;
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    let animationFrameId = 0;

    const tick = (timestamp: number) => {
      const track = trackRef.current;
      if (!track) {
        animationFrameId = requestAnimationFrame(tick);
        return;
      }

      const copyWidth = copyWidthRef.current;
      if (!copyWidth || reducedMotionRef.current) {
        track.style.transform = "translate3d(0, 0, 0)";
        lastTimestampRef.current = timestamp;
        animationFrameId = requestAnimationFrame(tick);
        return;
      }

      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaSeconds = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      offsetRef.current = (offsetRef.current + deltaSeconds * SPEED_PX_PER_SECOND) % copyWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const renderItems = () =>
    ITEMS.map((item, index) => (
      <Fragment key={`${item}-${index}`}>
        <span>{item}</span>
        <span aria-hidden="true">&bull;</span>
      </Fragment>
    ));

  return (
    <div
      ref={viewportRef}
      className="w-full overflow-hidden border-y-2 border-black bg-[#d30b1f] py-4 text-white"
    >
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap text-xl font-mono font-bold uppercase tracking-widest will-change-transform"
      >
        <div ref={firstCopyRef} className="flex shrink-0 items-center gap-8 pr-8">
          {renderItems()}
        </div>
        {Array.from({ length: Math.max(0, copies - 1) }).map((_, index) => (
          <div key={index} aria-hidden="true" className="flex shrink-0 items-center gap-8 pr-8">
            {renderItems()}
          </div>
        ))}
      </div>
    </div>
  );
}
