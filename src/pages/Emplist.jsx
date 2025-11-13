import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Actionbutton from '../components/Actionbutton';
import Emptable from '../components/Emptable';
import Pagination from '../components/Pagination';
import Cards from '../components/Cards';
import employeeService from '../services/employeeService';

const Emplist = ({ setCurrentPage }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [paginationPage, setPaginationPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch employees from service
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

  // Filter employees based on search
  const filteredEmployees = employees.filter(emp =>
    Object.values(emp).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
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
        
        {/* Header Section with Search */}
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage} />

        {/* Action Buttons */}
        <Actionbutton itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />

        {/* Table with Pagination */}
        <Emptable employees={currentEmployees} formatCurrency={formatCurrency} loading={loading} />
        <Pagination 
          currentPage={paginationPage}
          totalPages={totalPages}
          setCurrentPage={setPaginationPage}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          totalItems={filteredEmployees.length}
        />

        {/* Stats Cards */}
        <Cards employees={employees} formatCurrency={formatCurrency} />
      </div>
    </main>
  );
};

export default Emplist;