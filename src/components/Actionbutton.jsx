import React from 'react';
import { Settings, RefreshCw, Download } from 'lucide-react';

const Actionbutton = ({ itemsPerPage, setItemsPerPage }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors shadow-sm">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors shadow-sm">
          <RefreshCw className="w-4 h-4" />
          <span>Refresh</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors shadow-sm">
          <Download className="w-4 h-4" />
          <span>Excel</span>
        </button>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600 dark:text-gray-400">Rows per page:</span>
        <select 
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

export default Actionbutton;