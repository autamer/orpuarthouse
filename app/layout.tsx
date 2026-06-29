import type { Metadata } from "next";
import { Bodoni_Moda, Raleway } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://orpuarthouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Orpu Art House — Fashion Illustration Classes by Poojitha",
    template: "%s | Orpu Art House",
  },
  description:
    "Online fashion illustration classes by Poojitha (Orpu Art House). Learn croquis, garment rendering, and ethnic-wear illustration — beginner-friendly, starting from scratch.",
  keywords: [
    "fashion illustration classes",
    "online fashion illustration",
    "croquis classes",
    "garment rendering",
    "ethnic wear illustration",
    "fashion drawing for beginners",
    "Orpu Art House",
    "Poojitha fashion illustrator",
  ],
  authors: [{ name: "Poojitha", url: BASE_URL }],
  creator: "Poojitha",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Orpu Art House",
    title: "Orpu Art House — Fashion Illustration Classes by Poojitha",
    description:
      "Learn to bring fashion to life on paper. Online illustration classes — croquis, garment rendering, and ethnic-wear. Beginner-friendly.",
    images: [
      {
        url: "/media/render-red-cape-01.jpg",
        width: 1200,
        height: 630,
        alt: "Fashion illustration by Poojitha — red cape render",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orpu Art House — Fashion Illustration Classes",
    description:
      "Online fashion illustration classes by Poojitha. Croquis, garment rendering, ethnic-wear — beginner-friendly.",
    images: ["/media/render-red-cape-01.jpg"],
    creator: "@orpuarthouse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#poojitha`,
      name: "Poojitha",
      jobTitle: "Fashion Illustrator",
      description:
        "Fashion illustrator specialising in croquis, garment rendering, and ethnic-wear illustration. Teaches online under Orpu Art House.",
      url: BASE_URL,
      sameAs: ["https://instagram.com/orpuarthouse"],
      knowsAbout: [
        "Fashion illustration",
        "Croquis drawing",
        "Garment rendering",
        "Ethnic wear illustration",
        "Colored pencil technique",
        "Graphite sketching",
      ],
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#org`,
      name: "Orpu Art House",
      url: BASE_URL,
      founder: { "@id": `${BASE_URL}/#poojitha` },
      description:
        "Online fashion illustration school offering beginner-friendly classes in croquis, garment rendering, and ethnic-wear illustration.",
      sameAs: ["https://instagram.com/orpuarthouse"],
    },
    {
      "@type": "Course",
      "@id": `${BASE_URL}/#course-croquis`,
      name: "Croquis — Fashion Figure Drawing",
      description:
        "Learn to draw the fashion figure (croquis) from scratch. Covers proportions, poses, and movement. Beginner-friendly.",
      provider: { "@id": `${BASE_URL}/#org` },
      instructor: { "@id": `${BASE_URL}/#poojitha` },
      educationalLevel: "Beginner",
      teaches: "Fashion figure drawing, croquis proportions, pose studies",
      courseMode: "Online",
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/ComingSoon",
        url: "https://ig.me/m/orpuarthouse",
      },
    },
    {
      "@type": "Course",
      "@id": `${BASE_URL}/#course-rendering`,
      name: "Garment Rendering",
      description:
        "Learn to render fabric, texture, and garment details using graphite and colored pencil. From rough sketch to finished illustration.",
      provider: { "@id": `${BASE_URL}/#org` },
      instructor: { "@id": `${BASE_URL}/#poojitha` },
      educationalLevel: "Beginner",
      teaches: "Garment rendering, fabric texture, colored pencil technique",
      courseMode: "Online",
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/ComingSoon",
        url: "https://ig.me/m/orpuarthouse",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need to know how to draw before starting Orpu Art House classes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The classes are designed for beginners — you'll build from absolute basics. If you can hold a pencil, you can start.",
          },
        },
        {
          "@type": "Question",
          name: "What materials do I need for fashion illustration classes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Graphite pencils and colored pencils are all you need to start. A specific materials list will be shared when classes open.",
          },
        },
        {
          "@type": "Question",
          name: "Are Orpu Art House classes live or recorded?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Format is being finalised. Message on Instagram to share your preference — it helps shape how the classes are structured.",
          },
        },
        {
          "@type": "Question",
          name: "Are fashion illustration classes available outside India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the plan is to offer classes internationally. Pricing by region will be available at launch.",
          },
        },
        {
          "@type": "Question",
          name: "How long does each fashion illustration class take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Session length and pace are being finalised. Message on Instagram and we'll loop you in when the schedule is set.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${raleway.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
