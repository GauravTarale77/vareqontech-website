"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919225313745"; 
const DEFAULT_MESSAGE = "Hi! I'm interested in your services at VareqonTech.ai";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/20"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />

      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 relative z-10"
        fill="white"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.606 1.912 6.47L4 29l7.72-1.884A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3zm0 21.7a9.66 9.66 0 0 1-4.933-1.35l-.353-.21-3.65.891.973-3.56-.23-.366A9.65 9.65 0 1 1 25.65 15c0 5.325-4.324 9.7-9.649 9.7zm5.31-7.23c-.29-.145-1.717-.848-1.984-.944-.266-.097-.46-.145-.653.145-.194.29-.75.944-.92 1.138-.169.194-.338.218-.628.073-.29-.145-1.223-.451-2.33-1.437-.861-.768-1.443-1.716-1.612-2.006-.169-.29-.018-.446.127-.59.13-.13.29-.338.435-.507.145-.169.193-.29.29-.483.097-.194.048-.363-.024-.508-.073-.145-.653-1.574-.895-2.156-.235-.564-.474-.487-.653-.496a12.6 12.6 0 0 0-.556-.011.99.99 0 0 0-.75.362c-.266.29-1.017.994-1.017 2.423s1.041 2.81 1.187 3.004c.145.194 2.05 3.13 4.967 4.39.694.3 1.235.48 1.657.614.696.221 1.33.19 1.83.115.558-.083 1.717-.702 1.96-1.38.242-.677.242-1.258.169-1.38-.073-.121-.266-.194-.556-.339z" />
      </svg>
    </motion.a>
  );
}