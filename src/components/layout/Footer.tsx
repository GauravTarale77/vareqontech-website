import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Logo } from "@/components/ui/Logo";
import { founders } from "@/data/founders";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/vareqon_tech.ai/", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/146641678", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/VareqonTech", label: "Twitter" },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61594321725462", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand + socials */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="text-sm opacity-60 max-w-xs">
              Websites, AI chatbots, and automation systems built to help
              your business grow.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent-start)] hover:text-[var(--color-accent-start)] transition"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold mb-1">Quick Links</p>
            <a href="/#home" className="text-sm opacity-65 hover:opacity-100 hover:text-[var(--color-accent-start)] transition w-fit">Home</a>
            <a href="/#services" className="text-sm opacity-65 hover:opacity-100 hover:text-[var(--color-accent-start)] transition w-fit">Services</a>
            <a href="/#about" className="text-sm opacity-65 hover:opacity-100 hover:text-[var(--color-accent-start)] transition w-fit">About</a>
            <a href="/#contact" className="text-sm opacity-65 hover:opacity-100 hover:text-[var(--color-accent-start)] transition w-fit">Contact</a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold mb-1">Contact</p>
            <div className="flex items-center gap-2 text-sm opacity-65">
              <Mail size={15} className="text-[var(--color-accent-start)]" />
              contact@vareqontech.ai
            </div>
            <div className="flex items-center gap-2 text-sm opacity-65">
              <Phone size={15} className="text-[var(--color-accent-start)]" />
              +91 73787 95626
            </div>
            <div className="flex items-center gap-2 text-sm opacity-65">
              <Phone size={15} className="text-[var(--color-accent-start)]" />
              +91 77200 81364
            </div>
            <div className="flex items-center gap-2 text-sm opacity-65">
              <MapPin size={15} className="text-[var(--color-accent-start)]" />
              Nagpur, Maharashtra, India — Working with clients worldwide
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="border-t border-[var(--color-border)] pt-7 mb-10">
          <p className="text-center text-sm font-semibold opacity-70 mb-6 tracking-wide uppercase">
            Meet the Founders
          </p>
          <div className="flex justify-center gap-6">
            {founders.map((founder) => (
              <Link
                key={founder.name}
                href={founder.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
              >
                <span className="absolute -top-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 text-xs font-medium bg-[var(--color-muted)] border border-[var(--color-border)] px-3 py-1 rounded-full whitespace-nowrap pointer-events-none">
                  {founder.name}
                </span>
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-border)] group-hover:border-[var(--color-accent-start)] group-hover:scale-110 transition-transform duration-200">
                  <Image
                    src={founder.photoUrl}
                    alt={founder.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <p className="text-sm opacity-55">
            © {new Date().getFullYear()} VareqonTech.ai. All rights reserved.
          </p>
          <span className="hidden sm:inline opacity-30">|</span>
          <Link href="/privacy-policy" className="text-sm opacity-55 hover:opacity-100 hover:text-[var(--color-accent-start)] transition">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline opacity-30">|</span>
          <Link href="/terms" className="text-sm opacity-55 hover:opacity-100 hover:text-[var(--color-accent-start)] transition">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}