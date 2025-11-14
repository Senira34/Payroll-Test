import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Actionbutton from '../components/Actionbutton';
import Emptable from '../components/Emptable';
import Pagination from '../components/Pagination';
import Cards from '../components/Cards';
import employeeService from '../services/employeeService';
import employeeData from '../data/employees.json';

const Emplist = ({ setCurrentPage }) => {
  const [employees, setEmployees] = useState(employeeData);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [paginationPage, setPaginationPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch employees 
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const data = await employeeService.getAllEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter 
  const filteredEmployees = employees.filter(emp =>
    Object.values(emp).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination 
  const indexOfLastItem = paginationPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden p-3">
      <div className="w-full mx-auto">
        
        {/* Filter Component call */}
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage} />

        {/* Actionbutton Component call */}
        <Actionbutton itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />

        {/* table Component call */}
        <Emptable employees={currentEmployees} formatCurrency={formatCurrency} loading={loading} />
        <Pagination 
          currentPage={paginationPage}
          totalPages={totalPages}
          setCurrentPage={setPaginationPage}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          totalItems={filteredEmployees.length}
        />

        {/* Cards Component call */}
        <Cards employees={employees} formatCurrency={formatCurrency} />
      </div>
    </main>
  );
};

export default Emplist;