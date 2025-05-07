"use client";
import { useEffect, useState, createContext, useContext } from "react";
import Lenis from "lenis";

interface SmoothScrollerContextType {
  lenisRef: Lenis | null;
}

const SmoothScrollerContext = createContext<SmoothScrollerContextType | null>(null);

export const useSmoothScroller = () => {
  const context = useContext(SmoothScrollerContext);
  if (!context) {
    throw new Error("useSmoothScroller must be used within a SmoothScrollerProvider");
  }
  return context;
};

export function SmoothScrollerProvider({ children }: { children: React.ReactNode }) {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const scroller = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 0.1,
    });

    setLenisRef(scroller);
    setIsReady(true); // mark as ready once initialized

    function raf(time: number) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      scroller.destroy();
    };
  }, []);

  // Prevent rendering children until Lenis is ready
  if (!isReady) return null;

  return (
    <SmoothScrollerContext.Provider value={{ lenisRef }}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
