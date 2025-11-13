import employeesData from '../data/employees.json';

// In-memory storage that persists during the session
let employeeStore = [...employeesData];

/**
 * Employee Service - Handles all employee data operations
 * This service simulates a backend API with local JSON data
 */
const employeeService = {
  /**
   * Fetch all employees with simulated network delay
   * @returns {Promise<Array>} List of all employees
   */
  getAllEmployees: async () => {
    // Simulate API network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return [...employeeStore];
  },

  /**
   * Get employee by ID
   * @param {number} id - Employee ID
   * @returns {Promise<Object|null>} Employee object or null
   */
  getEmployeeById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return employeeStore.find(emp => emp.id === id) || null;
  },

  /**
   * Add a new employee
   * @param {Object} employeeData - New employee data
   * @returns {Promise<Object>} Created employee with generated ID
   */
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
    
    // Add to store
    employeeStore.push(newEmployee);
    
    return newEmployee;
  },

  /**
   * Update an existing employee
   * @param {number} id - Employee ID
   * @param {Object} updates - Updated employee data
   * @returns {Promise<Object|null>} Updated employee or null
   */
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

  /**
   * Delete an employee
   * @param {number} id - Employee ID
   * @returns {Promise<boolean>} Success status
   */
  deleteEmployee: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const initialLength = employeeStore.length;
    employeeStore = employeeStore.filter(emp => emp.id !== id);
    
    return employeeStore.length < initialLength;
  },

  /**
   * Search employees by query
   * @param {string} query - Search query
   * @returns {Promise<Array>} Filtered employees
   */
  searchEmployees: async (query) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (!query) return [...employeeStore];
    
    const lowerQuery = query.toLowerCase();
    return employeeStore.filter(emp =>
      Object.values(emp).some(value =>
        value?.toString().toLowerCase().includes(lowerQuery)
      )
    );
  },

  /**
   * Reset to original data (useful for demo/testing)
   */
  resetData: () => {
    employeeStore = [...employeesData];
  }
};

export default employeeService;
