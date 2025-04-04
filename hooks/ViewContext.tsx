import React, { createContext, useContext, useEffect, useState } from "react";

const ViewContext = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1023);
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewContext = () => {
  return useContext(ViewContext);
};

