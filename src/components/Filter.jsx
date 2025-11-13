import React from 'react';
import { Search, Plus, Filter as FilterIcon, Users } from 'lucide-react';

const Filter = ({ searchTerm, setSearchTerm, setCurrentPage }) => {
  return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 mb-2 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 md:mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-linear-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Employees</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Manage your workforce</p>
          </div>
        </div>
                <button 
          onClick={() => setCurrentPage('empreg')}
          className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
        >
          <Plus className="w-5 h-5" />
          <span>Add Employee</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search employees by name, ID, designation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-all text-sm"
          />
        </div>
        <select className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
          <option>Display Name</option>
          <option>Employee No</option>
          <option>Department</option>
        </select>
        <button className="flex items-center space-x-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors text-sm">
          <FilterIcon className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;