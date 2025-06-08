// src/app/contact/page.js

// 1. IMPORT THE SERVER ACTION
import { submitForm } from '../../lib/actions';

export const metadata = {
  title: 'Contact Us | Helpfulabs Solutions',
  description: 'Get in touch with Helpfulabs Solutions. We\'d love to hear from you!',
};

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-dark-gray dark:text-white sm:text-5xl">
            Let&apos;s Connect
          </h1>
          <p className="mt-6 text-lg leading-8 text-medium-gray dark:text-gray-400">
            Whether you have a question about our products, a partnership idea, or just want to say hello, we&apos;d love to hear from you.
          </p>
        </div>

        {/* 2. UPDATE THE FORM TAG */}
        <form 
          action={submitForm} // Use the server action
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          {/* This hidden input is still required! */}
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-dark-gray dark:text-white">
                Full name
              </label>
              <div className="mt-2.5">
                <input type="text" name="name" id="name" autoComplete="name" required className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-gray dark:text-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:text-sm sm:leading-6" />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-dark-gray dark:text-white">
                Email address
              </label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-gray dark:text-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:text-sm sm:leading-6" />
              </div>
            </div>

            {/* Subject Dropdown */}
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-dark-gray dark:text-white">
                Subject
              </label>
              <div className="mt-2.5">
                <select name="subject" id="subject" required className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-gray dark:text-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:text-sm sm:leading-6">
                  <option>General Inquiry</option>
                  <option>Question about a Product</option>
                  <option>Partnership or Sponsorship</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-dark-gray dark:text-white">
                Message
              </label>
              <div className="mt-2.5">
                <textarea name="message" id="message" rows={4} required className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-gray dark:text-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button type="submit" className="block w-full rounded-md bg-black dark:bg-white dark:text-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;