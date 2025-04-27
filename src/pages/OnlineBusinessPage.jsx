import React from 'react';

export default function OnlineBusinessPage() {
  const businessModels = [
    {
      model: 'E-commerce',
      description: 'Selling physical products online through your own store or marketplaces',
      examples: 'Shopify store, Amazon FBA, Etsy shop',
      startupCost: 'Medium to High',
      scalability: 'High',
      timeCommitment: 'High'
    },
    {
      model: 'SaaS (Software as a Service)',
      description: 'Creating subscription-based software that solves specific problems',
      examples: 'Project management tools, email marketing platforms, design tools',
      startupCost: 'High',
      scalability: 'Very High',
      timeCommitment: 'Very High'
    },
    {
      model: 'Digital Products',
      description: 'Creating and selling downloadable items or online access to content',
      examples: 'Courses, templates, e-books, membership sites',
      startupCost: 'Low to Medium',
      scalability: 'High',
      timeCommitment: 'Medium'
    },
    {
      model: 'Subscription Box',
      description: 'Curated physical products delivered regularly to subscribers',
      examples: 'Beauty boxes, meal kits, book subscriptions',
      startupCost: 'High',
      scalability: 'Medium',
      timeCommitment: 'High'
    },
    {
      model: 'Agency/Service Business',
      description: 'Providing specialized services to other businesses or individuals',
      examples: 'Marketing agency, web development, consulting',
      startupCost: 'Low',
      scalability: 'Medium',
      timeCommitment: 'High'
    },
    {
      model: 'Online Marketplace',
      description: 'Platform connecting buyers and sellers, taking a commission on transactions',
      examples: 'Specialized niche marketplaces, service marketplaces',
      startupCost: 'High',
      scalability: 'Very High',
      timeCommitment: 'Very High'
    }
  ];

  const ecommerceOptions = [
    {
      option: 'Dropshipping',
      description: 'Sell products that are shipped directly from suppliers to customers without handling inventory',
      pros: 'Low startup costs, no inventory management, easy to test products',
      cons: 'Lower profit margins, less control over fulfillment, highly competitive'
    },
    {
      option: 'Private Label',
      description: 'Source generic products and sell them under your own brand',
      pros: 'Better margins, brand building, more control over product',
      cons: 'Higher startup costs, inventory risk, longer lead times'
    },
    {
      option: 'Handmade/Craft',
      description: 'Create and sell your own handmade products',
      pros: 'High product differentiation, passionate customers, creative fulfillment',
      cons: 'Limited scalability, time-intensive, materials costs'
    },
    {
      option: 'Print-on-Demand',
      description: 'Design products that are printed and shipped when ordered',
      pros: 'No inventory, creative control, easy to start',
      cons: 'Lower profit margins, limited product types, quality control challenges'
    },
    {
      option: 'Wholesale/Retail',
      description: 'Buy products in bulk at wholesale prices and sell at retail prices',
      pros: 'Established products, better margins with scale, more control',
      cons: 'Higher upfront costs, inventory management, storage needs'
    }
  ];

  return (
    <div className="container mx-auto">
      <h1>Online Business: Build Your Digital Empire</h1>
      
      <div className="card">
        <h2>What is an Online Business?</h2>
        <p>
          An online business is a venture that operates primarily or entirely through the internet. These businesses can sell products, services, or digital assets, and often have lower overhead costs than traditional brick-and-mortar operations. While they offer tremendous flexibility and scalability, they also require dedication, strategy, and persistence to succeed.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-blue-800 mb-1">Key Benefits:</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li>Global reach and 24/7 operation without geographical constraints</li>
            <li>Lower startup and operational costs than traditional businesses</li>
            <li>Ability to automate and scale more efficiently</li>
            <li>Flexibility in working location and hours</li>
            <li>Access to detailed analytics to optimize business performance</li>
          </ul>
        </div>
      </div>
      
      <div className="card">
        <h2>Popular Online Business Models</h2>
        <p className="mb-4">
          Different models have varying requirements, risks, and potential returns:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Business Model</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Examples</th>
                <th className="py-2 px-4 border-b text-left">Startup Cost</th>
                <th className="py-2 px-4 border-b text-left">Scalability</th>
                <th className="py-2 px-4 border-b text-left">Time Commitment</th>
              </tr>
            </thead>
            <tbody>
              {businessModels.map((model, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">{model.model}</td>
                  <td className="py-2 px-4 border-b">{model.description}</td>
                  <td className="py-2 px-4 border-b">{model.examples}</td>
                  <td className="py-2 px-4 border-b">{model.startupCost}</td>
                  <td className="py-2 px-4 border-b">{model.scalability}</td>
                  <td className="py-2 px-4 border-b">{model.timeCommitment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="card">
        <h2>E-commerce Deep Dive</h2>
        <p className="mb-4">
          E-commerce is one of the most popular online business models. Here are different approaches:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">E-commerce Type</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Pros</th>
                <th className="py-2 px-4 border-b text-left">Cons</th>
              </tr>
            </thead>
            <tbody>
              {ecommerceOptions.map((option, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">{option.option}</td>
                  <td className="py-2 px-4 border-b">{option.description}</td>
                  <td className="py-2 px-4 border-b">{option.pros}</td>
                  <td className="py-2 px-4 border-b">{option.cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Popular E-commerce Platforms</h3>
          <ul className="list-disc pl-5">
            <li><span className="font-medium">Shopify</span> - All-in-one platform for creating your own store ($29-299/month)</li>
            <li><span className="font-medium">WooCommerce</span> - Free WordPress plugin (hosting and payment processing costs apply)</li>
            <li><span className="font-medium">Amazon</span> - Marketplace with built-in audience (fees: $0.99 per item or $39.99/month plus referral fees)</li>
            <li><span className="font-medium">Etsy</span> - Marketplace for handmade, vintage, and unique items (listing fee: $0.20 per item plus transaction fees)</li>
            <li><span className="font-medium">eBay</span> - Auction and fixed-price marketplace (insertion fees and final value fees apply)</li>
          </ul>
        </div>
      </div>
      
      <div className="card">
        <h2>Starting an Online Business</h2>
        <ol className="list-decimal pl-5 mb-4">
          <li className="mb-2">
            <span className="font-medium">Identify a viable business idea</span>
            <p className="text-gray-700">Research market demand, competition, and potential profitability.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Validate your idea</span>
            <p className="text-gray-700">Test market interest before investing heavily (landing pages, pre-sales, MVP).</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Create a business plan</span>
            <p className="text-gray-700">Outline your target market, revenue model, marketing strategy, and startup costs.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Handle legal requirements</span>
            <p className="text-gray-700">Register your business, get necessary licenses, understand tax obligations.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Build your online presence</span>
            <p className="text-gray-700">Create your website, social media profiles, and other digital assets.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Set up operations</span>
            <p className="text-gray-700">Establish supply chains, payment processing, inventory systems (if needed).</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Launch marketing campaigns</span>
            <p className="text-gray-700">Implement strategies to attract your target customers (SEO, ads, content marketing).</p>
          </li>
          <li>
            <span className="font-medium">Gather feedback and iterate</span>
            <p className="text-gray-700">Continuously improve based on customer feedback and performance data.</p>
          </li>
        </ol>
      </div>
      
      <div className="card bg-indigo-50">
        <h2>Essential Online Business Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Website & Hosting</h3>
            <ul className="list-disc pl-5">
              <li>Shopify, WordPress, Wix</li>
              <li>Bluehost, SiteGround, Hostinger</li>
              <li>Cloudflare (security)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Marketing & SEO</h3>
            <ul className="list-disc pl-5">
              <li>Google Analytics, Hotjar</li>
              <li>Mailchimp, ConvertKit</li>
              <li>SEMrush, Ahrefs</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Payment Processing</h3>
            <ul className="list-disc pl-5">
              <li>Stripe, PayPal</li>
              <li>Square, Shopify Payments</li>
              <li>Cryptocurrency options</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Customer Service</h3>
            <ul className="list-disc pl-5">
              <li>Zendesk, Intercom</li>
              <li>Freshdesk, Help Scout</li>
              <li>Live chat solutions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Productivity & Management</h3>
            <ul className="list-disc pl-5">
              <li>Asana, Trello, ClickUp</li>
              <li>G Suite, Microsoft 365</li>
              <li>Zoom, Slack</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Accounting & Legal</h3>
            <ul className="list-disc pl-5">
              <li>QuickBooks, Xero, Wave</li>
              <li>LegalZoom, Rocket Lawyer</li>
              <li>Tax preparation software</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="card bg-yellow-50">
        <h2>Common Online Business Challenges</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Finding Product-Market Fit</h3>
            <p>Many businesses fail because they don't solve a real problem or meet a genuine need. Thoroughly research and validate your idea before scaling.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Standing Out From Competition</h3>
            <p>Online markets are often saturated. Develop a unique value proposition and strong brand identity to differentiate yourself.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Traffic and Customer Acquisition</h3>
            <p>Getting website visitors and converting them to customers is challenging. Develop a multi-channel marketing strategy.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Cash Flow Management</h3>
            <p>Managing expenses, inventory costs, and irregular income can be difficult. Maintain sufficient cash reserves and watch metrics closely.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Scaling Operations</h3>
            <p>Growing beyond your initial capacity presents logistical challenges. Build systems and processes that can scale with your business.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Staying Current</h3>
            <p>Online business landscapes change rapidly. Stay informed about industry trends, technology changes, and evolving customer preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}