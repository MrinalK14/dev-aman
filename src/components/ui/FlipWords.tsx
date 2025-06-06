"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  // Find the longest word to maintain consistent width
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, "");

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <div className="relative" style={{ minWidth: `${longestWord.length * 0.6}em`, textAlign: 'left' }}>
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -20,
            filter: "blur(4px)",
            position: "absolute",
          }}
          className={cn(
            "z-10 inline-block relative text-left",
            className
          )}
          key={currentWord}
          style={{ textAlign: 'left', display: 'block' }}
        >
          {currentWord}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}; 