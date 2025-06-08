// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="HelpLabs Solutions Logo" 
            width={160} 
            height={30} 
            priority // Helps load the logo faster
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/products" className="text-medium-gray font-medium hover:text-primary-orange transition-colors">
            Products
          </Link>
          <Link href="/mission" className="text-medium-gray font-medium hover:text-primary-orange transition-colors">
            Our Mission
          </Link>
          <Link href="/contact" className="text-medium-gray font-medium hover:text-primary-orange transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;