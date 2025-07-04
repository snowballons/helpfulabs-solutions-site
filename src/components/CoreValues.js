// components/CoreValues.js
'use client';

import { motion } from 'framer-motion';
import {
  SparklesIcon,
  CursorArrowRaysIcon,
  Cog6ToothIcon,
  LockOpenIcon,
} from '@heroicons/react/24/outline';

const values = [
  {
    name: 'Simplicity',
    description: 'We cut through complexity to build intuitive and elegant tools that just work, without the clutter.',
    icon: SparklesIcon,
  },
  {
    name: 'Usability',
    description: 'Software should adapt to people, not the other way around. Every feature is crafted for a seamless user experience.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Functionality',
    description: 'Our tools are reliable workhorses. They do the job they promise, efficiently and effectively, every single time.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Openness',
    description: 'We value transparency and collaboration. We believe in open source and building a community around our solutions.',
    icon: LockOpenIcon,
  },
];

const CoreValues = () => {
  return (
    <motion.section
      className="bg-white dark:bg-gray-800 py-20 sm:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark-gray dark:text-white sm:text-4xl">
            Our Guiding Principles
          </h2>
          <p className="mt-4 text-lg text-medium-gray dark:text-gray-400">
            These four values are the foundation of everything we build and every decision we make.
          </p>
        </div>

        {/* Grid of Values */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name} className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white mx-auto">
                <value.icon className="h-7 w-7 text-white dark:text-black" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-7 text-dark-gray dark:text-white">
                {value.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-medium-gray dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreValues;
