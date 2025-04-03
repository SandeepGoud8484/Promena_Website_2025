import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  format?: (value: number) => string;
  targetValue: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
}

export const Formatter = {
  number: (value: number) => Intl.NumberFormat("en-US").format(+value.toFixed(0)),
  currency: (value: number) =>
    Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(+value.toFixed(0)),
};

export default function Counter({
  format = Formatter.number,
  targetValue,
  direction = "up",
  delay = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run

  const isGoingUp = direction === "up";
  const motionValue = useMotionValue(isGoingUp ? 0 : targetValue);
  const springValue = useSpring(motionValue, {
    damping: 20, // Faster animation
    stiffness: 150,
  });

  const isInView = useInView(ref, { margin: "0px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        motionValue.set(isGoingUp ? targetValue : 0);
        setHasAnimated(true); // Mark animation as completed, so it doesn't animate again
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay, isGoingUp, targetValue, motionValue, hasAnimated]);

  useEffect(() => {
    springValue.on("change", (value) => {
      if (ref.current) {
        ref.current.textContent = format ? format(value) : String(value);
      }
    });
  }, [springValue, format]);

  return <span ref={ref} className={cn("font-bold", className)} />;
}
