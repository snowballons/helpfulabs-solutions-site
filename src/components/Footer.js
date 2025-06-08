// components/Footer.js

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Top section with logo and nav */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Helpfulabs Solutions Logo"
                width={180}
                height={45}
                className="brightness-0 invert" // CSS filter to make the logo white
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 dark:text-gray-500">Software, Simplified.</p>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex space-x-8 md:mt-0">
            <Link href="/products" className="text-gray-300 dark:text-gray-400 hover:text-white">
              Products
            </Link>
            <Link href="/mission" className="text-gray-300 dark:text-gray-400 hover:text-white">
              Mission
            </Link>
            <Link href="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600 dark:border-gray-700" />

        {/* Bottom section with copyright and socials */}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {currentYear} Helpfulabs Solutions. All Rights Reserved.
            </p>
            <div className="mt-2 flex space-x-4">
              <Link href="/terms" className="text-xs text-gray-500 dark:text-gray-600 hover:text-gray-300">
                Terms & Conditions
              </Link>
              <span className="text-xs text-gray-500 dark:text-gray-600">•</span>
              <Link href="/privacy" className="text-xs text-gray-500 dark:text-gray-600 hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Link href="https://github.com/snowballons" className="text-gray-400 dark:text-gray-500 hover:text-white">GitHub</Link>
            <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;