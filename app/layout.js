
import './globals.css';
import { Inter, Plus_Jakarta_Sans, Courier_Prime } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const courier = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-courier' });

export const metadata = {
  title: 'SECURITYLINK | Elite Corporate Asset Protection',
  description: 'Industry-leading protection for corporate assets and critical facilities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Material Symbols for your tactical icons */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${courier.variable} font-body-md text-body-md overflow-x-hidden bg-background text-on-surface`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}