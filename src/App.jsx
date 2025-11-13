import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Emplist from './pages/Emplist';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />

        <div className="flex">
        
          <Sidebar sidebarOpen={sidebarOpen} />

          
          <Emplist />
        </div>

       
        <Footer />
      </div>
    </div>
  );
};

export default App;