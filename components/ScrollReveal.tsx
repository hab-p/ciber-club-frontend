"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  startFrom: "left" | "right";
  className?: string;
}

export default function ScrollReveal({
  children,
  startFrom,
  className = "",
}: ScrollRevealProps) {
  const initialX = startFrom === "right" ? 100 : -100;

  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
