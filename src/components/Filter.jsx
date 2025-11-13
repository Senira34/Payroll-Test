import React from 'react';
import { Search, Plus, Filter as FilterIcon, Users } from 'lucide-react';

const Filter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Employees</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Manage your workforce</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
          <Plus className="w-5 h-5" />
          <span>Add Employee</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search employees by name, ID, designation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-all"
          />
        </div>
        <select className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Display Name</option>
          <option>Employee No</option>
          <option>Department</option>
        </select>
        <button className="flex items-center space-x-2 px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-colors">
          <FilterIcon className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;