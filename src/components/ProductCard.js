// components/ProductCard.js

import Link from 'next/link';

const ProductCard = ({ icon, title, description, href }) => {
  // The icon is passed as a component, so we can render it directly.
  const IconComponent = icon;

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-shadow hover:shadow-lg">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-light-gray dark:bg-gray-700">
        <IconComponent className="h-6 w-6 text-brand-teal dark:text-brand-teal" />
      </div>

      {/* Title */}
      <h3 className="mt-4 font-display text-xl font-bold text-dark-gray dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-base text-medium-gray dark:text-gray-400 flex-grow">
        {description}
      </p>

      {/* Link - Updated for better visibility */}
      <Link
        href={href}
        className="mt-4 inline-block font-bold text-dark-gray dark:text-gray-300 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more →
      </Link>
    </div>
  );
};

export default ProductCard;
