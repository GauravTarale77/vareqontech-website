export type Sample = {
  title: string;
  description: string;
  url: string;
};

export type PricingTier = {
  name: string;
  price: string;
};

export type SubService = {
  slug: string;
  name: string;
  tagline: string;
  price?: string;           // used for a single price range
  pricingTiers?: PricingTier[]; // used when there are multiple types/packages
  features: string[];
  samples: Sample[];
};

export type ServiceCategory = {
  slug: string;
  name: string;
  icon: string;
  subservices: SubService[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "web-development",
    name: "Web Development",
    icon: "Globe",
    subservices: [
      {
        slug: "portfolio-website",
        name: "Portfolio Website",
        tagline: "A personal or professional showcase site that highlights your work.",
        price: "$70 – $150",
        features: [
          "Responsive design (mobile, tablet, desktop)",
          "Up to 5 pages",
          "Contact form integration",
          "1 year free hosting support",
          "Basic SEO setup",
        ],
        samples: [
          { title: "Sample Portfolio 1", description: "Minimal personal portfolio layout.", url: "/coming-soon" },
          { title: "Sample Portfolio 2", description: "Creative-focused portfolio design.", url: "/coming-soon" },
        ],
      },
      {
        slug: "business-website",
        name: "Business Website",
        tagline: "A professional site to represent your company online.",
        price: "$150 – $400",
        features: [
          "Up to 8 pages",
          "Custom design matching your brand",
          "Google Maps + contact integration",
          "1 year free service & support",
          "Basic SEO setup",
        ],
        samples: [
          { title: "Sample Business Site", description: "Corporate multi-page business website.", url: "/coming-soon" },
        ],
      },
      {
        slug: "ecommerce-website",
        name: "E-commerce Website",
        tagline: "A full online store to sell your products — choose the package that fits your business.",
        pricingTiers: [
          { name: "Basic E-commerce Website", price: "$180 – $360" },
          { name: "Small Business E-commerce Store", price: "$300 – $600" },
          { name: "Custom E-commerce Website", price: "$600 – $1,800" },
          { name: "Multi-Vendor Marketplace", price: "$1,200 – $3,600" },
        ],
        features: [
          "Product catalog + cart + checkout",
          "Payment gateway integration",
          "Admin dashboard to manage orders",
          "1 year free service & support",
          "Mobile-optimized shopping experience",
        ],
        samples: [
          { title: "Sample Store", description: "Full-featured product store demo.", url: "/coming-soon" },
        ],
      },
      {
        slug: "saas-platform",
        name: "SaaS Platform",
        tagline: "A complete web application with user accounts and features.",
        price: "$500 – $1,500",
        features: [
          "User authentication & dashboard",
          "Database-backed features",
          "Subscription/payment support (optional)",
          "Scalable full-stack architecture",
          "Ongoing support available",
        ],
        samples: [
          { title: "Sample SaaS Dashboard", description: "Example of a SaaS product dashboard.", url: "/coming-soon" },
        ],
      },
      {
        slug: "landing-page",
        name: "3D Website",
        tagline: "$500 – $2,000",
        price: "$500 – $2,000",
        features: [
          "Custom 3D models and animations",
          "Interactive 3D elements on your site",
          "Optimized for performance and speed",
          "Works on desktop and mobile browsers",
          "1 year free service & support",
        ],
        samples: [
          { title: "Sample Landing Page", description: "High-conversion landing page layout.", url: "/coming-soon" },
        ],
      },
    ],
  },
  {
    slug: "ai-services",
    name: "AI Services",
    icon: "Bot",
    subservices: [
      {
        slug: "ai-chatbot",
        name: "AI Chatbot",
        tagline: "A smart chatbot trained to answer visitor questions on your site.",
        price: "$180 – $600",
        features: [
          "Trained on your business info",
          "Website widget integration",
          "Conversation history/logs",
          "1 year free support",
        ],
        samples: [
          { title: "Sample Chatbot Demo", description: "Example chatbot integration.", url: "/coming-soon" },
        ],
      },
      {
        slug: "customer-support-bot",
        name: "Customer Support Bot",
        tagline: "Automated support to handle common customer queries 24/7.",
        price: "$150 – $500",
        features: [
          "FAQ + ticket handling logic",
          "Escalation to human support",
          "Multi-platform support (site/WhatsApp)",
        ],
        samples: [
          { title: "Sample Support Bot", description: "Example customer support automation.", url: "/coming-soon" },
        ],
      },
      {
        slug: "ai-automation",
        name: "AI Automation",
        tagline: "AI-powered workflows that handle repetitive tasks for you.",
        price: "$180 – $600",
        features: [
          "Custom workflow design",
          "Integration with your existing tools",
          "Reduces manual work significantly",
        ],
        samples: [
          { title: "Sample Automation Flow", description: "Example of an automated workflow.", url: "/coming-soon" },
        ],
      },
      {
        slug: "ai-calling-agent",
        name: "AI Calling Agent",
        tagline: "An AI voice agent that handles calls automatically.",
        price: "$250 – $700",
        features: [
          "Natural voice conversation",
          "Call scheduling & follow-ups",
          "Custom call scripts",
        ],
        samples: [
          { title: "Sample Voice Agent", description: "Example AI calling agent setup.", url: "/coming-soon" },
        ],
      },
      {
        slug: "rag-application",
        name: "RAG Application",
        tagline: "AI that answers questions using your own documents/data.",
        price: "$240 – $900",
        features: [
          "Custom knowledge base integration",
          "Accurate, source-grounded answers",
          "Ideal for internal tools or support",
        ],
        samples: [
          { title: "Sample RAG App", description: "Example of a document-based AI assistant.", url: "/coming-soon" },
        ],
      },
    ],
  },
  {
    slug: "automation",
    name: "Automation",
    icon: "Workflow",
    subservices: [
      {
        slug: "whatsapp-automation",
        name: "WhatsApp Automation",
        tagline: "Automated WhatsApp messaging for leads and customer support.",
        price: "$80 – $250",
        features: [
          "Auto-replies and broadcast messages",
          "Lead capture integration",
          "Order/booking confirmations",
        ],
        samples: [
          { title: "Sample WhatsApp Flow", description: "Example automated WhatsApp flow.", url: "/coming-soon" },
        ],
      },
      {
        slug: "email-automation",
        name: "Email Automation",
        tagline: "Automated email sequences for marketing and follow-ups.",
        price: "$70 – $200",
        features: [
          "Welcome & follow-up sequences",
          "Newsletter automation",
          "Integration with your website forms",
        ],
        samples: [
          { title: "Sample Email Flow", description: "Example automated email sequence.", url: "/coming-soon" },
        ],
      },
      {
        slug: "workflow-automation",
        name: "Workflow Automation",
        tagline: "Connect your business tools to automate daily tasks.",
        price: "$100 – $300",
        features: [
          "Custom tool-to-tool automation",
          "Saves hours of manual work weekly",
          "Works with tools you already use",
        ],
        samples: [
          { title: "Sample Workflow", description: "Example business workflow automation.", url: "/coming-soon" },
        ],
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    icon: "PenTool",
    subservices: [
      {
        slug: "website-ui-ux",
        name: "Website UI/UX",
        tagline: "Clean, modern interface design for your website.",
        price: "$60 – $200",
        features: [
          "Full page wireframes + designs",
          "Mobile-responsive design system",
          "Delivered in Figma",
        ],
        samples: [
          { title: "Sample Web Design", description: "Example website UI design.", url: "/coming-soon" },
        ],
      },
      {
        slug: "app-ui-ux",
        name: "Mobile App UI/UX",
        tagline: "Intuitive app interface design for iOS/Android.",
        price: "$100 – $300",
        features: [
          "Full screen flow design",
          "Interactive prototype",
          "Delivered in Figma",
        ],
        samples: [
          { title: "Sample App Design", description: "Example mobile app UI design.", url: "/coming-soon" },
        ],
      },
      {
        slug: "brand-identity",
        name: "Brand Identity",
        tagline: "Logo, colors, and visual identity for your business.",
        price: "$50 – $150",
        features: [
          "Logo design (multiple concepts)",
          "Color palette & typography system",
          "Brand guideline document",
        ],
        samples: [
          { title: "Sample Brand Kit", description: "Example brand identity package.", url: "/coming-soon" },
        ],
      },
    ],
  },
  {
    slug: "social-media-optimization",
    name: "Social Media Optimization",
    icon: "TrendingUp",
    subservices: [
      {
        slug: "content-strategy",
        name: "Content Strategy",
        tagline: "A content plan to grow your social media presence.",
        price: "$60 – $150 /mo",
        features: [
          "Content calendar planning",
          "Platform-specific strategy",
          "Monthly performance review",
        ],
        samples: [
          { title: "Sample Strategy Deck", description: "Example content strategy plan.", url: "/coming-soon" },
        ],
      },
      {
        slug: "smo-audit",
        name: "SMO Audit & Growth",
        tagline: "A full audit of your profiles with a growth action plan.",
        price: "$50 – $120",
        features: [
          "Full profile audit report",
          "Competitor analysis",
          "Actionable growth recommendations",
        ],
        samples: [
          { title: "Sample Audit Report", description: "Example SMO audit report.", url: "/coming-soon" },
        ],
      },
      {
        slug: "ads-management",
        name: "Ads Management",
        tagline: "Paid social campaigns managed end-to-end.",
        price: "$70 – $200 /mo",
        features: [
          "Campaign setup & targeting",
          "Creative + copy for ads",
          "Monthly performance reporting",
        ],
        samples: [
          { title: "Sample Ad Campaign", description: "Example ad campaign results.", url: "/coming-soon" },
        ],
      },
    ],
  },
];