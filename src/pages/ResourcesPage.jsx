import React from 'react';

export default function ResourcesPage() {
  const learningPlatforms = [
    { name: 'Udemy', focus: 'Comprehensive courses on almost any topic', link: 'https://www.udemy.com' },
    { name: 'Coursera', focus: 'University-partnered courses and certificates', link: 'https://www.coursera.org' },
    { name: 'LinkedIn Learning', focus: 'Professional and business skills development', link: 'https://www.linkedin.com/learning' },
    { name: 'Skillshare', focus: 'Creative and practical skills with project-based learning', link: 'https://www.skillshare.com' },
    { name: 'YouTube', focus: 'Free tutorials and educational content', link: 'https://www.youtube.com' },
    { name: 'edX', focus: 'University courses from top institutions', link: 'https://www.edx.org' }
  ];

  const businessTools = [
    {
      category: 'Website Building',
      tools: [
        { name: 'WordPress', description: 'Popular CMS for websites and blogs', link: 'https://wordpress.org' },
        { name: 'Shopify', description: 'E-commerce platform for online stores', link: 'https://www.shopify.com' },
        { name: 'Wix', description: 'User-friendly website builder with templates', link: 'https://www.wix.com' },
        { name: 'Squarespace', description: 'Visually appealing templates for portfolios and businesses', link: 'https://www.squarespace.com' }
      ]
    },
    {
      category: 'Digital Marketing',
      tools: [
        { name: 'Google Analytics', description: 'Website traffic and user behavior tracking', link: 'https://analytics.google.com' },
        { name: 'Mailchimp', description: 'Email marketing and automation', link: 'https://mailchimp.com' },
        { name: 'Canva', description: 'Graphic design tool for marketing materials', link: 'https://www.canva.com' },
        { name: 'Hootsuite', description: 'Social media management platform', link: 'https://hootsuite.com' }
      ]
    },
    {
      category: 'Productivity',
      tools: [
        { name: 'Trello', description: 'Visual project management tool', link: 'https://trello.com' },
        { name: 'Asana', description: 'Team coordination and task management', link: 'https://asana.com' },
        { name: 'Notion', description: 'All-in-one workspace for notes, projects, and databases', link: 'https://www.notion.so' },
        { name: 'Google Workspace', description: 'Suite of cloud-based productivity tools', link: 'https://workspace.google.com' }
      ]
    },
    {
      category: 'Freelancing Platforms',
      tools: [
        { name: 'Upwork', description: 'Large freelance marketplace for various skills', link: 'https://www.upwork.com' },
        { name: 'Fiverr', description: 'Service-based marketplace with packaged offerings', link: 'https://www.fiverr.com' },
        { name: 'Toptal', description: 'Platform for top-tier freelance talent', link: 'https://www.toptal.com' },
        { name: 'Freelancer', description: 'Global marketplace for freelance services', link: 'https://www.freelancer.com' }
      ]
    }
  ];

  const books = [
    { title: 'The $100 Startup', author: 'Chris Guillebeau', focus: 'Starting a business with minimal investment' },
    { title: 'Four Hour Work Week', author: 'Timothy Ferriss', focus: 'Lifestyle design and business automation' },
    { title: 'Side Hustle', author: 'Chris Guillebeau', focus: 'Creating additional income streams while employed' },
    { title: 'Building a StoryBrand', author: 'Donald Miller', focus: 'Effective marketing through storytelling' },
    { title: 'Atomic Habits', author: 'James Clear', focus: 'Building productive habits for long-term success' },
    { title: 'Start with Why', author: 'Simon Sinek', focus: 'Developing purpose-driven business strategy' }
  ];

  return (
    <div className="container mx-auto">
      <h1>Resources for Online Earning</h1>
      
      <div className="card">
        <h2>Learning Platforms</h2>
        <p className="mb-4">
          Develop the skills you need with these educational resources:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Platform</th>
                <th className="py-2 px-4 border-b text-left">Focus</th>
                <th className="py-2 px-4 border-b text-left">Website</th>
              </tr>
            </thead>
            <tbody>
              {learningPlatforms.map((platform, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">{platform.name}</td>
                  <td className="py-2 px-4 border-b">{platform.focus}</td>
                  <td className="py-2 px-4 border-b">
                    <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Visit Site
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="card">
        <h2>Essential Business Tools</h2>
        <p className="mb-4">
          Software and platforms to help you build and grow your online business:
        </p>
        
        {businessTools.map((category, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-xl font-semibold mb-3">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {category.tools.map((tool, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">{tool.name}</h4>
                  <p className="text-sm text-gray-700 mb-2">{tool.description}</p>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="card">
        <h2>Recommended Books</h2>
        <p className="mb-4">
          Books that can help you develop the mindset and skills for online earning:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg mb-1">{book.title}</h3>
              <p className="text-gray-700 text-sm mb-1">by {book.author}</p>
              <p className="text-gray-600 text-sm">{book.focus}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card bg-blue-50">
        <h2>Free Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Blogs & Websites</h3>
            <ul className="list-disc pl-5">
              <li><a href="https://www.smartpassiveincome.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Smart Passive Income</a> - Strategies for building passive income streams</li>
              <li><a href="https://www.sidehustlenation.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Side Hustle Nation</a> - Ideas and strategies for side projects</li>
              <li><a href="https://www.problogger.com" target="_blank" rel="noopener noreferrer" className="hover:underline">ProBlogger</a> - Resources for professional blogging</li>
              <li><a href="https://www.digitalmarketer.com/blog" target="_blank" rel="noopener noreferrer" className="hover:underline">Digital Marketer</a> - Digital marketing strategies and tips</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">YouTube Channels</h3>
            <ul className="list-disc pl-5">
              <li><a href="https://www.youtube.com/c/GaryVee" target="_blank" rel="noopener noreferrer" className="hover:underline">GaryVee</a> - Entrepreneurship and social media marketing</li>
              <li><a href="https://www.youtube.com/c/GrahamStephan" target="_blank" rel="noopener noreferrer" className="hover:underline">Graham Stephan</a> - Personal finance and online income</li>
              <li><a href="https://www.youtube.com/c/IncomeschoolTeam" target="_blank" rel="noopener noreferrer" className="hover:underline">Income School</a> - Blogging and passive income strategies</li>
              <li><a href="https://www.youtube.com/c/aileencheng" target="_blank" rel="noopener noreferrer" className="hover:underline">Aileen Xu</a> - Creative entrepreneurship</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="card bg-green-50">
        <h2>Financial Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Accounting & Taxes</h3>
            <ul className="list-disc pl-5">
              <li><a href="https://www.quickbooks.com" target="_blank" rel="noopener noreferrer" className="hover:underline">QuickBooks</a> - Accounting software for small businesses</li>
              <li><a href="https://www.waveapps.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Wave</a> - Free accounting software for small businesses</li>
              <li><a href="https://www.freshbooks.com" target="_blank" rel="noopener noreferrer" className="hover:underline">FreshBooks</a> - Invoicing and accounting for freelancers</li>
              <li><a href="https://www.taxact.com" target="_blank" rel="noopener noreferrer" className="hover:underline">TaxAct</a> - Tax preparation software</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Payment Processing</h3>
            <ul className="list-disc pl-5">
              <li><a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" className="hover:underline">PayPal</a> - Popular payment processor for online transactions</li>
              <li><a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Stripe</a> - Payment processing platform for online businesses</li>
              <li><a href="https://wise.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Wise</a> - International money transfers at low rates</li>
              <li><a href="https://www.payoneer.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Payoneer</a> - Global payment service for freelancers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}