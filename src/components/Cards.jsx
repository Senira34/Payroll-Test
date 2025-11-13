import React from 'react';
import { Users, FileSpreadsheet } from 'lucide-react';

const Cards = ({ employees, formatCurrency }) => {
  const totalPayroll = employees.reduce((sum, emp) => sum + emp.basicSalary, 0);
  const averageSalary = employees.length > 0 ? totalPayroll / employees.length : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
      <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between mb-0.5">
          <Users className="w-5 h-5 opacity-80" />
          <span className="text-base font-bold">{employees.length}</span>
        </div>
        <p className="text-[10px] opacity-90">Total Employees</p>
      </div>
      <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between mb-0.5">
          <FileSpreadsheet className="w-5 h-5 opacity-80" />
          <span className="text-base font-bold">8</span>
        </div>
        <p className="text-[10px] opacity-90">Departments</p>
      </div>
      <div className="bg-linear-to-br from-green-500 to-green-600 rounded-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-lg">💰</span>
          <span className="text-base font-bold">{formatCurrency(totalPayroll)}</span>
        </div>
        <p className="text-[10px] opacity-90">Total Payroll</p>
      </div>
      <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-lg">📊</span>
          <span className="text-base font-bold">{formatCurrency(averageSalary)}</span>
        </div>
        <p className="text-[10px] opacity-90">Average Salary</p>
      </div>
    </div>
  );
};

export default Cards;