import React from 'react';
import { Grid, FileSpreadsheet, Users, Settings } from 'lucide-react';

const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-gradient-to-b from-blue-600 to-purple-700 dark:from-gray-800 dark:to-gray-900 min-h-screen shadow-xl`}>
      <div className="p-6 space-y-2">
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <Grid className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <FileSpreadsheet className="w-5 h-5" />
          <span className="font-medium">Registrations</span>
        </a>
        
        <div className="pt-2">
          <p className="text-white/60 text-xs font-semibold px-4 pb-2">EMPLOYEE MANAGEMENT</p>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white/20 text-white transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Employee</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
            <FileSpreadsheet className="w-5 h-5" />
            <span className="font-medium">Salary Master</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Manage Teams</span>
          </a>
        </div>

        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <Users className="w-5 h-5" />
          <span className="font-medium">Attendance</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <FileSpreadsheet className="w-5 h-5" />
          <span className="font-medium">Leave Management</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <FileSpreadsheet className="w-5 h-5" />
          <span className="font-medium">Salary Management</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-medium">System Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;