"use client";
import TypingAnimation from "@/lib/typingAnimation";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const TypingText = () => {
  const [typing, setTyping] = useState<null | string>(null);

  useEffect(() => {
    setTyping("start");
  }, []);
  return (
    <div className="relative z-30 w-[600px] text-center">
      {typing && (
        <TypingAnimation
          className="text-5xl font-bold text-white"
          text="Track Your Fitness Journey"
          onComplete={() => setTyping("end")}
        />
      )}
      <p
        className={cn(
          "mt-5 text-xl font-medium italic text-white opacity-0 transition-opacity delay-500 duration-700",
          {
            "opacity-100": typing === "end",
          },
        )}
      >
        Discover the ultimate fitness companion with GymFluencer. Effortlessly
        log your workouts, count reps, and track calories burned. Stay motivated
        and achieve your goals with our user-friendly interface.
      </p>
    </div>
  );
};

export default TypingText;
