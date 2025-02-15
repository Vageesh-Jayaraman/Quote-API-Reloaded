"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "../ui/hero-highlight";
import BorderMagicButton from "./Button";

export default function MainHeader() {
  return (
    <HeroHighlight className="relative pb-2">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4 text-7xl font-bold text-[#3CB371] max-w-4xl leading-relaxed text-center mx-auto"
      >
        Quote API
      </motion.h1>

      <div className="font-mono text-xl text-neutral-300 my-5 font-semibold max-w-6xl text-center">
        <p>Instantly grab quotes with our public, no-sign-in API—quick and easy!</p>
        <p>Real talk—motivation, fitness, relationships, affirmations and positivity, all in one place!</p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <BorderMagicButton />
      </div>
    </HeroHighlight>
  );
}
