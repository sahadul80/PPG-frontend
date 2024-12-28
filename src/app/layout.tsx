import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "People Pulse Global Ltd.",
    description: "Visa Processing Site",
    // You can add more metadata here for SEO
    openGraph: {
        title: "People Pulse Global Ltd.",
        description: "Visa Processing Site",
        url: "https://www.peoplepulseglobal.com",  // Replace with your actual site URL
        siteName: "People Pulse Global Ltd.",
        type: "website",
        images: [
            {
                url: "https://www.peoplepulseglobal.com/image.jpg",  // Replace with actual image URL
                width: 800,
                height: 600,
                alt: "Image description",
            },
        ],
    },
    twitter: {
        card: "summary_large_image", // Twitter Card type
        site: "@yourtwitterhandle",  // Replace with your Twitter handle
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* Meta tags for SEO */}
                <meta name="description" content="Visa Processing Site" />
                <meta name="keywords" content="visa, processing, global" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="People Pulse Global Ltd." />
                <meta property="og:description" content="Visa Processing Site" />
                <meta property="og:image" content="https://www.yoursite.com/image.jpg" />
                <meta property="og:url" content="https://www.yoursite.com" />
                <meta property="og:type" content="website" />

                {/* Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID`}
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'YOUR_GA_MEASUREMENT_ID');
                        `,
                    }}
                />

                {/* Structured Data for SEO (JSON-LD) */}
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "People Pulse Global Ltd.",
                            "url": "https://www.peoplepulseglobal.com",
                            "logo": "https://www.peoplepulseglobal.com/img/ppg_logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-800-555-5555",
                                "contactType": "Customer Service",
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