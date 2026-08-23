"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <a
      href={testimonial.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 w-80 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted)] hover:border-[var(--color-accent-start)] transition flex flex-col gap-4"
    >
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < testimonial.rating
                ? "fill-[var(--color-accent-start)] text-[var(--color-accent-start)]"
                : "text-[var(--color-border)]"
            }
          />
        ))}
      </div>
      <p className="text-sm opacity-80 leading-relaxed">
        &ldquo;{testimonial.review}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-sm">{testimonial.name}</p>
        <p className="text-xs opacity-55">{testimonial.role}</p>
      </div>
    </a>
  );
}

export function Projects() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="projects" className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <p className="text-sm font-semibold text-[var(--color-accent-start)] mb-3 tracking-wide uppercase">
          Client Love
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          What our clients say.
        </h2>
        <p className="opacity-60 mt-3 max-w-xl mx-auto">
          Click any review to see the live project we built for them.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="marquee-track flex gap-6 w-max">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}