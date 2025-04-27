import React from 'react';
import EarningMethodCard from '../components/EarningMethodCard';

export default function HomePage() {
  const earningMethods = [
    {
      title: 'Freelancing',
      description: 'Offer your skills as services to clients worldwide. Popular options include writing, design, development, and virtual assistance.',
      difficultyLevel: 'Medium',
      timeCommitment: 'Flexible',
      earningPotential: '$15-150+/hour',
      startupCost: 'Low',
      icon: 'freelancing',
      linkTo: 'freelancing'
    },
    {
      title: 'Remote Jobs',
      description: 'Full-time and part-time positions with companies that allow you to work from anywhere in the world.',
      difficultyLevel: 'Medium',
      timeCommitment: 'Full-time/Part-time',
      earningPotential: '$30k-150k+/year',
      startupCost: 'Low',
      icon: 'remote',
      linkTo: 'remote-jobs'
    },
    {
      title: 'Passive Income',
      description: 'Create assets that generate income with minimal ongoing work. Includes investments, digital products, and automation.',
      difficultyLevel: 'Hard',
      timeCommitment: 'Upfront investment',
      earningPotential: 'Unlimited',
      startupCost: 'Medium-High',
      icon: 'passive',
      linkTo: 'passive-income'
    },
    {
      title: 'Content Creation',
      description: 'Create and monetize content through platforms like YouTube, TikTok, blogs, podcasts, and more.',
      difficultyLevel: 'Medium',
      timeCommitment: 'Consistent',
      earningPotential: 'Variable',
      startupCost: 'Low-Medium',
      icon: 'content',
      linkTo: 'content-creation'
    },
    {
      title: 'Online Business',
      description: 'Start and grow digital businesses like e-commerce stores, SaaS products, or online services.',
      difficultyLevel: 'Hard',
      timeCommitment: 'High',
      earningPotential: 'Unlimited',
      startupCost: 'Medium-High',
      icon: 'business',
      linkTo: 'online-business'
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="bg-blue-600 text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Welcome to Mr Expert's Online Earning Guide</h1>
        <p className="text-xl text-blue-100 mb-0">Discover legitimate ways to earn money online, from beginner-friendly gigs to full-time careers and businesses.</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Ways to Earn Online</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {earningMethods.map((method, index) => (
            <EarningMethodCard 
              key={index}
              title={method.title}
              description={method.description}
              difficultyLevel={method.difficultyLevel}
              timeCommitment={method.timeCommitment}
              earningPotential={method.earningPotential}
              startupCost={method.startupCost}
              icon={method.icon}
              linkTo={method.linkTo}
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Why Earn Money Online?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Flexibility</h3>
              <p className="text-gray-700">Work on your own schedule from anywhere in the world with an internet connection.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-700">Start with minimal investment and scale up as you gain experience and skills.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Income Potential</h3>
              <p className="text-gray-700">Unlimited earning potential based on your skills, time investment, and business acumen.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="mb-4">Ready to begin your online earning journey? Our guide provides step-by-step information for each method, along with resources, tips, and strategies to maximize your success.</p>
          <p className="mb-4">Browse through the different categories using the sidebar navigation to learn more about each earning method.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="btn btn-primary">Getting Started Guide</a>
            <a href="#" className="btn btn-secondary">Explore Resources</a>
          </div>
        </div>
      </section>
      
      <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="zapt-badge">
        Made on ZAPT
      </a>
    </div>
  );
}