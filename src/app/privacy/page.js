// src/app/privacy/page.js

export const metadata = {
  title: 'Privacy Policy | Helpfulabs Solutions',
  description: 'Privacy Policy for Helpfulabs Solutions products and services.',
};

const PrivacyPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold tracking-tight text-dark-gray dark:text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-medium-gray dark:text-gray-400">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          {/* Privacy Content */}
          <div className="prose prose-lg max-w-none text-dark-gray dark:text-gray-300">
            
            {/* Last Updated */}
            <div className="mb-8 p-4 bg-light-gray dark:bg-gray-700 rounded-lg">
              <p className="text-sm font-semibold text-medium-gray dark:text-gray-400 mb-0">
                Last Updated: December 19, 2024
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                Helpfulabs Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our software products,
                browser extensions, web applications, and related services (collectively, &quot;Services&quot;).
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">1.1 Information You Provide</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                We may collect information you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                <li>Contact information (name, email address) when you contact us for support</li>
                <li>Payment information when you purchase premium features (processed by third-party payment processors)</li>
                <li>Feedback and communications you send to us</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                Our Services may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                <li>Usage data and analytics (how you interact with our Services)</li>
                <li>Device information (browser type, operating system)</li>
                <li>Log data (IP address, access times, pages viewed)</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">1.3 Local Storage</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                Many of our Services store data locally on your device using browser storage mechanisms. This data 
                is not transmitted to our servers unless explicitly required for functionality.
              </p>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and deliver premium features</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send important updates about our Services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the 
                following circumstances:
              </p>
              <ul className="list-disc pl-6 text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our Services</li>
                <li><strong>Payment Processors:</strong> Payment information is shared with our payment processors to complete transactions</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">4. Data Security</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                We regularly review and update our security practices to ensure the ongoing protection of your data.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">5. Data Retention</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need 
                your personal information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">6. Your Rights and Choices</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>The right to erase your personal information in certain circumstances</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                Our Services are not intended for children under the age of 13 (or the relevant age of consent in your
                jurisdiction). We do not knowingly collect personal information from children. If we become aware that
                we have collected personal information from a child, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. Your continued use
                of our Services after such changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">9. Contact Us</h2>
              <div className="p-6 bg-light-gray dark:bg-gray-700 rounded-lg">
                <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="text-base leading-7 text-medium-gray dark:text-gray-400">
                  <p className="mb-2"><strong className="text-dark-gray dark:text-white">Company:</strong> Helpfulabs Solutions</p>
                  <p className="mb-2"><strong className="text-dark-gray dark:text-white">Website:</strong> www.helpfulabssolutions.com</p>
                  <p><strong className="text-dark-gray dark:text-white">Email:</strong> privacy@helpfulabssolutions.com</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
