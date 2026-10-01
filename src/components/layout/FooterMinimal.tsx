import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function FooterMinimal() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/#home">
          <Logo />
        </Link>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
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