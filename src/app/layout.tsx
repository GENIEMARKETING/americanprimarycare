import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'American Primary Care — 20+ years of managed care experience in Palm Harbor, New Port Richey, and Holiday, FL. Internal Medicine, Pulmonology, Chiropractic, and more. Accepting new patients.',
  keywords: [
    'primary care Palm Harbor',
    'internal medicine Pinellas County',
    'chiropractor New Port Richey',
    'pulmonologist Tampa Bay',
    'Medicare doctor Palm Harbor',
    'American Primary Care',
    'geriatric care Florida',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      'Comprehensive primary care, pulmonology, and chiropractic services in Pasco & Pinellas County, FL. Accepting new patients.',
    images: [
      {
        url: '/assets/logo/american-primary-care-logo.png',
        width: 400,
        height: 120,
        alt: 'American Primary Care Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
