// components/FeaturedSolutions.js

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { BoltIcon, CodeBracketIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    icon: BoltIcon,
    title: 'YT-Channel-Importer',
    description: 'Batch Import & Subscribe to YouTube Channels Effortlessly from lists or webpages.',
    href: 'https://github.com/snowballons/YT-Channel-Importer',
  },
  {
    icon: CodeBracketIcon,
    title: 'stream-manager-cli',
    description: 'A lightweight CLI to manage and launch your favorite live streams without a browser.',
    href: '#', // Replace with final URL when ready
  },
  {
    icon: ArrowDownTrayIcon,
    title: 'wallpaper-downloader',
    description: 'A simple Chrome extension to download all images from a webpage. Great for wallpaper sites.',
    href: '#', // Replace with final URL when ready
  },
];

const FeaturedSolutions = () => {
  return (
    <motion.section 
      className="bg-light-gray py-20 sm:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
            Our Handcrafted Solutions
          </h2>
          <p className="mt-4 text-lg text-medium-gray">
            Every tool we build is designed with simplicity, usability, and functionality at its core.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <ProductCard
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              href={solution.href}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedSolutions;
