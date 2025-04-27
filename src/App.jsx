import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FreelancingPage from './pages/FreelancingPage';
import RemoteJobsPage from './pages/RemoteJobsPage';
import PassiveIncomePage from './pages/PassiveIncomePage';
import ContentCreationPage from './pages/ContentCreationPage';
import OnlineBusinessPage from './pages/OnlineBusinessPage';
import ResourcesPage from './pages/ResourcesPage';
import GettingStartedPage from './pages/GettingStartedPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'freelancing':
        return <FreelancingPage />;
      case 'remote-jobs':
        return <RemoteJobsPage />;
      case 'passive-income':
        return <PassiveIncomePage />;
      case 'content-creation':
        return <ContentCreationPage />;
      case 'online-business':
        return <OnlineBusinessPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'getting-started':
        return <GettingStartedPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <main className="flex-1 p-4 md:p-6 pt-20">
          {renderPage()}
        </main>
      </div>
      <Footer />
    </div>
  );
}