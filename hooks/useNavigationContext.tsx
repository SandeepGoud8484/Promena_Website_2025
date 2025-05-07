"use client"
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useNavigationContext = () => {
  const pathname = usePathname(); // e.g., /services/ai-model

  const { primary, secondary } = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean); // removes empty strings
    const [first, second] = segments;

    return {
      primary: first, // 'services'
      secondary: second?.split("-")[0], // 'ai' from 'ai-model'
    };
  }, [pathname]);

  const isDropdownActive = ["services", "ai-solutions", "augment-your-team"].includes(primary);
  const shouldIgnore = ["home", "about"].includes(primary);

  return {
    pathname,
    primary,
    secondary,
    isDropdownActive: isDropdownActive && !shouldIgnore,
  };
};

export default useNavigationContext;
