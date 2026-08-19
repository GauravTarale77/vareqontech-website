"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[var(--color-accent-start)] mb-3 tracking-wide uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let&apos;s build something great.
          </h2>
          <p className="opacity-60 mt-3 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--color-muted)]">
                <Mail size={20} className="text-[var(--color-accent-start)]" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm opacity-65">contact@VareqonTech.ai</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--color-muted)]">
                <Phone size={20} className="text-[var(--color-accent-start)]" />
              </div>
              <div>
                <p className="font-semibold">Phone / WhatsApp</p>
                <p className="text-sm opacity-65">+91 7378795626</p>
                <p className="text-sm opacity-65">+91 7720081364</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--color-muted)]">
                <MapPin size={20} className="text-[var(--color-accent-start)]" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm opacity-65">Nagpur, Maharashtra, India — Working with clients worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="px-4 py-3 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] focus:border-[var(--color-accent-start)] outline-none transition"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="px-4 py-3 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] focus:border-[var(--color-accent-start)] outline-none transition"
              />
            </div>
            <input
              name="subject"
              placeholder="Subject (e.g. AI Chatbot for my store)"
              className="px-4 py-3 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] focus:border-[var(--color-accent-start)] outline-none transition"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="px-4 py-3 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] focus:border-[var(--color-accent-start)] outline-none transition resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}