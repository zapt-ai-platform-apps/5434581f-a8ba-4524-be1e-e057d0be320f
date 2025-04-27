import React from 'react';

export default function ContentCreationPage() {
  const contentPlatforms = [
    {
      platform: 'YouTube',
      monetization: 'Ad revenue, channel memberships, Super Chat, merchandise shelf',
      audienceSize: 'Large (2+ billion monthly active users)',
      content: 'Video (tutorials, entertainment, vlogs, reviews)',
      barrier: 'High competition, 1000 subscribers and 4000 watch hours for monetization'
    },
    {
      platform: 'TikTok',
      monetization: 'Creator Fund, brand partnerships, TikTok Shop',
      audienceSize: 'Very large (1+ billion monthly active users)',
      content: 'Short-form video content',
      barrier: 'High competition, requires viral content for significant income'
    },
    {
      platform: 'Instagram',
      monetization: 'Brand partnerships, affiliate marketing, product sales',
      audienceSize: 'Very large (1+ billion monthly active users)',
      content: 'Photos, Reels, Stories, IGTV',
      barrier: 'Highly competitive, algorithm changes frequently'
    },
    {
      platform: 'Blogging',
      monetization: 'Advertising, affiliate marketing, sponsored posts, digital products',
      audienceSize: 'Varies by niche',
      content: 'Written articles, tutorials, reviews',
      barrier: 'Takes time to build traffic, SEO knowledge required'
    },
    {
      platform: 'Podcasting',
      monetization: 'Sponsorships, subscriptions (Patreon), advertising',
      audienceSize: 'Growing (155+ million weekly listeners in US)',
      content: 'Audio shows, interviews, storytelling',
      barrier: 'Audio quality important, consistent schedule needed'
    },
    {
      platform: 'Substack/Medium',
      monetization: 'Paid subscriptions, Medium Partner Program',
      audienceSize: 'Medium but growing',
      content: 'Written articles, newsletters',
      barrier: 'Need quality writing skills, consistent publishing'
    }
  ];

  return (
    <div className="container mx-auto">
      <h1>Content Creation: Building an Audience That Pays</h1>
      
      <div className="card">
        <h2>What is Content Creation?</h2>
        <p>
          Content creation involves producing valuable, entertaining, or educational material for online platforms. Once you build an audience, you can monetize your content through various methods including advertising, sponsorships, affiliate marketing, and product sales.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-blue-800 mb-1">Key Benefits:</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li>Low startup costs (often just need a phone or computer to begin)</li>
            <li>Can leverage existing skills and knowledge</li>
            <li>Building valuable digital assets that appreciate over time</li>
            <li>Potential for exponential growth with viral content</li>
            <li>Opens doors to additional opportunities (speaking, consulting, book deals)</li>
          </ul>
        </div>
      </div>
      
      <div className="card">
        <h2>Popular Content Platforms</h2>
        <p className="mb-4">
          Each platform has unique characteristics, audience demographics, and monetization methods:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Platform</th>
                <th className="py-2 px-4 border-b text-left">Monetization Methods</th>
                <th className="py-2 px-4 border-b text-left">Audience Size</th>
                <th className="py-2 px-4 border-b text-left">Content Type</th>
                <th className="py-2 px-4 border-b text-left">Barrier to Entry</th>
              </tr>
            </thead>
            <tbody>
              {contentPlatforms.map((platform, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">{platform.platform}</td>
                  <td className="py-2 px-4 border-b">{platform.monetization}</td>
                  <td className="py-2 px-4 border-b">{platform.audienceSize}</td>
                  <td className="py-2 px-4 border-b">{platform.content}</td>
                  <td className="py-2 px-4 border-b">{platform.barrier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="card">
        <h2>Content Monetization Methods</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Ad Revenue</h3>
            <p className="mb-2">Earn money when ads are displayed on or alongside your content.</p>
            <p className="text-sm text-gray-700">Examples: YouTube AdSense, display ads on blogs</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Sponsored Content</h3>
            <p className="mb-2">Create content featuring or mentioning brands that pay you.</p>
            <p className="text-sm text-gray-700">Examples: Instagram sponsored posts, YouTube brand deals</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Affiliate Marketing</h3>
            <p className="mb-2">Earn commissions by recommending products with special tracking links.</p>
            <p className="text-sm text-gray-700">Examples: Amazon Associates, ShareASale, impact.com</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Digital Products</h3>
            <p className="mb-2">Sell your own products to your audience.</p>
            <p className="text-sm text-gray-700">Examples: E-books, courses, templates, presets</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Memberships/Subscriptions</h3>
            <p className="mb-2">Offer premium content or perks for recurring payments.</p>
            <p className="text-sm text-gray-700">Examples: Patreon, YouTube Memberships, Substack</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Merchandise</h3>
            <p className="mb-2">Sell branded physical products to your audience.</p>
            <p className="text-sm text-gray-700">Examples: T-shirts, mugs, posters through print-on-demand</p>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2>Getting Started as a Content Creator</h2>
        <ol className="list-decimal pl-5 mb-4">
          <li className="mb-2">
            <span className="font-medium">Choose your niche and platform</span>
            <p className="text-gray-700">Select a topic you're knowledgeable and passionate about, and the platform that best suits that content.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Invest in basic equipment</span>
            <p className="text-gray-700">Start with what you have, but gradually improve your tools (camera, microphone, lighting, etc.).</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Create a content schedule</span>
            <p className="text-gray-700">Consistency is crucial - create a realistic publishing schedule you can maintain.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Focus on quality and value</span>
            <p className="text-gray-700">Prioritize creating content that genuinely helps, entertains, or informs your audience.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Study your analytics</span>
            <p className="text-gray-700">Learn what resonates with your audience and refine your approach based on data.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Engage with your audience</span>
            <p className="text-gray-700">Respond to comments, ask for feedback, and build a community around your content.</p>
          </li>
          <li>
            <span className="font-medium">Be patient and persistent</span>
            <p className="text-gray-700">Success rarely comes overnight - focus on consistent improvement and growth.</p>
          </li>
        </ol>
      </div>
      
      <div className="card bg-pink-50">
        <h2>Common Content Creator Challenges</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Consistency and Burnout</h3>
            <p>Creating quality content on a regular schedule is demanding. Pace yourself and batch-create content when possible to avoid burnout.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Algorithm Changes</h3>
            <p>Platforms frequently change their algorithms, affecting visibility. Diversify your platforms and focus on building direct connections with your audience.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Initial Growth Phase</h3>
            <p>The early stage can be discouraging with minimal engagement. Focus on improving your craft rather than metrics during this time.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Monetization Thresholds</h3>
            <p>Many platforms require minimum followers or views before monetization. Use this time to refine your content and explore alternative revenue streams.</p>
          </div>
        </div>
      </div>
      
      <div className="card bg-yellow-50">
        <h2>Pro Tips for Content Creation Success</h2>
        <ul className="list-disc pl-5">
          <li>Study successful creators in your niche but develop your unique voice</li>
          <li>Create content in series or themes to encourage return viewers</li>
          <li>Repurpose content across multiple platforms to maximize reach</li>
          <li>Build an email list to have direct access to your audience</li>
          <li>Collaborate with other creators to reach new audiences</li>
          <li>Don't wait for perfect conditions - start with what you have</li>
          <li>Focus on building true fans rather than vanity metrics</li>
          <li>Be authentic - audiences can detect insincerity</li>
        </ul>
      </div>
    </div>
  );
}