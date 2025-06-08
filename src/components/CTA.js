// components/CTA.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <motion.section
      className="bg-light-gray dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-dark-gray dark:text-white sm:text-4xl">
          Have an idea or want to collaborate?
        </h2>
        <p className="mt-4 text-lg text-medium-gray dark:text-gray-400">
          We&apos;re always looking for new challenges and partnerships.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-black dark:bg-white dark:text-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
