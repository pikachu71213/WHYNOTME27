import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WHYNOT27 | Cyber Security, Web Dev & Cloud Solutions",
  description: "Secure, Fast, Built for What's Next. Whynot27 is a full-stack technology partner that protects your business from cyber threats, builds high-performance websites, and manages AWS cloud environments.",
  metadataBase: new URL("https://whynot27.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "WHYNOT27 | Cyber Security, Web Dev & Cloud Solutions",
    description: "Secure, Fast, Built for What's Next. Full-stack tech partner.",
    url: "https://whynot27.in",
    siteName: "WHYNOT27",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-bg-deep text-white selection:bg-accent-lime selection:text-bg-deep font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
