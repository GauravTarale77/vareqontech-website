export type Testimonial = {
  name: string;
  role: string;
  review: string;
  rating: number; // out of 5
  projectUrl: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Founder, Bloom Boutique",
    review:
      "VareqonTech.ai completely transformed how customers find us online. The new site is fast, beautiful, and the AI chatbot handles half our customer questions automatically now.",
    rating: 5,
    projectUrl: "/coming-soon",
  },
  {
    name: "Rahul Verma",
    role: "CEO, Verma Logistics",
    review:
      "The WhatsApp automation alone saved our team hours every week. Communication with the VareqonTech.ai team was smooth from start to finish.",
    rating: 5,
    projectUrl: "/coming-soon",
  },
  {
    name: "Priya Nair",
    role: "Marketing Head, Nair Interiors",
    review:
      "We didn't just get a website, we got a whole system — booking form, automated emails, and a design that actually matches our brand. Highly recommend.",
    rating: 4,
    projectUrl: "/coming-soon",
  },
  {
    name: "Karan Mehta",
    role: "Founder, Mehta Fitness Studio",
    review:
      "Our online bookings doubled after launch. The AI calling agent handling appointment reminders was a feature we didn't even know we needed.",
    rating: 5,
    projectUrl: "/coming-soon",
  },
  {
    name: "Sneha Kulkarni",
    role: "Owner, Kulkarni Organic Store",
    review:
      "Professional, fast, and genuinely creative. The e-commerce site they built handles our entire order flow without a hitch.",
    rating: 5,
    projectUrl: "/coming-soon",
  },
];