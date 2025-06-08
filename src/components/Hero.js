// components/Hero.js

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white text-center">
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:py-40">
        {/* Headline */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-dark-gray sm:text-5xl lg:text-6xl">
          Software, Simplified.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-medium-gray">
          We create simple, powerful extensions and web tools that fix the
          frustrating gaps in your favorite software.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/products"
            className="rounded-md bg-primary-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="/mission"
            className="text-sm font-semibold leading-6 text-dark-gray hover:text-medium-gray"
          >
            Learn Our Mission <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;