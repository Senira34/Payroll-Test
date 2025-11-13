import React from 'react';

const Emptable = ({ employees, formatCurrency, loading }) => {
  return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto max-w-full">
          <table className="w-full min-w-max">
            <thead className="bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Employee No</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">EPF No</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Display Name</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">First Name</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Middle Name</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Last Name</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">NIC</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Mobile</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Designation</th>
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Basic Salary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {employees.map((employee) => (
                <tr 
                  key={employee.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  <td className="px-3 py-1.5 whitespace-nowrap">
                    <span className="font-medium text-blue-600 dark:text-blue-400 text-xs">{employee.empNo}</span>
                  </td>
                  <td className="px-3 py-1.5 whitespace-nowrap text-gray-700 dark:text-gray-300 text-xs">{employee.epfNo}</td>
                  <td className="px-3 py-1.5 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-[10px] font-semibold">
                        {employee.firstName[0]}{employee.lastName[0]}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-white text-xs">{employee.displayName}</span>
                    </div>
                  </td>
                  <td className="px-3 py-1.5 whitespace-nowrap text-gray-700 dark:text-gray-300 text-xs">{employee.firstName}</td>
                  <td className="px-3 py-1.5 whitespace-nowrap text-gray-700 dark:text-gray-300 text-xs">{employee.middleName}</td>
                  <td className="px-3 py-1.5 whitespace-nowrap text-gray-700 dark:text-gray-300 text-xs">{employee.lastName}</td>
                  <td className="px-3 py-1.5 whitespace-nowrap text-gray-700 dark:text-gray-300 text-xs">{employee.nic}</td>
                  <td className="px-3 py-1.5 whitespace-nowrap text-gray-700 dark:text-gray-300 text-xs">{employee.mobile}</td>
                  <td className="px-3 py-1.5 whitespace-nowrap">
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {employee.designation}
                    </span>
                  </td>
                  <td className="px-3 py-1.5 whitespace-nowrap font-semibold text-gray-800 dark:text-white text-xs">
                    {formatCurrency(employee.basicSalary)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Emptable;