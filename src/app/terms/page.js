// src/app/terms/page.js

export const metadata = {
  title: 'Terms and Conditions | Helpfulabs Solutions',
  description: 'Terms and Conditions for Helpfulabs Solutions products and services.',
};

const TermsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold tracking-tight text-dark-gray dark:text-white sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mt-6 text-lg leading-8 text-medium-gray dark:text-gray-400">
              Please read these terms and conditions carefully before using our products and services.
            </p>
          </div>

          {/* Terms Content */}
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
                Welcome to Helpfulabs Solutions (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;)
                govern your use of our software products, browser extensions, web applications, and related services
                (collectively, &quot;Services&quot;) provided by Helpfulabs Solutions. By accessing or using our Services, you
                agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
            </section>

            {/* Section 1: Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                By installing, downloading, accessing, or using any of our Services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally 
                binding agreement between you and Helpfulabs Solutions.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                If you are using our Services on behalf of an organization, you represent and warrant that you have the 
                authority to bind that organization to these Terms.
              </p>
            </section>

            {/* Section 2: License and Permitted Use */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">2. License and Permitted Use</h2>
              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">2.1 License Grant</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, 
                revocable license to use our Services for your personal or internal business purposes.
              </p>
              
              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">2.2 Premium Features</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                Certain features of our Services may require payment of fees (&quot;Premium Features&quot;). If you purchase
                access to Premium Features, your license extends to those features for the duration specified in your
                purchase, subject to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">2.3 Restrictions</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                <li>Use the Services for any illegal, unauthorized, or prohibited purpose</li>
                <li>Reverse engineer, decompile, disassemble, or attempt to derive source code</li>
                <li>Distribute, sell, sublicense, or lease the Services without authorization</li>
                <li>Remove, alter, or obscure any proprietary notices or labels</li>
                <li>Use the Services to violate any third-party terms of service or policies</li>
                <li>Attempt to circumvent usage limitations or security features</li>
                <li>Share Premium Feature access credentials with unauthorized users</li>
              </ul>
            </section>

            {/* Section 3: User Accounts and Payments */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">3. User Accounts and Payments</h2>
              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">3.1 Account Responsibility</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">3.2 Payment Terms</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                Payments for Premium Features are processed through our designated third-party payment processors. 
                By making a purchase, you agree to the terms of the payment processor and authorize us to charge the 
                specified amount to your chosen payment method.
              </p>

              <h3 className="text-xl font-semibold text-dark-gray dark:text-white mb-3">3.3 Refunds</h3>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                Due to the digital nature of our Services, refunds are generally not available once Premium Features 
                have been activated. We may consider refunds on a case-by-case basis for exceptional circumstances, 
                such as technical issues that prevent proper functionality.
              </p>
            </section>

            {/* Section 4: Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">4. Intellectual Property Rights</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                The Services, including all software, designs, text, graphics, images, and other content, are the 
                exclusive property of Helpfulabs Solutions and are protected by copyright, trademark, and other 
                intellectual property laws. All rights not expressly granted to you are reserved by Helpfulabs Solutions.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                You retain ownership of any content you create or upload using our Services, but you grant us a 
                limited license to process such content as necessary to provide the Services.
              </p>
            </section>

            {/* Section 5: Privacy and Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">5. Privacy and Data Protection</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                Your privacy is important to us. Our collection, use, and protection of your personal information is
                governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our
                Services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            {/* Section 6: Disclaimers and Warranties */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">6. Disclaimers and Warranties</h2>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-4">
                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">IMPORTANT DISCLAIMER</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND.
                </p>
              </div>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, HELPFULABS SOLUTIONS DISCLAIMS ALL WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                NON-INFRINGEMENT, AND THOSE ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                We do not warrant that the Services will be uninterrupted, error-free, secure, or that defects will
                be corrected. Third-party platforms and APIs may change at any time, and we cannot guarantee continued
                compatibility or functionality.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                You acknowledge that your use of the Services is at your own risk, and you are solely responsible for
                any damage to your computer system or loss of data that results from such use.
              </p>
            </section>

            {/* Section 7: Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, HELPFULABS SOLUTIONS SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
                OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                <li>Your access to, use of, or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on or through the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID US, IF ANY,
                FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
              </p>
            </section>

            {/* Section 8: Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">8. Indemnification</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                You agree to defend, indemnify, and hold harmless Helpfulabs Solutions, its officers, directors,
                employees, agents, and affiliates from and against any and all claims, damages, obligations, losses,
                liabilities, costs, or debt, and expenses (including but not limited to attorney&apos;s fees) arising from:
                (a) your use of and access to the Services; (b) your violation of any term of these Terms; (c) your
                violation of any third-party right, including without limitation any copyright, property, or privacy
                right; or (d) any claim that your use of the Services caused damage to a third party.
              </p>
            </section>

            {/* Section 9: Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">9. Termination</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                We may terminate or suspend your access to the Services immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                You may terminate your use of the Services at any time by discontinuing your use and uninstalling any
                software components.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                Upon termination, your right to use the Services will cease immediately. Sections that by their nature
                should survive termination shall survive, including but not limited to ownership provisions, warranty
                disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            {/* Section 10: Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">10. Changes to Terms</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision
                is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
                If you do not agree to the new Terms, please stop using the Services.
              </p>
            </section>

            {/* Section 11: Governing Law and Jurisdiction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                These Terms shall be interpreted and governed by the laws of Kenya, without regard to its conflict of
                law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively
                in the courts of Kenya.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck
                and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Section 12: Miscellaneous */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">12. Miscellaneous</h2>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                These Terms constitute the entire agreement between you and Helpfulabs Solutions regarding the use of
                the Services and supersede all prior and contemporaneous written or oral agreements.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or
                any other term, and our failure to assert any right or provision under these Terms shall not constitute
                a waiver of such right or provision.
              </p>
              <p className="text-base leading-7 text-medium-gray dark:text-gray-400">
                If any provision of these Terms is held invalid or unenforceable, that provision will be enforced to
                the maximum extent permissible, and the other provisions will remain in full force and effect.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark-gray dark:text-white mb-4">13. Contact Information</h2>
              <div className="p-6 bg-light-gray dark:bg-gray-700 rounded-lg">
                <p className="text-base leading-7 text-medium-gray dark:text-gray-400 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="text-base leading-7 text-medium-gray dark:text-gray-400">
                  <p className="mb-2"><strong className="text-dark-gray dark:text-white">Company:</strong> Helpfulabs Solutions</p>
                  <p className="mb-2"><strong className="text-dark-gray dark:text-white">Website:</strong> www.helpfulabssolutions.com</p>
                  <p><strong className="text-dark-gray dark:text-white">Email:</strong> support@helpfulabssolutions.com</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
