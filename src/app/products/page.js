// src/app/products/page.js

import ProductCard from '../../components/ProductCard';
import { BoltIcon, CodeBracketIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Our Products | HelpLabs Solutions',
  description: 'Explore all the extensions, tools, and solutions built by HelpLabs.',
};

// We define the product data here. In a real app, this might come from a database.
const allProducts = [
  {
    icon: BoltIcon,
    title: 'YT-Channel-Importer',
    description: 'Batch Import & Subscribe to YouTube Channels Effortlessly from lists or webpages. Stop subscribing one by one!',
    href: 'https://github.com/snowballons/YT-Channel-Importer',
  },
  {
    icon: CodeBracketIcon,
    title: 'stream-manager-cli',
    description: 'A simple, lightweight command-line tool to manage your favorite live streams and launch them directly in your media player.',
    href: 'https://github.com/snowballons/stream-manager-cli', // Updated link
  },
  {
    icon: ArrowDownTrayIcon,
    title: 'wallpaper-downloader',
    description: 'A simple and effective Chrome extension to download all PNG and JPEG images from the current webpage.',
    href: 'https://github.com/snowballons/wallpaper-downloader-chrome-extension', // Updated link
  },
  // You can easily add more products here in the future.
  // {
  //   icon: SomeOtherIcon,
  //   title: 'Future Awesome Product',
  //   description: 'A brief description of what this new product does and why it is amazing.',
  //   href: '#',
  // },
];


const ProductsPage = () => {
  return (
    <>
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl">
              Our Solutions Gallery
            </h1>
            <p className="mt-6 text-lg leading-8 text-medium-gray">
              A complete collection of the tools we&apos;ve built to make your digital life easier. Each one is crafted with our core values in mind.
            </p>
          </div>

          {/* Grid of All Products */}
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => (
              <ProductCard
                key={product.title}
                icon={product.icon}
                title={product.title}
                description={product.description}
                href={product.href}
              />
            ))}
          </div>
        </div>
      </div>
      
      <CTA />
    </>
  );
};

export default ProductsPage;