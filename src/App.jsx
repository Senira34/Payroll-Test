import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Emplist from './pages/Emplist';
import Empreg from './pages/Empreg';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('emplist');

  return (
    <div className={`h-screen ${darkMode ? 'dark' : ''} overflow-hidden`}>
      <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 flex flex-col">
        
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />

        <div className="flex flex-1 overflow-hidden">
        
          <Sidebar sidebarOpen={sidebarOpen} setCurrentPage={setCurrentPage} />

          {currentPage === 'emplist' ? <Emplist setCurrentPage={setCurrentPage} /> : <Empreg setCurrentPage={setCurrentPage} />}
        </div>

       
        <Footer />
      </div>
    </div>
  );
};

export default App;