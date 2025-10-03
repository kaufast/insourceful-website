export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InSourceful",
    "url": "https://insourceful.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://insourceful.ai/assets/images/resources/insourceful-consulting-white.webp"
    },
    "description": "Expert technology consulting services for enterprise businesses. We provide Oracle system integration, process optimization, and digital transformation solutions.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "InSourceful Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+17208788654",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/insourceful",
      "https://twitter.com/insourceful"
    ],
    "serviceType": [
      "Technology Consulting",
      "Oracle System Integration", 
      "Business Process Optimization",
      "Digital Transformation",
      "Enterprise Software Solutions"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}