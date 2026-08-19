"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import emailjs from "@emailjs/browser";
import { chatFlow, type ChatOption } from "@/data/chatbotFlow";

const WHATSAPP_NUMBER = "917720081364";

type Message = {
  sender: "bot" | "user";
  text: string;
};

type LeadStage = "none" | "name" | "interest" | "phone" | "done";

const interestOptions = ["Website", "AI Chatbot", "Automation / WhatsApp", "Not sure yet"];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const [isTyping, setIsTyping] = useState(false);
  const [answers, setAnswers] = useState<{ type?: string; budget?: string }>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const [leadStage, setLeadStage] = useState<LeadStage>("none");
  const [leadData, setLeadData] = useState<{ name?: string; interest?: string; phone?: string }>({});
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const currentNode = chatFlow[currentNodeId];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages([{ sender: "bot", text: chatFlow.start.message }]);
        setIsTyping(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, leadStage]);

  const botSay = (text: string, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setIsTyping(false);
    }, delay);
  };

  const startLeadCapture = () => {
    setLeadStage("name");
    botSay("Before I connect you with our team — what's your name?");
  };

  const handleOptionClick = (option: ChatOption) => {
    setMessages((prev) => [...prev, { sender: "user", text: option.label }]);

    const updatedAnswers = { ...answers };
    if (option.storeAs) {
      updatedAnswers[option.storeAs] = option.label;
      setAnswers(updatedAnswers);
    }

    setIsTyping(true);

    setTimeout(() => {
      const nextNode = chatFlow[option.next];

      if (nextNode.id === "final" && updatedAnswers.type) {
        const summary = `Got it — ${updatedAnswers.type}${
          updatedAnswers.budget ? `, budget: ${updatedAnswers.budget}` : ""
        }.`;
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: summary },
          { sender: "bot", text: nextNode.message },
        ]);
      } else {
        setMessages((prev) => [...prev, { sender: "bot", text: nextNode.message }]);
      }

      setCurrentNodeId(option.next);
      setIsTyping(false);

      if (nextNode.isFinal) {
        setTimeout(startLeadCapture, 900);
      }
    }, 700);
  };

  const submitName = () => {
    const value = nameInput.trim();
    if (!value) return;
    setMessages((prev) => [...prev, { sender: "user", text: value }]);
    setLeadData((prev) => ({ ...prev, name: value }));
    setNameInput("");
    setLeadStage("none");
    setTimeout(() => {
      setLeadStage("interest");
      botSay(`Nice to meet you, ${value}! What are you interested in?`);
    }, 200);
  };

  const selectInterest = (label: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: label }]);
    setLeadData((prev) => ({ ...prev, interest: label }));
    setLeadStage("none");
    setTimeout(() => {
      setLeadStage("phone");
      botSay("And what's the best mobile number to reach you on?");
    }, 200);
  };

  const submitPhone = () => {
    const value = phoneInput.trim();
    if (!value) return;
    setMessages((prev) => [...prev, { sender: "user", text: value }]);
    const finalLead = { ...leadData, phone: value };
    setLeadData(finalLead);
    setPhoneInput("");
    setLeadStage("none");

    setTimeout(() => {
      setLeadStage("done");
      botSay(`Thank you for your interest, ${finalLead.name}! 🎉 Our team will contact you within 24 hours.`);
      sendLeadNotification(finalLead);
    }, 200);
  };

  const sendLeadNotification = (lead: { name?: string; interest?: string; phone?: string }) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_LEAD_TEMPLATE_ID!,
        {
          name: lead.name || "",
          interest: lead.interest || "",
          phone: lead.phone || "",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .catch((err) => console.error("Lead email failed:", err));
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentNodeId("start");
    setAnswers({});
    setLeadStage("none");
    setLeadData({});
    setNameInput("");
    setPhoneInput("");
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'd like to talk about a project."
  )}`;

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center shadow-lg shadow-black/20 text-white cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-40 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] h-[480px] max-h-[70vh] rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-muted)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center text-white">
                  <Bot size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold">VareqonTech.ai Assistant</p>
                  <p className="text-xs opacity-55">Usually replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                <X size={18} className="opacity-60 hover:opacity-100 cursor-pointer" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "bot"
                      ? "bg-[var(--color-muted)] self-start rounded-tl-sm"
                      : "bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white self-end rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div className="bg-[var(--color-muted)] self-start rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce" />
                </div>
              )}

              {!isTyping && leadStage === "none" && currentNode?.options && (
                <div className="flex flex-col gap-2 mt-1">
                  {currentNode.options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleOptionClick(option)}
                      className="text-left px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm hover:border-[var(--color-accent-start)] hover:text-[var(--color-accent-start)] transition cursor-pointer"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {!isTyping && leadStage === "interest" && (
                <div className="flex flex-col gap-2 mt-1">
                  {interestOptions.map((label) => (
                    <button
                      key={label}
                      onClick={() => selectInterest(label)}
                      className="text-left px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm hover:border-[var(--color-accent-start)] hover:text-[var(--color-accent-start)] transition"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}

              {!isTyping && leadStage === "done" && (
                <div className="flex flex-col gap-2 mt-1">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white text-sm font-medium hover:opacity-90 transition"
                  >
                    Continue on WhatsApp
                  </a>
                  <a
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="text-center px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm font-medium hover:border-[var(--color-accent-start)] hover:text-[var(--color-accent-start)] transition"
                  >
                    Go to Contact Form
                  </a>
                  <button onClick={resetChat} className="text-xs opacity-50 hover:opacity-80 mt-1">
                    Start over
                  </button>
                </div>
              )}
            </div>

            {leadStage === "name" || leadStage === "phone" ? (
              <div className="px-3 py-2.5 border-t border-[var(--color-border)] flex items-center gap-2">
                <input
                  autoFocus
                  type={leadStage === "phone" ? "tel" : "text"}
                  value={leadStage === "name" ? nameInput : phoneInput}
                  onChange={(e) =>
                    leadStage === "name" ? setNameInput(e.target.value) : setPhoneInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      leadStage === "name" ? submitName() : submitPhone();
                    }
                  }}
                  placeholder={leadStage === "name" ? "Type your name..." : "Type your mobile number..."}
                  className="flex-1 px-3 py-2 rounded-lg bg-[var(--color-muted)] border border-[var(--color-border)] text-sm outline-none focus:border-[var(--color-accent-start)] transition"
                />
                <button
                  onClick={leadStage === "name" ? submitName : submitPhone}
                  aria-label="Send"
                  className="w-9 h-9 shrink-0 rounded-lg bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center text-white cursor-pointer"
                >
                  <Send size={15} />
                </button>
              </div>
            ) : (
              <div className="px-4 py-2.5 border-t border-[var(--color-border)] flex items-center gap-2 opacity-40">
                <Send size={14} />
                <span className="text-xs">Choose an option above to continue</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}