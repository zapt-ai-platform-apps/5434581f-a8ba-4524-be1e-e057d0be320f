import React from 'react';

export default function GettingStartedPage() {
  const assessmentQuestions = [
    {
      question: "What are your primary goals for earning online?",
      options: [
        "Replace full-time income",
        "Generate supplemental income",
        "Build a business asset",
        "Gain more flexibility in work schedule",
        "Develop new skills"
      ]
    },
    {
      question: "How much time can you devote weekly to online earning?",
      options: [
        "Less than 5 hours",
        "5-10 hours",
        "10-20 hours",
        "20-40 hours",
        "40+ hours"
      ]
    },
    {
      question: "What startup capital do you have available?",
      options: [
        "None or very little ($0-100)",
        "Small budget ($100-500)",
        "Moderate budget ($500-2,000)",
        "Substantial budget ($2,000-10,000)",
        "Significant investment capital ($10,000+)"
      ]
    },
    {
      question: "Which skills do you already possess? (Select all that apply)",
      options: [
        "Writing/Content creation",
        "Design/Creative skills",
        "Technical/Programming",
        "Marketing/Sales",
        "Administrative/Organization",
        "Teaching/Coaching",
        "Financial/Analytical"
      ]
    },
    {
      question: "What is your risk tolerance level?",
      options: [
        "Very low (need guaranteed income)",
        "Low (prefer stable, predictable earnings)",
        "Moderate (willing to accept some uncertainty)",
        "High (comfortable with significant fluctuation)",
        "Very high (willing to take big risks for big rewards)"
      ]
    }
  ];

  const pathways = [
    {
      path: "Quick Start: Freelancing",
      description: "Start earning quickly by offering services based on your existing skills",
      timeFrame: "Can start earning in 1-4 weeks",
      suitable: "Those who need immediate income and have marketable skills",
      steps: [
        "Identify your marketable skills",
        "Create profiles on 1-2 freelance platforms",
        "Develop a simple portfolio",
        "Set competitive starting rates",
        "Begin applying to relevant projects",
        "Deliver quality work and build reviews",
        "Gradually increase rates as you gain experience"
      ]
    },
    {
      path: "Steady Build: Content Creation",
      description: "Build valuable content assets that generate income over time",
      timeFrame: "3-12 months to significant income",
      suitable: "Those who can invest time upfront for growing returns later",
      steps: [
        "Choose your content niche and platform",
        "Create a content calendar and publishing schedule",
        "Consistently produce high-quality content",
        "Build your audience through engagement and promotion",
        "Implement initial monetization (ads, affiliates)",
        "Add additional revenue streams (products, sponsorships)",
        "Scale by repurposing content across platforms"
      ]
    },
    {
      path: "Long Game: Online Business",
      description: "Develop a scalable business model with higher long-term potential",
      timeFrame: "6-18 months to sustainable income",
      suitable: "Those seeking to build a valuable business asset with growth potential",
      steps: [
        "Research and validate business ideas",
        "Develop a minimum viable product/service",
        "Create your business infrastructure",
        "Acquire initial customers through targeted marketing",
        "Gather feedback and improve your offering",
        "Develop systems to scale operations",
        "Reinvest profits for continued growth"
      ]
    }
  ];

  return (
    <div className="container mx-auto">
      <h1>Getting Started: Your Online Earning Journey</h1>
      
      <div className="card bg-blue-100 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-8/12">
            <h2 className="text-2xl font-bold mb-3">Welcome to Your Online Earning Journey</h2>
            <p className="mb-4">
              Whether you're looking to replace your full-time income, earn extra money on the side, or build a scalable business, this guide will help you find the right path forward. Every successful online earner started exactly where you are now.
            </p>
            <p>
              This page will help you assess your situation, choose the right earning method, and create an actionable plan to start generating income online.
            </p>
          </div>
          <div className="w-full md:w-4/12 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2>Step 1: Self-Assessment</h2>
        <p className="mb-4">
          Before choosing an online earning method, it's important to understand your personal situation, goals, and resources. Consider these key factors:
        </p>
        
        <div className="space-y-6 mb-4">
          {assessmentQuestions.map((question, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg mb-2">{question.question}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {question.options.map((option, idx) => (
                  <div key={idx} className="flex items-center">
                    <input 
                      type={question.question.includes("all that apply") ? "checkbox" : "radio"} 
                      name={`question-${index}`} 
                      id={`option-${index}-${idx}`} 
                      className="mr-2"
                    />
                    <label htmlFor={`option-${index}-${idx}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-gray-600 italic">
          Note: This self-assessment is for your personal reflection and is not stored or processed.
        </p>
      </div>
      
      <div className="card">
        <h2>Step 2: Choose Your Path</h2>
        <p className="mb-6">
          Based on your self-assessment, consider which of these common pathways aligns best with your situation:
        </p>
        
        <div className="space-y-6">
          {pathways.map((path, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-semibold">{path.path}</h3>
              </div>
              <div className="p-4">
                <p className="mb-3">{path.description}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-medium">Time Frame:</span> {path.timeFrame}
                  </div>
                  <div>
                    <span className="font-medium">Best For:</span> {path.suitable}
                  </div>
                </div>
                
                <h4 className="font-medium mb-2">Action Steps:</h4>
                <ol className="list-decimal pl-5">
                  {path.steps.map((step, idx) => (
                    <li key={idx} className="mb-1">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h2>Step 3: Create Your Action Plan</h2>
        <p className="mb-4">
          Now that you've considered different paths, it's time to create a personalized action plan:
        </p>
        
        <div className="bg-gray-50 p-5 rounded-lg mb-6">
          <h3 className="font-semibold mb-3">Your 30-Day Quick Start Plan</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Week 1: Research & Preparation</h4>
              <ul className="list-disc pl-5">
                <li>Choose one primary earning method to focus on</li>
                <li>Research the specific skills and tools required</li>
                <li>Set specific, measurable goals for your first month</li>
                <li>Create accounts on necessary platforms</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Week 2: Foundation Building</h4>
              <ul className="list-disc pl-5">
                <li>Develop your initial portfolio, listing, or content</li>
                <li>Set up your workspace and necessary tools</li>
                <li>Connect with communities in your chosen field</li>
                <li>Start learning specific skills you need to improve</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Week 3: First Steps</h4>
              <ul className="list-disc pl-5">
                <li>Take your first active steps (apply for jobs, publish content, etc.)</li>
                <li>Implement feedback and make improvements</li>
                <li>Track your progress and identify obstacles</li>
                <li>Connect with potential clients, customers, or collaborators</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Week 4: Evaluation & Expansion</h4>
              <ul className="list-disc pl-5">
                <li>Assess your progress against your initial goals</li>
                <li>Identify what's working and what isn't</li>
                <li>Adjust your approach based on early results</li>
                <li>Set goals for the next 60 days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-yellow-50">
        <h2>Common Beginner Mistakes to Avoid</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Trying Too Many Things at Once</h3>
            <p>Focus on mastering one earning method before diversifying. Splitting your attention reduces your chances of success in any area.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Expecting Overnight Success</h3>
            <p>Most online earning methods take time to generate significant income. Set realistic expectations and celebrate small wins.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Perfectionism Paralysis</h3>
            <p>Don't wait for perfect conditions or perfect skills. Start with what you have and improve as you go.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">No Clear Financial Goals</h3>
            <p>Set specific income targets and track your progress. Without clear goals, it's easy to lose motivation.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Undervaluing Your Time</h3>
            <p>Calculate your effective hourly rate for any opportunity. Some "easy money" methods pay too little for the time investment.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Neglecting Legal/Tax Obligations</h3>
            <p>Research the legal and tax requirements for your earning method early on to avoid surprises later.</p>
          </div>
        </div>
      </div>
      
      <div className="card bg-green-50">
        <h2>Final Thoughts: The Mindset for Success</h2>
        <p className="mb-4">
          Beyond strategies and tactics, developing the right mindset is crucial for long-term success in online earning:
        </p>
        <ul className="list-disc pl-5">
          <li><span className="font-medium">Persistence beats talent.</span> Many give up right before breakthrough. Consistent effort over time is the most reliable path to success.</li>
          <li><span className="font-medium">Failure is feedback, not defeat.</span> Every unsuccessful attempt provides valuable information for your next try.</li>
          <li><span className="font-medium">Focus on value creation.</span> The more value you provide to others, the more sustainable your income will be.</li>
          <li><span className="font-medium">Invest in your skills.</span> Your knowledge and abilities are your most valuable assets in the digital economy.</li>
          <li><span className="font-medium">Build relationships.</span> Connections with others in your field can lead to opportunities, partnerships, and support.</li>
        </ul>
        <div className="mt-6 text-center">
          <p className="font-medium text-lg">Ready to get started? Select a specific earning method from the sidebar to learn more!</p>
        </div>
      </div>
    </div>
  );
}