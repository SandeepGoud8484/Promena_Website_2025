"use client"; // <--- important for Next.js App Router hooks

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type PathToTitleMap = {
  [path: string]: string;
};

export const useSelectedNav = (
  key: string,
  defaultValue: string,
  pathToTitleMap: PathToTitleMap
) => {
  const pathname = usePathname();
  console.log("pth",pathname);
  const getTitleFromPath = (path: string) => pathToTitleMap[path] || defaultValue;

  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(key);
      return stored ? JSON.parse(stored) : getTitleFromPath(pathname);
    }
    return getTitleFromPath(pathname);
  });

  useEffect(() => {
    const title = getTitleFromPath(pathname);
    if (value !== title) {
      setValue(title);
      sessionStorage.setItem(key, JSON.stringify(title));
    }
  }, [pathname]);

  return [value, setValue] as const;
};
