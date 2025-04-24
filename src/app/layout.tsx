import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LexendRegular = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight:"500"
});


const KanitRegular = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight:"500"
});

export const metadata: Metadata = {
  title: "Framer Home",
  description: "Generated to learn how to use framer, it's not a real website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${KanitRegular.variable} ${LexendRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
