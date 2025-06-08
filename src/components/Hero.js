// components/Hero.js

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-dark-gray">
          Software, Simplified.
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-medium-gray">
          We create simple, powerful extensions and web tools that fix the
          frustrating gaps in your favorite software.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          <Link
            href="/products"
            className="w-full sm:w-auto rounded-md bg-primary-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="/mission"
            className="mt-3 sm:mt-0 text-sm font-semibold leading-6 text-dark-gray hover:text-medium-gray"
          >
            Learn Our Mission <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
