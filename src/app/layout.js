// app/layout.js

import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DarkModeProvider } from '../contexts/DarkModeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata = {
  title: 'Helpfulabs Solutions',
  description: 'Software, Simplified. We create simple, powerful extensions and web tools.',
  keywords: 'software tools, browser extensions, developer tools, productivity',
  openGraph: {
    title: 'Helpfulabs Solutions',
    description: 'Software, Simplified. We create simple, powerful extensions and web tools.',
    url: 'https://www.helpfulabssolutions.com',
    siteName: 'Helpfulabs Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Helpfulabs Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-sans text-dark-gray dark:text-gray-100 bg-[#f8f9fa] dark:bg-gray-900 bg-[url('/subtle-pattern.png')] bg-repeat`}>
        <DarkModeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
