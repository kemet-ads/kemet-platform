import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import { BookCallProvider } from "@/contexts/BookCallContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHL8NH9K');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z90B5RX9V7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-Z90B5RX9V7');`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050e1a] text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHL8NH9K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LanguageProvider>
          <BookCallProvider>
            {children}
          </BookCallProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}