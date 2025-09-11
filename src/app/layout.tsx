import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";

const jersey10 = Jersey_10({weight: "400"});

export const metadata: Metadata = {
    title: "Tuxae",
    description: "Tuxae, l'association d'informatique de l'ENSAE Paris",
    appleWebApp: {
        title: 'Tuxae',
        statusBarStyle: 'black-translucent',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={jersey10.className}>
        <body
            className={`antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
