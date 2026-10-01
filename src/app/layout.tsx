import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Chatbot } from "@/components/layout/Chatbot";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vareqontech.ai"),
  title: {
    default: "VareqonTech.ai",
    template: "%s | VareqonTech.ai",
  },
  description:
    "VareqonTech.ai builds websites, AI chatbots, WhatsApp & email automation, and UI/UX design for growing businesses.",
  applicationName: "VareqonTech.ai",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VareqonTech.ai — Websites, AI Chatbots & Automation",
    description:
      "Websites, AI chatbots, and automation systems built to help your business grow.",
    url: "https://vareqontech.ai",
    siteName: "VareqonTech.ai",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <OrganizationSchema />
          <Navbar />
          <div className="pt-18">{children}</div>
          <WhatsAppButton/>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}