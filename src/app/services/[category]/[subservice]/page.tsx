import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { serviceCategories } from "@/data/services";

export function generateStaticParams() {
  return serviceCategories.flatMap((cat) =>
    cat.subservices.map((sub) => ({
      category: cat.slug,
      subservice: sub.slug,
    }))
  );
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ category: string; subservice: string }>;
}) {
  const { category, subservice } = await params;

  const categoryData = serviceCategories.find((c) => c.slug === category);
  const subData = categoryData?.subservices.find((s) => s.slug === subservice);

  if (!categoryData || !subData) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/#services"
        className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent-start)] transition mb-10"
      >
        <ArrowLeft size={16} />
        Back to Services
      </Link>

      {/* Header */}
      <div className="mb-14">
        <p className="text-sm font-medium text-[var(--color-accent-start)] mb-2">
          {categoryData.name}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{subData.name}</h1>
        <p className="text-lg opacity-70 max-w-2xl">{subData.tagline}</p>
      </div>

      {/* Samples */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Sample Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {subData.samples.map((sample, i) => (
            <a
              key={i}
              href={sample.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent-start)] transition"
            >
              {/* Laptop-style mockup frame */}
              <div className="bg-[var(--color-muted)] p-3">
                <div className="rounded-t-md bg-[var(--color-border)] px-3 py-1.5 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="aspect-video bg-[var(--color-background)] flex items-center justify-center">
                  <ExternalLink
                    size={28}
                    className="opacity-30 group-hover:opacity-70 group-hover:text-[var(--color-accent-start)] transition"
                  />
                </div>
              </div>
              <div className="p-4">
                <p className="font-semibold mb-1 flex items-center gap-1.5">
                  {sample.title}
                  <ExternalLink size={14} className="opacity-50" />
                </p>
                <p className="text-sm opacity-60">{sample.description}</p>
              </div>
            </a>
          ))}

          {/* Empty state slots to keep 3-column layout consistent */}
          {Array.from({ length: Math.max(0, 3 - subData.samples.length) }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="rounded-xl border border-dashed border-[var(--color-border)] flex items-center justify-center aspect-[4/3] opacity-40 text-sm"
            >
              More coming soon
            </div>
          ))}
        </div>

        <button className="mt-6 text-sm font-medium text-[var(--color-accent-start)] hover:underline">
          See more projects →
        </button>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Pricing */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pricing</h2>

          {subData.pricingTiers ? (
            <div className="flex flex-col gap-3">
              {subData.pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-center justify-between p-4 rounded-xl border border-[var(--color-border)]"
                >
                  <span className="font-medium">{tier.name}</span>
                  <span className="font-bold text-[var(--color-accent-start)]">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-muted)]">
              <p className="text-3xl font-extrabold text-[var(--color-accent-start)]">
                {subData.price}
              </p>
              <p className="text-sm opacity-60 mt-1">Final price depends on your requirements</p>
            </div>
          )}
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold mb-6">What's Included</h2>
          <ul className="flex flex-col gap-3">
            {subData.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={18} className="text-[var(--color-accent-start)] mt-0.5 shrink-0" />
                <span className="opacity-85">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:opacity-90 transition"
        >
          Get in Touch About This Service
        </Link>
      </div>
    </main>
  );
}