// app/layout.js
import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL('https://www.mavlenlabs.com'),

  // Basic Meta Tags
  title: {
    default: "MavlenLabs - Expert Software Development & Digital Product Studio",
    template: "%s | MavlenLabs"
  },
  description:
    "Transform your ideas into powerful digital products. MavlenLabs delivers expert software development, product design, and engineering services for startups and enterprises. Build scalable web and mobile applications with our experienced team.",

  keywords: [
    "software development company",
    "digital product studio",
    "web development services",
    "mobile app development",
    "product design agency",
    "custom software solutions",
    "React development",
    "Next.js experts",
    "SaaS development",
    "MVP development",
    "full-stack development",
    "UI/UX design services"
  ],

  authors: [{ name: "MavlenLabs" }],
  creator: "MavlenLabs",
  publisher: "MavlenLabs",

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mavlenlabs.com',
    siteName: 'MavlenLabs',
    title: 'MavlenLabs - Expert Software Development & Digital Product Studio',
    description: 'Transform your ideas into powerful digital products. Expert software development, product design, and engineering services for startups and enterprises.',
    images: [
      {
        url: '/mavlen-logo.png',
        width: 1200,
        height: 630,
        alt: 'MavlenLabs - Software Development Company',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MavlenLabs - Expert Software Development & Digital Product Studio',
    description: 'Transform your ideas into powerful digital products. Expert software development, product design, and engineering services.',
    images: ['/mavlen-logo.png'],
    creator: '@mavlenlabs',
  },

  // Icons
  icons: {
    icon: '/mavlen-logo.png',
    apple: '/mavlen-logo.png',
  },

  // Verification (add your verification codes when available)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Additional
  category: 'Technology',
  alternates: {
    canonical: 'https://www.mavlenlabs.com',
  },
};

export default function RootLayout({ children }) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MavlenLabs",
    "url": "https://www.mavlenlabs.com",
    "logo": "https://www.mavlenlabs.com/mavlen-logo.png",
    "description": "Expert software development and digital product studio helping startups and enterprises build scalable web and mobile applications.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@mavlenlabs.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      // Add your social media profiles here
      // "https://www.linkedin.com/company/mavlenlabs",
      // "https://twitter.com/mavlenlabs",
      // "https://github.com/mavlenlabs"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="site-wrapper">
          <NavBar />
          <main className="site-main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
