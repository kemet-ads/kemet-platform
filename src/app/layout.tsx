import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BookCallProvider } from "@/contexts/BookCallContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KEMET — Performance Lead Generation Agency UAE",
  description:
    "KEMET is a Dubai-based performance marketing agency specializing in lead generation, Meta Ads, Google Ads, TikTok, and AI-powered campaign optimization for businesses across the GCC.",
  icons: {
    icon: "/kemet_logo.png",
  },
  openGraph: {
    title: "KEMET — Performance Lead Generation Agency UAE",
    description:
      "We build and optimize high-converting ad campaigns that help businesses generate real leads, lower acquisition costs, and scale consistently across the GCC.",
    url: "https://kemetads.ae",
    siteName: "KEMET",
    images: [
      {
        url: "/kemet_logo.png",
        width: 512,
        height: 512,
        alt: "KEMET Logo",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KEMET — Performance Lead Generation Agency UAE",
    description:
      "We build and optimize high-converting ad campaigns that help businesses generate real leads, lower acquisition costs, and scale consistently.",
    images: ["/kemet_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kemetads.ae",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KEMET",
  url: "https://kemetads.ae",
  logo: "https://kemetads.ae/kemet_logo.png",
  description:
    "Performance lead generation agency specializing in Meta Ads, Google Ads, TikTok, Snapchat, LinkedIn, and AI-powered campaign optimization.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971501412159",
    contactType: "sales",
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [
    "https://www.facebook.com/kemetads.ae/",
    "https://www.instagram.com/kemetads.ae",
    "https://www.tiktok.com/@kemetads",
    "https://www.snapchat.com/@kemetads",
    "https://www.linkedin.com/company/kemetads/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a1628] text-white">
        <BookCallProvider>
          {children}
        </BookCallProvider>
      </body>
    </html>
  );
}