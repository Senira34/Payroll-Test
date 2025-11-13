import React from 'react';
import { Settings, RefreshCw, Download } from 'lucide-react';

const Actionbutton = ({ itemsPerPage, setItemsPerPage }) => {
  return (
        <div className="flex items-center justify-between mb-2">
      <div className="flex flex-wrap items-center gap-2">
        <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors shadow-sm">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="flex items-center space-x-1 px-2.5 py-1.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium transition-colors shadow-sm text-xs">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
        <button className="flex items-center space-x-1 px-2.5 py-1.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium transition-colors shadow-sm text-xs">
          <Download className="w-4 h-4" />
          <span>Excel</span>
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-600 dark:text-gray-400">Rows per page:</span>
        <select 
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 text-xs"
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