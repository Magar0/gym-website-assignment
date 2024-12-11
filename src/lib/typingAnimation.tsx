"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "./utils";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 70,
  onComplete,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const currentIndexRef = useRef(0);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null); // Fixed typing error here
  const onCompleteCalledRef = useRef(false);

  useEffect(() => {
    const typeCharacter = () => {
      if (currentIndexRef.current < text.length) {
        const currentChar = text[currentIndexRef.current];
        setDisplayedText((prev) => prev + currentChar);
        currentIndexRef.current++;
      } else {
        if (onComplete && !onCompleteCalledRef.current) {
          onComplete();
          onCompleteCalledRef.current = true;
        }
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }
      }
    };

    typingIntervalRef.current = setInterval(typeCharacter, speed);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      onCompleteCalledRef.current = false;
    };
  }, [text, speed, onComplete]);

  return (
    <p className={cn("pl-2 text-base text-slate-800", className)}>
      {displayedText}
    </p>
  );
};

export default TypingAnimation;
