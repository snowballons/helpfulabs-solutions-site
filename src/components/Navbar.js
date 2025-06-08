// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo - reduced size */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Helpfulabs Solutions Logo"
            width={140}
            height={26}
            priority
          />
        </Link>

        {/* Navigation Links - smaller text and spacing */}
        <div className="flex items-center space-x-6">
          <Link href="/products" className="text-sm text-medium-gray font-medium hover:text-primary-orange transition-colors">
            Products
          </Link>
          <Link href="/mission" className="text-sm text-medium-gray font-medium hover:text-primary-orange transition-colors">
            Our Mission
          </Link>
          <Link href="/contact" className="text-sm text-medium-gray font-medium hover:text-primary-orange transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
