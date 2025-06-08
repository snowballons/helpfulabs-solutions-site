// app/layout.js

import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // <-- 1. IMPORT FOOTER

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
  title: 'HelpLabs Solutions',
  description: 'Software, Simplified.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-white text-dark-gray`}>
        <Navbar />
        <main>{children}</main> {/* It's good practice to wrap children in a <main> tag */}
        <Footer /> {/* <-- 2. ADD THE FOOTER HERE */}
      </body>
    </html>
  );
}
