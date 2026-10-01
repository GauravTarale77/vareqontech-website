"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { canSubmit, getRemainingSeconds, markSubmitted } from "@/lib/rateLimiter";
import { validateName, validateEmail, validateMessage } from "@/lib/validators";

type FieldErrors = { name?: string; email?: string; message?: string; consent?: string };

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] focus:border-[var(--color-accent-start)] outline-none transition";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-red-500 mt-1.5">{message}</p>;
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    const data = new FormData(form);

    // Honeypot — bots fill this hidden field, real users never do
    if (data.get("company_website")) return;

    const newErrors: FieldErrors = {};
    const nameError = validateName(String(data.get("name") || ""));
    const emailError = validateEmail(String(data.get("email") || ""));
    const messageError = validateMessage(String(data.get("message") || ""));
    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (messageError) newErrors.message = messageError;
    if (!data.get("consent")) newErrors.consent = "Please confirm you agree to our Privacy Policy.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setStatus("idle");
      return;
    }

    if (!canSubmit("contact_form")) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      markSubmitted("contact_form");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
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
                <p className="text-sm opacity-65">contact@vareqontech.ai</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--color-muted)]">
                <Phone size={20} className="text-[var(--color-accent-start)]" />
              </div>
              <div>
                <p className="font-semibold">Phone / WhatsApp</p>
                <p className="text-sm opacity-65">+91 73787 95626</p>
                <p className="text-sm opacity-65">+91 77200 81364</p>
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
              <div>
                <input name="name" required placeholder="Your Name" className={inputClass} />
                <FieldError message={errors.name} />
              </div>
              <div>
                <input name="email" type="email" required placeholder="Your Email" className={inputClass} />
                <FieldError message={errors.email} />
              </div>
            </div>

            <input
              name="subject"
              placeholder="Subject (e.g. AI Chatbot for my store)"
              className={inputClass}
            />

            <div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className={`${inputClass} resize-none`}
              />
              <FieldError message={errors.message} />
            </div>

            {/* Honeypot field — hidden from real users, catches bots */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] w-px h-px opacity-0"
              aria-hidden="true"
            />

            <label className="flex items-start gap-2.5 text-xs opacity-70">
              <input
                type="checkbox"
                name="consent"
                className="mt-0.5 accent-[var(--color-accent-start)]"
              />
              <span>
                I agree to the{" "}
                <a href="/privacy-policy" className="text-[var(--color-accent-start)] underline">
                  Privacy Policy
                </a>{" "}
                and consent to VareqonTech.ai contacting me about my inquiry.
              </span>
            </label>
            <FieldError message={errors.consent} />
            
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:opacity-90 transition disabled:opacity-60 cursor-pointer"
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
                {canSubmit("contact_form")
                  ? "Something went wrong. Please try again or email us directly."
                  : `Please wait ${getRemainingSeconds("contact_form")}s before sending another message.`}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}