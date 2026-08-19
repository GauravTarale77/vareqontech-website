export type ChatOption = {
  label: string;
  next: string;
  storeAs?: "type" | "budget";
};

export type ChatNode = {
  id: string;
  message: string;
  options?: ChatOption[];
  isFinal?: boolean;
};

export const chatFlow: Record<string, ChatNode> = {
  start: {
    id: "start",
    message: "Hi there! 👋 I'm the VareqonTech.ai assistant. How can I help you today?",
    options: [
      { label: "I want a website", next: "website-type" },
      { label: "I need an AI chatbot", next: "ai-type" },
      { label: "WhatsApp / Email Automation", next: "automation-type" },
      { label: "UI/UX Design", next: "uiux-type" },
      { label: "Pricing info", next: "pricing-info" },
      { label: "Want to talk with team", next: "talk-human" },
    ],
  },

  // Website flow
  "website-type": {
    id: "website-type",
    message: "Great choice! What type of website are you looking for?",
    options: [
      { label: "Portfolio", next: "budget", storeAs: "type" },
      { label: "Business", next: "budget", storeAs: "type" },
      { label: "E-commerce", next: "budget", storeAs: "type" },
      { label: "SaaS Platform", next: "budget", storeAs: "type" },
      { label: "Not sure yet", next: "budget", storeAs: "type" },
    ],
  },

  // AI flow
  "ai-type": {
    id: "ai-type",
    message: "Nice! What kind of AI service are you interested in?",
    options: [
      { label: "AI Chatbot", next: "budget", storeAs: "type" },
      { label: "AI Automation", next: "budget", storeAs: "type" },
      { label: "AI Calling Agent", next: "budget", storeAs: "type" },
      { label: "RAG Application", next: "budget", storeAs: "type" },
    ],
  },

  // Automation flow
  "automation-type": {
    id: "automation-type",
    message: "Got it! Which type of automation do you need?",
    options: [
      { label: "WhatsApp Automation", next: "budget", storeAs: "type" },
      { label: "Email Automation", next: "budget", storeAs: "type" },
      { label: "Workflow Automation", next: "budget", storeAs: "type" },
    ],
  },

  // UI/UX flow
  "uiux-type": {
    id: "uiux-type",
    message: "Nice! What kind of design work do you need?",
    options: [
      { label: "Website UI/UX", next: "budget", storeAs: "type" },
      { label: "App UI/UX", next: "budget", storeAs: "type" },
      { label: "Brand Identity", next: "budget", storeAs: "type" },
    ],
  },

  // Shared budget step
  budget: {
    id: "budget",
    message: "Understood. What's your approximate budget?",
    options: [
      { label: "Under $150", next: "final", storeAs: "budget" },
      { label: "$150 – $500", next: "final", storeAs: "budget" },
      { label: "$500 – $1500", next: "final", storeAs: "budget" },
      { label: "Not sure / need guidance", next: "final", storeAs: "budget" },
    ],
  },

  final: {
    id: "final",
    message:
      "Perfect, thanks for sharing that! Our team can put together the right plan for you. Want to continue over WhatsApp, or fill out our contact form?",
    isFinal: true,
  },

  "pricing-info": {
    id: "pricing-info",
    message:
      "Our pricing varies by service — website projects start around $50, AI services start around $150, and automation starts around $70. For an exact quote, it's best to chat with our team directly.",
    isFinal: true,
  },

  "talk-human": {
    id: "talk-human",
    message:
      "Of course! You can reach our team directly on WhatsApp, or fill out the contact form and we'll get back to you within 24 hours.",
    isFinal: true,
  },
};