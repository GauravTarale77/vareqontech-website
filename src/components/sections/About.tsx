"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, ShieldCheck, Clock, Wrench, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Modern Tech, Built Right",
    description:
      "We build on the same stack top tech companies use — fast, scalable, and easy to maintain long-term.",
  },
  {
    icon: Sparkles,
    title: "AI Built In, Not Bolted On",
    description:
      "Chatbots and automation aren't an afterthought for us — they're part of how we design every project from day one.",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    description:
      "Design, development, AI, and automation — all under one roof, so you're not juggling five different freelancers.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    description:
      "Clear pricing ranges upfront, no hidden costs. You'll always know what you're paying for and why.",
  },
  {
    icon: Clock,
    title: "Real Communication",
    description:
      "You'll always know where your project stands — no disappearing after payment, no radio silence.",
  },
  {
    icon: Rocket,
    title: "Built to Grow With You",
    description:
      "We design systems that scale — so when your business grows, your website and tools grow with it.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Who we are */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold text-[var(--color-accent-start)] mb-3 tracking-wide uppercase">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
              We&apos;re a small team obsessed with building things that
              actually work.
            </h2>
            <p className="opacity-70 leading-relaxed mb-4">
              VareqonTech.ai started with a simple frustration: too many
              businesses were stuck choosing between a cheap, forgettable
              website and an overpriced agency that took months to deliver
              anything. We wanted to build the option in between — modern,
              professional web experiences powered by AI and automation,
              delivered by people who actually reply to your messages.
            </p>
            <p className="opacity-70 leading-relaxed">
              Today, we help businesses launch websites, AI chatbots, and
              automation systems that don&apos;t just look good — they save
              time, capture leads, and grow revenue. Every project is built
              from scratch around what your business actually needs, not a
              recycled template.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted)] p-10 flex flex-col gap-6"
          >
            <div>
              <p className="text-4xl font-extrabold text-[var(--color-accent-start)]">5+</p>
              <p className="text-sm opacity-60 mt-1">Core Services Offered</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[var(--color-accent-start)]">100%</p>
              <p className="text-sm opacity-60 mt-1">Custom-Built, No Templates</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[var(--color-accent-start)]">24/7</p>
              <p className="text-sm opacity-60 mt-1">AI-Powered Support Available</p>
            </div>
          </motion.div>
        </div>

        {/* Why choose us */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[var(--color-accent-start)] mb-3 tracking-wide uppercase">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Built different, on purpose.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-start)] transition"
            >
              <reason.icon size={26} className="text-[var(--color-accent-start)] mb-4" />
              <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-sm opacity-65 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}