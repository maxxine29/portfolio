import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Maxine Mutasa — Portfolio",
  description: "Junior Software Engineer & Aspiring UI/UX Designer — Building modern web experiences with Django, Laravel, Vue.js, and Tailwind CSS.",
  keywords: ["portfolio", "software developer", "web development", "UI/UX", "frontend", "Vue.js", "Django", "Laravel"],
  authors: [{ name: "Maxine Mutasa" }],
  creator: "Maxine Mutasa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Maxine Mutasa — Portfolio",
    description: "Junior Software Engineer & Aspiring UI/UX Designer — Building modern web experiences with Django, Laravel, Vue.js, and Tailwind CSS.",
    siteName: "Maxine Mutasa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxine Mutasa — Portfolio",
    description: "Junior Software Engineer & Aspiring UI/UX Designer — Building modern web experiences with Django, Laravel, Vue.js, and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-dvh antialiased">
        {/* Skip to main content link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        
        {/* Liquid gradient background */}
        <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
          <div 
            className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl animate-liquid-float"
            style={{ 
              background: "radial-gradient(closest-side at 50% 50%, var(--primary), transparent 60%)" 
            }} 
          />
          <div 
            className="pointer-events-none absolute bottom-0 left-[15%] h-[32rem] w-[32rem] rounded-full opacity-25 blur-2xl animate-liquid-float"
            style={{ 
              background: "radial-gradient(closest-side, var(--accent), transparent 65%)" 
            }} 
          />
          <div 
            className="pointer-events-none absolute top-1/2 right-[10%] h-[24rem] w-[24rem] rounded-full opacity-20 blur-xl animate-liquid-float"
            style={{ 
              background: "radial-gradient(closest-side, var(--primary), transparent 70%)" 
            }} 
          />
        </div>
        {children}
      </body>
    </html>
  );
}