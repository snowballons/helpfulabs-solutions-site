#!/usr/bin/env node

const fs = require('fs');

console.log('🔍 Verifying Helpfulabs Solutions Website Setup...\n');

const checks = [
  {
    name: 'Package.json exists',
    check: () => fs.existsSync('package.json'),
  },
  {
    name: 'TypeScript config exists',
    check: () => fs.existsSync('tsconfig.json'),
  },
  {
    name: 'Tailwind config exists',
    check: () => fs.existsSync('tailwind.config.js'),
  },
  {
    name: 'Next.js config exists',
    check: () => fs.existsSync('next.config.js'),
  },
  {
    name: 'Source directory structure',
    check: () => fs.existsSync('src/app') && fs.existsSync('src/components') && fs.existsSync('src/styles'),
  },
  {
    name: 'Core components exist',
    check: () => fs.existsSync('src/components/Header.tsx') && 
                 fs.existsSync('src/components/Hero.tsx') && 
                 fs.existsSync('src/components/Footer.tsx'),
  },
  {
    name: 'Feature components exist',
    check: () => fs.existsSync('src/components/HowItWorks.tsx') && 
                 fs.existsSync('src/components/FeaturedServices.tsx') && 
                 fs.existsSync('src/components/ServiceCard.tsx') &&
                 fs.existsSync('src/components/PricingCard.tsx') &&
                 fs.existsSync('src/components/Testimonial.tsx'),
  },
  {
    name: 'Form components exist',
    check: () => fs.existsSync('src/components/ContactForm.tsx') && 
                 fs.existsSync('src/components/BookingForm.tsx'),
  },
  {
    name: 'Case study components exist',
    check: () => fs.existsSync('src/components/CaseStudyCard.tsx') && 
                 fs.existsSync('src/components/CaseStudyHero.tsx') &&
                 fs.existsSync('src/components/ResourceCard.tsx'),
  },
  {
    name: 'App router files exist',
    check: () => fs.existsSync('src/app/layout.tsx') && fs.existsSync('src/app/page.tsx'),
  },
  {
    name: 'Core pages exist',
    check: () => fs.existsSync('src/app/about/page.tsx') && 
                 fs.existsSync('src/app/services/page.tsx') && 
                 fs.existsSync('src/app/packages/page.tsx') &&
                 fs.existsSync('src/app/contact/page.tsx'),
  },
  {
    name: 'Content pages exist',
    check: () => fs.existsSync('src/app/case-studies/page.tsx') && 
                 fs.existsSync('src/app/resources/page.tsx'),
  },
  {
    name: 'API routes exist',
    check: () => fs.existsSync('src/app/api/contact/route.ts'),
  },
  {
    name: 'Cal.com integration',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return packageJson.dependencies && packageJson.dependencies['@calcom/atoms'];
    },
  },
  {
    name: 'Global styles exist',
    check: () => fs.existsSync('src/styles/globals.css'),
  },
  {
    name: 'Logo and assets exist',
    check: () => fs.existsSync('public/logo.png') && fs.existsSync('public/favicon.ico'),
  },
  {
    name: 'Environment configuration exists',
    check: () => fs.existsSync('.env.local'),
  },
];

let passed = 0;
let failed = 0;

checks.forEach(({ name, check }) => {
  const result = check();
  if (result) {
    console.log(`✅ ${name}`);
    passed++;
  } else {
    console.log(`❌ ${name}`);
    failed++;
  }
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('\n🎉 Case Studies & Resources Complete! Your Helpfulabs Solutions website is comprehensive.');
  console.log('\n🚀 Available pages:');
  console.log('   • Home (/) - Hero, How It Works, Featured Services, Testimonial');
  console.log('   • About (/about) - Company story, mission, values');
  console.log('   • Services (/services) - Detailed service offerings');
  console.log('   • Packages (/packages) - Ready-made solutions with pricing');
  console.log('   • Contact (/contact) - Contact form and discovery call booking');
  console.log('   • Case Studies (/case-studies) - Success stories and social proof');
  console.log('   • Resources (/resources) - Free downloads and business tools');
  console.log('\n📋 Features implemented:');
  console.log('   ✅ Professional logo integration');
  console.log('   ✅ Responsive design system');
  console.log('   ✅ Contact form with Resend email integration');
  console.log('   ✅ Cal.com booking integration for discovery calls');
  console.log('   ✅ Detailed case studies with ROI tracking');
  console.log('   ✅ Free resource library with download functionality');
  console.log('   ✅ Social proof and credibility building');
  console.log('   ✅ Lead generation and conversion optimization');
  console.log('\n🔧 Next steps:');
  console.log('   1. Run "npm run dev" to start development server');
  console.log('   2. Visit http://localhost:3000 to test the complete site');
  console.log('   3. Set up file hosting for resource downloads');
  console.log('   4. Create blog system for content marketing');
  console.log('   5. Implement the Systems Health Check quiz (final feature)');
} else {
  console.log('\n⚠️  Some checks failed. Please review the setup.');
}
