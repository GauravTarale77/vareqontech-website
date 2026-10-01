export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VareqonTech.ai",
    alternateName: ["Vareqon", "Vareqon Tech", "Vareqon Technologies", "VareqonTech"],
    url: "https://vareqontech.ai",
    logo: "https://vareqontech.ai/logo-full.png",
    email: "contact@vareqontech.ai",
    description:
      "Websites, AI chatbots, automation, and UI/UX design services.",
    sameAs: [
      "https://www.instagram.com/vareqon_tech.ai/",
      "https://www.facebook.com/profile.php?id=61594321725462",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}