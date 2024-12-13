import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "People Pulse Global Ltd.",
    description: "Visa Processing Site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="fantasy">
            <head>
                <meta charSet="UTF-8" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
