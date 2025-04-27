import React from 'react';

export default function RemoteJobsPage() {
  const remoteJobBoards = [
    { name: 'We Work Remotely', description: 'One of the largest remote work communities in the world', link: 'https://weworkremotely.com' },
    { name: 'Remote.co', description: 'Curated list of remote jobs across various industries', link: 'https://remote.co' },
    { name: 'FlexJobs', description: 'Premium job board with vetted remote and flexible positions', link: 'https://www.flexjobs.com' },
    { name: 'Remotive', description: 'Hand-picked remote jobs, primarily in tech', link: 'https://remotive.io' },
    { name: 'Remote OK', description: 'Job board focused on remote work opportunities', link: 'https://remoteok.io' },
    { name: 'LinkedIn', description: 'Filter jobs by "Remote" location', link: 'https://www.linkedin.com/jobs' },
    { name: 'Indeed', description: 'Search for "remote" in the location field', link: 'https://www.indeed.com' }
  ];
  
  const remoteRoles = [
    'Software Developer/Engineer',
    'Customer Support Specialist',
    'Virtual Assistant',
    'Digital Marketer',
    'Content Writer',
    'Graphic Designer',
    'Project Manager',
    'Social Media Manager',
    'Sales Representative',
    'Data Analyst',
    'UI/UX Designer',
    'Recruiter/HR Specialist',
    'Accountant/Bookkeeper',
    'Product Manager',
    'Translator'
  ];
  
  return (
    <div className="container mx-auto">
      <h1>Remote Jobs: Work from Anywhere</h1>
      
      <div className="card">
        <h2>What are Remote Jobs?</h2>
        <p>
          Remote jobs are traditional employment positions that allow you to work from home or any location outside a company office. Unlike freelancing, remote jobs typically involve working for a single employer with a regular salary, benefits, and structured work hours.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-blue-800 mb-1">Key Benefits:</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li>Stable income with predictable payment schedule</li>
            <li>Employee benefits (healthcare, retirement plans, paid time off)</li>
            <li>Geographic freedom to live where you want</li>
            <li>No need to find clients or handle business administration</li>
            <li>Opportunity for career advancement within a company</li>
          </ul>
        </div>
      </div>
      
      <div className="card">
        <h2>Popular Remote Job Boards</h2>
        <p className="mb-4">
          These websites specialize in remote work opportunities:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Job Board</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Website</th>
              </tr>
            </thead>
            <tbody>
              {remoteJobBoards.map((board, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">{board.name}</td>
                  <td className="py-2 px-4 border-b">{board.description}</td>
                  <td className="py-2 px-4 border-b">
                    <a href={board.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
        <h2>Common Remote Job Categories</h2>
        <p className="mb-4">
          These roles are frequently available with remote work options:
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {remoteRoles.map((role, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              {role}
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h2>How to Land a Remote Job</h2>
        <ol className="list-decimal pl-5 mb-4">
          <li className="mb-2">
            <span className="font-medium">Update your resume and LinkedIn profile</span>
            <p className="text-gray-700">Highlight remote work experience, self-management skills, and digital communication abilities.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Develop relevant skills</span>
            <p className="text-gray-700">Focus on skills in demand for remote positions (technical skills, communication, time management).</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Create a dedicated home workspace</span>
            <p className="text-gray-700">Set up a professional background for video interviews and future meetings.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Search strategically</span>
            <p className="text-gray-700">Use specific remote job boards and set up alerts for relevant positions.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Prepare for remote interviews</span>
            <p className="text-gray-700">Practice video interviewing and be ready to discuss how you stay productive when working remotely.</p>
          </li>
          <li className="mb-2">
            <span className="font-medium">Highlight remote-specific skills</span>
            <p className="text-gray-700">Emphasize your ability to work independently, communicate effectively, and manage your time.</p>
          </li>
          <li>
            <span className="font-medium">Follow up professionally</span>
            <p className="text-gray-700">Send thoughtful follow-up emails after interviews to reiterate your interest and qualifications.</p>
          </li>
        </ol>
      </div>
      
      <div className="card bg-purple-50">
        <h2>Remote Work Challenges and Solutions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Common Challenges</h3>
            <ul className="list-disc pl-5">
              <li>Isolation and loneliness</li>
              <li>Distractions at home</li>
              <li>Difficulty separating work and personal life</li>
              <li>Communication hurdles with teammates</li>
              <li>Potential for overworking</li>
              <li>Technical issues without IT support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Effective Solutions</h3>
            <ul className="list-disc pl-5">
              <li>Join virtual coworking spaces and communities</li>
              <li>Create a dedicated workspace with minimal distractions</li>
              <li>Establish clear work hours and boundaries</li>
              <li>Overcommunicate and use collaboration tools effectively</li>
              <li>Set firm sign-off times and take regular breaks</li>
              <li>Develop basic troubleshooting skills and backup plans</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="card bg-yellow-50">
        <h2>Remote Work Readiness Checklist</h2>
        <ul className="list-disc pl-5">
          <li>Reliable high-speed internet connection</li>
          <li>Comfortable, ergonomic workspace</li>
          <li>Webcam and microphone for video calls</li>
          <li>Noise-cancelling headphones</li>
          <li>Task management system</li>
          <li>Knowledge of common collaboration tools (Slack, Zoom, etc.)</li>
          <li>Self-discipline and time management skills</li>
          <li>Communication skills (written and verbal)</li>
          <li>Technical troubleshooting abilities</li>
          <li>Backup work location (coffee shop, library, coworking space)</li>
        </ul>
      </div>
    </div>
  );
}