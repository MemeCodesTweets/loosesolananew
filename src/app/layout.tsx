import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";

const noteworthy = localFont({
  src: "./noteworthy.ttf",
  variable: "--font-noteworthy",
});

const bebasNeue = Bebas_Neue({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "$Loose",
  description:
    "Loose is our inner degen cut free — raw, chaotic, and alive. Brought to life daily by @mariaartpro through live art and streams.",
  keywords: [
    "Loose",
    "Sloose",
    "Maria artpro",
    "crypto art",
    "NFT",
    "degen art",
    "community art",
  ],
  authors: [
    {
      name: "Maria (@mariaartpro)",
      url: "https://x.com/mariaartpro",
    },
  ],
  openGraph: {
    title: "$Loose",
    description:
      "Loose is the living embodiment of chaos and freedom — brought to life by @mariaartpro.",
    url: "https://loosesolananew.vercel.app",
    siteName: "Loose",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/PLACEHOLDER/mariaartpro_avatar.jpg",
        width: 400,
        height: 400,
        alt: "Maria (@mariaartpro) profile image",
      },
      {
        url: "https://loosesolananew.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loose Character Artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loose | The Raw and Chaotic Spirit",
    description:
      "Loose is our inner degen cut free — raw, chaotic, and alive. Daily art and streams by @mariaartpro.",
    images: [
      "https://loosesolananew.vercel.app/og-image.png",
      "https://pbs.twimg.com/profile_images/PLACEHOLDER/mariaartpro_avatar.jpg",
    ],
    creator: "@mariaartpro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noteworthy.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
