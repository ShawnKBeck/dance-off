import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "./no-dark-mode.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "You Got Served | Dance Competition",
  description: "A charitable competitive dance-off event raising money for local charities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="color-scheme" content="light" />
        <style>
          {`
            @media (prefers-color-scheme: dark) {
              :root {
                color-scheme: light;
              }
            }
          `}
        </style>
      </head>
      <Script id="force-light-mode" strategy="beforeInteractive">
        {`
          // Force light mode and prevent dark mode
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        `}
      </Script>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col bg-purple-50`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
