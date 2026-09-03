"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { serviceCategories } from "@/data/services";
import { SplineScene } from "@/components/ui/SplineScene";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (inView) setHasLoaded(true);
  }, [inView]);

  return (
    <section id="services" className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
          What We <span className="text-[var(--color-accent-start)]">Build</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: 3D gaze object */}
          <div ref={ref} className="h-[350px] md:h-[500px]">
            {hasLoaded && (
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                active={inView && !isTransitioning}
              />
            )}
          </div>

          {/* Right: category list */}
          <div className="flex flex-col gap-4">
            {serviceCategories.map((category, index) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ||
                Icons.Circle;
              const isActive = index === activeIndex;

              return (
                <div key={category.slug}>
                  <button
                    onClick={() => {
                      setIsTransitioning(true);
                      setActiveIndex(activeIndex === index ? -1 : index);
                      setTimeout(() => setIsTransitioning(false), 350);
                    }}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition text-left ${
                      isActive
                        ? "border-[var(--color-accent-start)] bg-[var(--color-muted)]"
                        : "border-[var(--color-border)] hover:bg-[var(--color-muted)]"
                    }`}
                  >
                    <Icon size={22} className="text-[var(--color-accent-start)]" />
                    <span className="font-semibold text-lg">{category.name}</span>
                  </button>
                    <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-2 gap-3 pt-3 pb-1 pl-2">
                        {category.subservices.map((sub) => (
                          <a
                            key={sub.slug}
                            href={`/services/${category.slug}/${sub.slug}`}
                            className="px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm font-medium hover:border-[var(--color-accent-start)] hover:text-[var(--color-accent-start)] transition"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}