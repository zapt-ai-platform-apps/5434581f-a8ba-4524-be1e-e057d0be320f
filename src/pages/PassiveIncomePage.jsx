import React from 'react';

export default function PassiveIncomePage() {
  const passiveIncomeIdeas = [
    {
      category: 'Digital Products',
      examples: [
        'E-books and digital guides',
        'Online courses',
        'Templates and printables',
        'Stock photography',
        'Software and apps',
        'Music and sound effects'
      ]
    },
    {
      category: 'Content Platforms',
      examples: [
        'YouTube channel (ad revenue)',
        'Blogging (affiliate marketing, ads)',
        'Podcasting (sponsorships)',
        'Print-on-demand merchandise'
      ]
    },
    {
      category: 'Investments',
      examples: [
        'Dividend stocks',
        'Index funds and ETFs',
        'Real estate (REITs)',
        'Bonds and treasury securities',
        'Cryptocurrency staking'
      ]
    },
    {
      category: 'Business Systems',
      examples: [
        'Dropshipping store',
        'Amazon FBA business',
        'Print-on-demand products',
        'Automated digital services',
        'Membership sites with recurring billing'
      ]
    },
    {
      category: 'Licensing & Royalties',
      examples: [
        'Book publishing royalties',
        'Patent licensing',
        'Music licensing',
        'Photography licensing'
      ]
    }
  ];

  return (
    <div className="container mx-auto">
      <h1>Passive Income: Make Money While You Sleep</h1>
      
      <div className="card">
        <h2>What is Passive Income?</h2>
        <p>
          Passive income refers to earnings that require minimal ongoing effort to maintain after the initial investment of time, money, or both. While truly "passive" income with zero effort is rare, these income streams typically require significantly less time than active income sources.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-blue-800 mb-1">Key Benefits:</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li>Freedom from trading time for money directly</li>
            <li>Ability to scale without proportional time investment</li>
            <li>Income continues during vacations or time off</li>
            <li>Opportunity to build multiple income streams</li>
            <li>Greater long-term financial security</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="font-medium mb-1">Important Reality Check:</p>
          <p>Most passive income sources require significant upfront work, investment, or both. They often take months or years to develop into meaningful income streams. The "passive" part typically comes after this initial phase.</p>
        </div>
      </div>
      
      <div className="card">
        <h2>Popular Passive Income Streams</h2>
        
        {passiveIncomeIdeas.map((category, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-xl font-semibold mb-3">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {category.examples.map((example, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  {example}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="card">
        <h2>Passive Income Myth vs. Reality</h2>
        
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Myth</th>
                <th className="py-2 px-4 border-b text-left">Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Passive income requires no work</td>
                <td className="py-2 px-4 border-b">Most passive income streams require significant upfront work and ongoing maintenance</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">You can get rich quick with passive income</td>
                <td className="py-2 px-4 border-b">Building substantial passive income typically takes months or years</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Anyone can create passive income easily</td>
                <td className="py-2 px-4 border-b">Success requires skills, knowledge, and often financial investment</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Passive income is completely hands-off</td>
                <td className="py-2 px-4 border-b">Most passive income sources require monitoring and periodic updates</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Once set up, passive income is guaranteed</td>
                <td className="py-2 px-4 border-b">Market changes, competition, and platform updates can affect income</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="card">
        <h2>Getting Started with Passive Income</h2>
        <ol className="list-decimal pl-5 mb-4">
          <li className="mb-2">
            <span className="font-medium">Assess your resources</span>
            <p className="text-gray-700">Consider your available time, skills, interests, and starting capital.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Choose the right approach</span>
            <p className="text-gray-700">Select passive income streams that align with your resources and goals.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Start small and learn</span>
            <p className="text-gray-700">Begin with one stream and master it before expanding to others.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Invest in quality</span>
            <p className="text-gray-700">Whether creating content or products, focus on delivering genuine value.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Be patient and persistent</span>
            <p className="text-gray-700">Passive income takes time to build - consistency is key.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Reinvest your earnings</span>
            <p className="text-gray-700">Use early income to improve and scale your passive income systems.</p>
          </li>
          <li>
            <span className="font-medium">Diversify gradually</span>
            <p className="text-gray-700">Once you've established one successful stream, begin building others.</p>
          </li>
        </ol>
      </div>
      
      <div className="card bg-green-50">
        <h2>Case Study: Digital Products</h2>
        <p className="mb-4">
          Creating and selling digital products is one of the most accessible forms of passive income. Here's a simplified roadmap:
        </p>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">1. Identify a profitable niche</h3>
          <p>Research markets where you have expertise and where people are willing to pay for solutions.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">2. Create a valuable product</h3>
          <p>Develop an e-book, course, template, or other digital product that solves a specific problem.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">3. Set up a sales system</h3>
          <p>Use platforms like Gumroad, Teachable, or your own website to sell your product.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">4. Market your product</h3>
          <p>Create content that attracts your target audience and drives them to your product.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">5. Collect feedback and improve</h3>
          <p>Use customer feedback to update and enhance your product over time.</p>
        </div>
      </div>
      
      <div className="card bg-yellow-50">
        <h2>Pro Tips for Passive Income Success</h2>
        <ul className="list-disc pl-5">
          <li>Focus on solving real problems people face</li>
          <li>Build an audience before launching products</li>
          <li>Create systems that can scale without your direct involvement</li>
          <li>Automate as many processes as possible</li>
          <li>Expect and plan for maintenance and updates</li>
          <li>Track metrics to understand what's working</li>
          <li>Don't quit your main income source until passive income is stable</li>
          <li>Seek tax advice to optimize your passive income strategy</li>
        </ul>
      </div>
    </div>
  );
}