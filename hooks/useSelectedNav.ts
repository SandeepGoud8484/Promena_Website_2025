import { useState, useEffect } from "react";

export const useSelectedNav = (key: string, initialValue: string) => {
  const [value, setValue] = useState<string>(() => {
    // Check if sessionStorage is available
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    }
    return initialValue; // Fallback for SSR
  });

  useEffect(() => {
    // Ensure sessionStorage is only accessed in the browser
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
};
