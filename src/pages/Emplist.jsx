import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Actionbutton from '../components/Actionbutton';
import Emptable from '../components/Emptable';
import Pagination from '../components/Pagination';
import Cards from '../components/Cards';

// Mock data service to simulate API calls
const mockEmployeeData = [
  {
    id: 1,
    empNo: 'EMP001',
    epfNo: '010871',
    displayName: 'John Anderson',
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Anderson',
    nic: '198512345V',
    mobile: '+94 77 123 4567',
    mobile2: '+94 71 234 5678',
    address: '123 Main St, Colombo 03',
    designation: 'Senior Developer',
    basicSalary: 150000,
    dailySalary: 5000,
    budgetAllowance: 25000,
    incentive: 15000,
    specialIncentive: 10000,
    department: 'IT'
  },
  {
    id: 2,
    empNo: 'EMP002',
    epfNo: '010872',
    displayName: 'Sarah Williams',
    firstName: 'Sarah',
    middleName: 'Jane',
    lastName: 'Williams',
    nic: '199012346V',
    mobile: '+94 77 234 5678',
    mobile2: '+94 71 345 6789',
    address: '456 Park Ave, Kandy',
    designation: 'HR Manager',
    basicSalary: 120000,
    dailySalary: 4000,
    budgetAllowance: 20000,
    incentive: 12000,
    specialIncentive: 8000,
    department: 'HR'
  },
  {
    id: 3,
    empNo: 'EMP003',
    epfNo: '010873',
    displayName: 'Michael Brown',
    firstName: 'Michael',
    middleName: 'Robert',
    lastName: 'Brown',
    nic: '198812347V',
    mobile: '+94 77 345 6789',
    mobile2: '+94 71 456 7890',
    address: '789 Lake Rd, Galle',
    designation: 'Accountant',
    basicSalary: 100000,
    dailySalary: 3500,
    budgetAllowance: 18000,
    incentive: 10000,
    specialIncentive: 5000,
    department: 'Finance'
  },
  {
    id: 4,
    empNo: 'EMP004',
    epfNo: '010874',
    displayName: 'Emily Davis',
    firstName: 'Emily',
    middleName: 'Rose',
    lastName: 'Davis',
    nic: '199212348V',
    mobile: '+94 77 456 7890',
    mobile2: '+94 71 567 8901',
    address: '321 Beach Rd, Negombo',
    designation: 'Marketing Executive',
    basicSalary: 90000,
    dailySalary: 3000,
    budgetAllowance: 15000,
    incentive: 8000,
    specialIncentive: 4000,
    department: 'Marketing'
  },
  {
    id: 5,
    empNo: 'EMP005',
    epfNo: '010875',
    displayName: 'David Wilson',
    firstName: 'David',
    middleName: 'James',
    lastName: 'Wilson',
    nic: '198712349V',
    mobile: '+94 77 567 8901',
    mobile2: '+94 71 678 9012',
    address: '654 Hill St, Matara',
    designation: 'Operations Manager',
    basicSalary: 130000,
    dailySalary: 4500,
    budgetAllowance: 22000,
    incentive: 13000,
    specialIncentive: 9000,
    department: 'Operations'
  },
  {
    id: 6,
    empNo: 'EMP006',
    epfNo: '010876',
    displayName: 'Lisa Thompson',
    firstName: 'Lisa',
    middleName: 'Marie',
    lastName: 'Thompson',
    nic: '199112350V',
    mobile: '+94 77 678 9012',
    mobile2: '+94 71 789 0123',
    address: '987 River Rd, Kurunegala',
    designation: 'Sales Executive',
    basicSalary: 85000,
    dailySalary: 2800,
    budgetAllowance: 14000,
    incentive: 7000,
    specialIncentive: 3500,
    department: 'Sales'
  },
  {
    id: 7,
    empNo: 'EMP007',
    epfNo: '010877',
    displayName: 'James Martinez',
    firstName: 'James',
    middleName: 'Carlos',
    lastName: 'Martinez',
    nic: '198912351V',
    mobile: '+94 77 789 0123',
    mobile2: '+94 71 890 1234',
    address: '147 Garden St, Jaffna',
    designation: 'Quality Analyst',
    basicSalary: 95000,
    dailySalary: 3200,
    budgetAllowance: 16000,
    incentive: 9000,
    specialIncentive: 5500,
    department: 'QA'
  },
  {
    id: 8,
    empNo: 'EMP008',
    epfNo: '010878',
    displayName: 'Jennifer Garcia',
    firstName: 'Jennifer',
    middleName: 'Ann',
    lastName: 'Garcia',
    nic: '199312352V',
    mobile: '+94 77 890 1234',
    mobile2: '+94 71 901 2345',
    address: '258 Valley Rd, Anuradhapura',
    designation: 'UI/UX Designer',
    basicSalary: 110000,
    dailySalary: 3700,
    budgetAllowance: 19000,
    incentive: 11000,
    specialIncentive: 6500,
    department: 'Design'
  },
  {
    id: 9,
    empNo: 'EMP009',
    epfNo: '010879',
    displayName: 'Robert Lee',
    firstName: 'Robert',
    middleName: 'William',
    lastName: 'Lee',
    nic: '198612353V',
    mobile: '+94 77 901 2345',
    mobile2: '+94 71 012 3456',
    address: '369 Mountain Ave, Badulla',
    designation: 'Project Manager',
    basicSalary: 140000,
    dailySalary: 4800,
    budgetAllowance: 24000,
    incentive: 14000,
    specialIncentive: 10500,
    department: 'PMO'
  },
  {
    id: 10,
    empNo: 'EMP010',
    epfNo: '010880',
    displayName: 'Maria Rodriguez',
    firstName: 'Maria',
    middleName: 'Sofia',
    lastName: 'Rodriguez',
    nic: '199412354V',
    mobile: '+94 77 012 3456',
    mobile2: '+94 71 123 4567',
    address: '741 Forest Ln, Trincomalee',
    designation: 'Customer Support',
    basicSalary: 75000,
    dailySalary: 2500,
    budgetAllowance: 12000,
    incentive: 6000,
    specialIncentive: 3000,
    department: 'Support'
  }
];

const Emplist = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Simulate API call to fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setEmployees(mockEmployeeData);
      setLoading(false);
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
  const indexOfLastItem = currentPage * itemsPerPage;
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
    <main className="flex-1 p-8">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section with Search */}
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Action Buttons */}
        <Actionbutton itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />

        {/* Table with Pagination */}
        <Emptable employees={currentEmployees} formatCurrency={formatCurrency} loading={loading} />
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
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