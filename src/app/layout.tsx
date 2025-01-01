import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "People Pulse Global Ltd. | Visa Processing Experts",
    description: "People Pulse Global Ltd. specializes in fast and reliable visa processing services globally.",
    openGraph: {
        title: "People Pulse Global Ltd.",
        description: "Visa Processing Site UK",
        url: "https://www.peoplepulseglobal.com/",
        siteName: "People Pulse Global Ltd.",
        type: "website",
        images: [
            {
                url: "https://www.peoplepulseglobal.com/img/ppg_logo.png", // Replace with your logo URL
                width: 800,
                height: 600,
                alt: "People Pulse Global Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@yourtwitterhandle", // Replace with your Twitter handle
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* Basic Meta Tags */}
                <meta name="description" content="People Pulse Global Ltd. specializes in visa processing services worldwide." />
                <meta name="keywords" content="visa processing, global visa, People Pulse, PPG" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="People Pulse Global Ltd." />
                <meta property="og:description" content="Visa Processing Site" />
                <meta property="og:image" content="https://www.peoplepulseglobal.com/img/ppg_logo.png" />
                <meta property="og:url" content="https://www.peoplepulseglobal.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="People Pulse Global Ltd." />
                <meta name="twitter:description" content="Visa Processing Site" />
                <meta name="twitter:image" content="https://www.peoplepulseglobal.com/img/ppg_logo.png" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data for SEO */}
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "People Pulse Global Ltd.",
                            "url": "https://www.peoplepulseglobal.com/",
                            "logo": "https://www.peoplepulseglobal.com/img/ppg_logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+447438914638",
                                "contactType": "Consultation",
                            },
                        }),
                    }}
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
