// src/app/mission/page.js

// --- CORRECTED IMPORT PATHS ---
import CoreValues from "../../components/CoreValues";
import CTA from "../../components/CTA";
// -----------------------------

export const metadata = {
  title: 'Our Mission | Helpfulabs Solutions',
  description: 'Learn about our mission to bridge the software usability gap and the future we are building.',
};

const MissionPage = () => {
  return (
    <>
      {/* Section 1: The "Why" - Your Story */}
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-base font-semibold leading-7 text-primary-orange">Our Mission</p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl">
              Bridging the Usability Gap
            </h1>
            <p className="mt-6 text-lg leading-8 text-medium-gray">
              We love the power of modern software, but we see that its complexity often creates a barrier for everyday users. Great features are useless if they are difficult to find or hard to use.
              <span className="font-semibold text-dark-gray"> Helpfulabs Solutions exists to break down that barrier.</span>
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl text-base leading-7 text-medium-gray text-justify sm:text-lg sm:leading-8">
            <p>
              My journey into computer science started with a simple fascination for how software can make difficult tasks feel effortless. I believe technology should empower, not intimidate. Too often, I&apos;ve seen friends, family, and colleagues struggle with tools that were designed for developers first and people second. That&apos;s the gap we&apos;re here to fill.
            </p>
            <p className="mt-8">
              We create simple scripts, powerful extensions, and intuitive web tools that act as the missing &apos;user manual&apos; for popular software. It&apos;s about creating that &quot;aha!&quot; moment for users when a frustrating task suddenly becomes simple. We get our satisfaction from turning a pain point into a point of productivity and delight.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Reusing the Core Values Component */}
      <CoreValues />

      {/* Section 3: The Future Vision */}
      <div className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
              <div className="mx-auto text-center">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">The Future We&apos;re Building</h2>
                  <p className="mt-4 text-lg text-medium-gray">
                      Our long-term vision is to be at the forefront of user-centric innovation. While we are currently focused on improving productivity and entertainment tools, we see a future where our principles can be applied to even bigger challenges. We aim to be part of a movement that makes technology more accessible, inclusive, and helpful for millions of lives.
                  </p>
              </div>
          </div>
      </div>

      {/* Section 4: Reusing the CTA */}
      <CTA />
    </>
  );
};

export default MissionPage;