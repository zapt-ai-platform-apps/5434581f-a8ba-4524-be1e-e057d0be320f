import React from 'react';

export default function FreelancingPage() {
  const platforms = [
    { name: 'Upwork', description: 'Largest freelance marketplace with opportunities in various fields', link: 'https://www.upwork.com' },
    { name: 'Fiverr', description: 'Popular platform for selling packaged services (or "gigs")', link: 'https://www.fiverr.com' },
    { name: 'Freelancer', description: 'Global marketplace with millions of projects posted', link: 'https://www.freelancer.com' },
    { name: 'Toptal', description: 'Exclusive network for the top 3% of freelance talent', link: 'https://www.toptal.com' },
    { name: 'PeoplePerHour', description: 'UK-based platform with global opportunities', link: 'https://www.peopleperhour.com' }
  ];

  const skills = [
    { category: 'Writing', examples: 'Content writing, copywriting, technical writing, ghostwriting, editing' },
    { category: 'Design', examples: 'Graphic design, UI/UX design, web design, logo design, illustration' },
    { category: 'Development', examples: 'Web development, mobile app development, software engineering, WordPress' },
    { category: 'Marketing', examples: 'Social media management, SEO, email marketing, content marketing' },
    { category: 'Administrative', examples: 'Virtual assistance, data entry, customer service, research' },
    { category: 'Creative', examples: 'Video editing, animation, voice-over, music production' }
  ];

  return (
    <div className="container mx-auto">
      <h1>Freelancing: Your Skills, Your Business</h1>
      
      <div className="card">
        <h2>What is Freelancing?</h2>
        <p>
          Freelancing involves offering your skills and services to clients on a project-by-project basis, without committing to a single employer. As a freelancer, you're essentially running your own business, setting your rates, choosing your clients, and managing your workload.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-blue-800 mb-1">Key Benefits:</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li>Work on your own schedule and from anywhere</li>
            <li>Choose projects that interest you</li>
            <li>Set your own rates and increase them as you gain experience</li>
            <li>Build a diverse portfolio across different industries</li>
            <li>Scale your business by taking on more clients or subcontracting</li>
          </ul>
        </div>
      </div>
      
      <div className="card">
        <h2>Popular Freelance Skills</h2>
        <p className="mb-4">
          Almost any skill can be offered as a freelance service. Here are some of the most in-demand categories:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-1">{skill.category}</h3>
              <p className="text-gray-600 text-sm">{skill.examples}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h2>Popular Freelance Platforms</h2>
        <p className="mb-4">
          These platforms connect freelancers with clients, handle payments, and provide a structured way to find work:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Platform</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Website</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((platform, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">{platform.name}</td>
                  <td className="py-2 px-4 border-b">{platform.description}</td>
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
        <h2>Getting Started as a Freelancer</h2>
        <ol className="list-decimal pl-5 mb-4">
          <li className="mb-2">
            <span className="font-medium">Identify your marketable skills</span>
            <p className="text-gray-700">Determine what services you can offer based on your experience, education, and skills.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Create a portfolio</span>
            <p className="text-gray-700">Collect examples of your work to showcase your capabilities to potential clients.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Set up profiles on freelance platforms</span>
            <p className="text-gray-700">Create detailed profiles highlighting your skills, experience, and portfolio.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Determine your rates</span>
            <p className="text-gray-700">Research market rates for your skills and set prices competitively (especially when starting).</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Start applying for jobs</span>
            <p className="text-gray-700">Begin with smaller projects to build your reputation and gather positive reviews.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Deliver quality work</span>
            <p className="text-gray-700">Focus on exceeding client expectations to earn repeat business and referrals.</p>
          </li>
          <li>
            <span className="font-medium">Expand your client base</span>
            <p className="text-gray-700">As you gain experience, seek higher-paying clients and consider specializing in a niche.</p>
          </li>
        </ol>
      </div>
      
      <div className="card bg-yellow-50">
        <h2>Pro Tips for Freelance Success</h2>
        <ul className="list-disc pl-5">
          <li>Over-communicate with clients to ensure expectations are clear</li>
          <li>Always deliver work on time or ahead of schedule</li>
          <li>Don't undervalue your services - low prices often signal low quality</li>
          <li>Learn to identify and avoid problematic clients</li>
          <li>Set aside money for taxes and create a simple bookkeeping system</li>
          <li>Continuously develop your skills to stay competitive</li>
          <li>Network with other freelancers for support and potential collaborations</li>
        </ul>
      </div>
    </div>
  );
}