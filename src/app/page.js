// app/page.js

import Hero from '../components/Hero';
import FeaturedSolutions from '../components/FeaturedSolutions';
import CoreValues from '../components/CoreValues';
import CTA from '../components/CTA'; // <-- 1. IMPORT

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedSolutions />
      <CoreValues />
      <CTA /> {/* <-- 2. ADD THE NEW SECTION */}
    </main>
  );
}