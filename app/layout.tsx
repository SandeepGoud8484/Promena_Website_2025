import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const gtwalsheim = localFont({
  src: [
    {
      path: '../public/fonts/GTWalsheimPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GTWalsheimPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gtwalsheim',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Promena',
    default: 'AI Solutions & Software Development Services',
  },
  description: "Explore Promena's cutting-edge AI and software development services. Empower your business with innovation, data science, and advanced technology.",
  openGraph: {
    title: "AI Solutions & Software Development Services",
    description: "Explore Promena's cutting-edge AI and software development services. Empower your business with innovation, data science, and advanced technology.",
    url: 'https://promena-website-2025.vercel.app/',
    siteName: 'Promena',
    images: [
      {
        url: 'https://development1.promena.in/_next/static/media/PROMENA%20LOGO%20WHITE.b1b7394b.png',
        width: 1200,
        height: 630,
        alt: 'Promena',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "'AI Solutions & Software Development Services'",
    description: "Explore Promena's cutting-edge AI and software development services. Empower your business with innovation, data science, and advanced technology.",
    images: ['https://development1.promena.in/_next/static/media/PROMENA%20LOGO%20WHITE.b1b7394b.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className={`${gtwalsheim.variable}`}>{children}</body>
    </html>
  );
}