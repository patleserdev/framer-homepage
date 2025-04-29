"use client";

import { motion } from "framer-motion";

export default function SplitText({ text }: { text: string }) {
  return (
    <div>
      {text.split("").map((letter, index) => {
        return (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          {letter}
        </motion.span>
        )
      })}
    </div>
  );
}
