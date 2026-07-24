import './globals.css';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['500', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

// TODO: replace with the actual live domain once deployed
const siteUrl = 'https://securitylinkbd.com/';

const defaultTitle = 'SecurityLink Ltd. | Corporate Security in Dhaka';
const defaultDescription =
  'Corporate security, manned guarding, risk management, CCTV and logistics services for businesses across Bangladesh.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | SecurityLink Ltd.',
  },
  description: defaultDescription,
  keywords: [
    'security company Dhaka',
    'security services Bangladesh',
    'manned guarding Bangladesh',
    'corporate security Dhaka',
    'risk management security Bangladesh',
    'CCTV access control Bangladesh',
    'security guard company Bangladesh',
    'SecurityLink Ltd',
  ],
  authors: [{ name: 'SecurityLink Ltd.' }],
  creator: 'SecurityLink Ltd.',
  publisher: 'SecurityLink Ltd.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'SecurityLink Ltd.',
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/logo.webp',
        width: 512,
        height: 512,
        alt: 'SecurityLink Ltd.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  category: 'business',
  other: {
    'profile:facebook': 'https://web.facebook.com/sll2013',
    'profile:linkedin': 'https://www.linkedin.com/company/security-link-limited/',
    'profile:instagram': 'https://www.instagram.com/security_link_limited/',
    'profile:twitter': 'https://twitter.com/SecurityLinkLi1',
    'profile:pinterest': 'https://www.pinterest.com/Securitylinklimited/',
  },
};

export const viewport = {
  themeColor: '#031427',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SecurityLink Ltd.',
  image: `${siteUrl}/logo.webp`,
  url: siteUrl,
  telephone: '+8801777740993',
  email: 'info@securitylink-bd.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House #95/2, Road #01, Ward #05, Dia Bari',
    addressLocality: 'Uttara, Dhaka',
    postalCode: '1230',
    addressCountry: 'BD',
  },
  areaServed: 'Bangladesh',
  description: defaultDescription,
  priceRange: '$$',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preload LCP hero images — browser starts download before body parsing */}
        <link rel="preload" href="/hero9-mobile.webp" as="image" fetchPriority="high" />
        <link rel="preload" href="/hero9-desktop.webp" as="image" media="(min-width: 1024px)" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap';document.head.appendChild(l);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden bg-background text-on-surface">
        <Header />
        {children}
        <Footer />
         <SpeedInsights />
      </body>
    </html>
  );
}