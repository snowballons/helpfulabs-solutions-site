// src/app/thank-you/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Thank You | HelpLabs Solutions',
};

const ThankYouPage = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl">
          Message Received!
        </h1>
        <p className="mt-6 text-lg leading-8 text-medium-gray">
          Thank you for reaching out. We&apos;ve received your message and will get back to you as soon as possible.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="rounded-md bg-primary-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;