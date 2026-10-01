import { FooterMinimal } from "@/components/layout/FooterMinimal";

export const metadata = {
  title: "Privacy Policy",
  description: "How VareqonTech.ai collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Privacy Policy</h1>
      <p className="text-sm opacity-55 mb-10">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="flex flex-col gap-8 opacity-85 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">1. Who We Are</h2>
          <p>
            VareqonTech.ai (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides website
            development, AI chatbot, automation, and design services. This policy explains how we
            collect, use, and protect information when you visit our website or contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">2. Information We Collect</h2>
          <p>When you use our contact form, chatbot, or WhatsApp button, we may collect:</p>
          <ul className="list-disc pl-6 mt-2 flex flex-col gap-1">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>The project details or messages you share with us</li>
          </ul>
          <p className="mt-2">
            We do not collect this information unless you voluntarily submit it through one of
            our forms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">3. How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul className="list-disc pl-6 mt-2 flex flex-col gap-1">
            <li>Respond to your inquiry or project request</li>
            <li>Contact you about the services you&apos;ve shown interest in</li>
            <li>Improve our services based on the type of requests we receive</li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, or trade your personal information to third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">4. Third-Party Services</h2>
          <p>
            We use EmailJS, a third-party service, to deliver messages submitted through our
            contact form and chatbot directly to our email inbox. Your submitted information
            passes through their systems solely to deliver that message. We encourage you to
            review EmailJS&apos;s own privacy policy for details on how they handle data in
            transit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">5. Local Storage</h2>
          <p>
            Our website uses your browser&apos;s local storage (not cookies) to temporarily
            prevent repeated form submissions in a short time window. This data stays on your
            device, is not transmitted to us, and does not identify you personally.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">6. Data Retention</h2>
          <p>
            We retain the information you submit for as long as necessary to respond to your
            inquiry and maintain business records, unless you request deletion sooner.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information
            at any time by emailing us at{" "}
            <a href="mailto:contact@vareqontech.ai" className="text-[var(--color-accent-start)] underline">
              contact@vareqontech.ai
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page with
            an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-accent-start)]">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
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