import React from 'react';
import { Grid, FileSpreadsheet, Users, Settings } from 'lucide-react';

const Sidebar = ({ sidebarOpen, setCurrentPage }) => {
  return (
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-linear-to-b from-blue-600 to-purple-700 dark:from-gray-800 dark:to-gray-900 h-full shadow-xl`}>
            <div className="p-4 space-y-1.5 h-full overflow-y-auto">
        <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm">
          <Grid className="w-4 h-4" />
          <span className="font-medium">Dashboard</span>
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentPage('empreg'); }}
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span className="font-medium">Registrations</span>
        </a>
        
        <div className="pt-1">
          <p className="text-white/60 text-xs font-semibold px-3 pb-1">EMPLOYEE MANAGEMENT</p>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentPage('emplist'); }}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-white/20 text-white transition-colors text-sm"
          >
            <Users className="w-4 h-4" />
            <span className="font-medium">Employee</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm">
            <FileSpreadsheet className="w-4 h-4" />
            <span className="font-medium">Salary Master</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm">
            <Users className="w-4 h-4" />
            <span className="font-medium">Manage Teams</span>
          </a>
        </div>

        <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm">
          <Users className="w-4 h-4" />
          <span className="font-medium">Attendance</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm">
          <FileSpreadsheet className="w-4 h-4" />
          <span className="font-medium">Leave Management</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm">
          <FileSpreadsheet className="w-4 h-4" />
          <span className="font-medium">Salary Management</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm">
          <Settings className="w-4 h-4" />
          <span className="font-medium">System Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;