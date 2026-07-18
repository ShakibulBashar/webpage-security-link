import './globals.css';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['500', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'SECURITYLINK | Elite Corporate Asset Protection',
  description: 'Industry-leading protection for corporate assets and critical facilities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="overflow-x-hidden bg-background text-on-surface">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}