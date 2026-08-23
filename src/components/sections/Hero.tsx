"use client";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

const Scene3D = dynamic(
  () => import("@/components/three/Scene3D").then((m) => m.Scene3D),
  { ssr: false }
);

export function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* 3D background */}
      <div ref={ref} className="absolute inset-0 -z-10">
        {inView && <Scene3D />}
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          We build <TypewriterText />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg md:text-xl opacity-70 max-w-2xl"
        >
          VareqonTech.ai helps businesses launch modern websites, AI chatbots,
          and automation systems that save time and drive real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:opacity-90 transition"
          >
            Start Your Project
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#services"
            className="px-7 py-3.5 rounded-full font-semibold border border-[var(--color-border)] hover:bg-[var(--color-muted)] transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}