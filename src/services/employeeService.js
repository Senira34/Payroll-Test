import employeesData from '../data/employees.json';

// In-memory storage that persists during the session
let employeeStore = [...employeesData];

const employeeService = {
 
  getAllEmployees: async () => {
    // Simulate API network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return [...employeeStore];
  },

  getEmployeeById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return employeeStore.find(emp => emp.id === id) || null;
  },

 
  addEmployee: async (employeeData) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate new ID
    const newId = employeeStore.length > 0 
      ? Math.max(...employeeStore.map(e => e.id)) + 1 
      : 1;
    
    // Generate new employee number
    const newEmpNo = `EMP${String(newId).padStart(3, '0')}`;
    
    // Generate new EPF number
    const newEpfNo = String(10870 + newId);
    
    // Create new employee object
    const newEmployee = {
      id: newId,
      empNo: employeeData.empNo || newEmpNo,
      epfNo: employeeData.epfNo || newEpfNo,
      displayName: employeeData.displayName || '',
      firstName: employeeData.firstName || '',
      middleName: employeeData.middleName || '',
      lastName: employeeData.lastName || '',
      nic: employeeData.nic || '',
      mobile: employeeData.contactNo || '',
      mobile2: employeeData.contactNo2 || '',
      address: employeeData.address || '',
      designation: employeeData.designation || '',
      basicSalary: parseFloat(employeeData.basicSalary) || 0,
      dailySalary: parseFloat(employeeData.dailySalary) || 0,
      budgetAllowance: parseFloat(employeeData.budgetAllowance) || 0,
      incentive: parseFloat(employeeData.incentive) || 0,
      specialIncentive: parseFloat(employeeData.specialIncentive) || 0,
      department: employeeData.department || ''
    };
    
    //employee adding function
    employeeStore.push(newEmployee);
    
    return newEmployee;
  },

 
  updateEmployee: async (id, updates) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const index = employeeStore.findIndex(emp => emp.id === id);
    if (index === -1) return null;
    
    employeeStore[index] = {
      ...employeeStore[index],
      ...updates,
      id: employeeStore[index].id // Preserve ID
    };
    
    return employeeStore[index];
  },

 
 
};

export default employeeService;
