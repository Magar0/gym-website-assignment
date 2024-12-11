"use client";
import React, { useEffect, useState } from "react";
import TypingText from "./typing-text";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [img, setImg] = useState<number>(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImg((pre) => (pre === 1 ? 2 : 1));
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Image 1 */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000",
          "bg-custom-img",
          img === 1 ? "z-10 opacity-100" : "z-0 opacity-0",
        )}
      ></div>
      {/* Image 2 */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
          "bg-custom-img2",
          img === 2 ? "z-10 opacity-100" : "z-0 opacity-0",
        )}
      ></div>
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-black/30"></div>
      <TypingText />
    </>
  );
};

export default HeroSection;
