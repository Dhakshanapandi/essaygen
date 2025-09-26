import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "EssayGen - AI Assignment Generator",
  description: "Generate plagiarism-free essays instantly with AI. Perfect for students, professionals, and researchers.",
  keywords: "AI essay generator, assignment generator, free essay writer, academic writing AI, plagiarism free essays",
  openGraph: {
    title: "EssayGen - AI Assignment Generator",
    description: "Generate plagiarism-free essays instantly with AI.",
    url: "https://essaygen.com",
    siteName: "EssayGen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EssayGen Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EssayGen - AI Assignment Generator",
    description: "Generate plagiarism-free essays instantly with AI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NNKXPPZ140"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NNKXPPZ140');
          `}
        </Script>
        <meta name="google-site-verification" content="_QzYi3Br6Ic3XFFWrTVTChKIypP4gf_eSvbfKjsveIY" />

      </head>
      <body className="bg-white text-gray-900 font-sans flex flex-col min-h-screen scroll-smooth">
        {/* Navbar */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            {/* Brand */}
            <Link href="/" className="text-xl font-bold text-[var(--accent)] hover:opacity-80">
              EssayGen
            </Link>

            {/* Navigation */}
            <nav className="space-x-6 text-sm font-medium text-gray-600">
              <Link href="/about" className="hover:text-[var(--accent)]">About</Link>
              <Link href="/privacy" className="hover:text-[var(--accent)]">Privacy</Link>
              <Link href="/terms" className="hover:text-[var(--accent)]">Terms</Link>
              <Link href="/contact" className="hover:text-[var(--accent)]">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto p-4 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="text-[var(--accent)] font-medium hover:opacity-80">EssayGen</Link>.
              All rights reserved.
            </p>
            <p className="mt-1">
              Built with <span className="text-[var(--accent)]">❤️</span> for students and professionals
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
