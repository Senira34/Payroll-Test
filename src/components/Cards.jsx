import React from 'react';
import { Users, FileSpreadsheet } from 'lucide-react';

const Cards = ({ employees, formatCurrency }) => {
  const totalPayroll = employees.reduce((sum, emp) => sum + emp.basicSalary, 0);
  const averageSalary = employees.length > 0 ? totalPayroll / employees.length : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <Users className="w-8 h-8 opacity-80" />
          <span className="text-2xl font-bold">{employees.length}</span>
        </div>
        <p className="text-sm opacity-90">Total Employees</p>
      </div>
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <FileSpreadsheet className="w-8 h-8 opacity-80" />
          <span className="text-2xl font-bold">8</span>
        </div>
        <p className="text-sm opacity-90">Departments</p>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">💰</span>
          <span className="text-2xl font-bold">{formatCurrency(totalPayroll)}</span>
        </div>
        <p className="text-sm opacity-90">Total Payroll</p>
      </div>
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">📊</span>
          <span className="text-2xl font-bold">{formatCurrency(averageSalary)}</span>
        </div>
        <p className="text-sm opacity-90">Average Salary</p>
      </div>
    </div>
  );
};

export default Cards;