import { FooterMinimal } from "@/components/layout/FooterMinimal";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for the VareqonTech.ai website.",
};

export default function TermsPage() {
  return (
    <>
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Terms &amp; Conditions</h1>
      <p className="text-sm opacity-55 mb-10">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="flex flex-col gap-8 opacity-85 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">1. Acceptance of Terms</h2>
          <p>
            By accessing and using vareqontech.ai, you agree to these Terms &amp; Conditions. If
            you do not agree, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">2. Services</h2>
          <p>
            The pricing, features, and packages listed on this website are indicative starting
            estimates. Final scope, pricing, and timelines for any project are agreed upon
            separately in writing between VareqonTech.ai and the client before work begins.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, design, logos, and graphics, is the
            property of VareqonTech.ai unless otherwise noted, and may not be reproduced without
            permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">4. Limitation of Liability</h2>
          <p>
            VareqonTech.ai is not liable for any indirect or consequential loss arising from the
            use of this website or reliance on the information presented on it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">5. Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:contact@vareqontech.ai" className="text-[var(--color-accent-start)] underline">
              contact@vareqontech.ai
            </a>.
          </p>
        </section>
      </div>
    </main>
    <FooterMinimal />
    </>
  );
}