import Link from "next/link";
import { Construction, ArrowLeft } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <Construction size={48} className="text-[var(--color-accent-start)] mb-6" />
      <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Project Coming Soon</h1>
      <p className="opacity-65 max-w-md mb-8">
        We&apos;re still putting this sample together. Check back soon, or reach
        out and we&apos;ll show you similar work directly.
      </p>
      <Link
        href="/#contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:opacity-90 transition"
      >
        <ArrowLeft size={16} />
        Back to VareqonTech.ai
      </Link>
    </main>
  );
}