// context/MotionContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const MotionContext = createContext({ isMobile: false });

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <MotionContext.Provider value={{ isMobile }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotionContext = () => useContext(MotionContext);
