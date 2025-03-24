import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | My Website',
    default: 'My Website - Modern Web Solutions',
  },
  description: 'A modern website built with Next.js focusing on performance and SEO',
  openGraph: {
    title: 'My Website',
    description: 'A modern website built with Next.js focusing on performance and SEO',
    url: 'https://your-domain.com',
    siteName: 'My Website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
        width: 1200,
        height: 630,
        alt: 'My Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Website',
    description: 'A modern website built with Next.js focusing on performance and SEO',
    images: ['https://images.unsplash.com/photo-1522542550221-31fd19575a2d'],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}