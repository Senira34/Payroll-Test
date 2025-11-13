import React, { useState } from "react";
import { Upload, Plus, X, ArrowLeft } from "lucide-react";

const Empregister = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    empNo: "",
    displayName: "",
    category: "",
    salaryStatus: "monthly",
    firstName: "",
    middleName: "",
    lastName: "",
    nic: "",
    email: "",
    qualifications: "",
    gender: "",
    civilStatus: "",
    contactNo: "",
    contactNo2: "",
    address: "",
    epfNo: "",
    salaryType: "",
    category2: "",
    department: "",
    joinDate: "",
    resignDate: "",
    leaves: "",
    remarks: "",
    bank: "",
    bankCode: "",
    branch: "",
    branchCode: "",
    accountNo: "",
    basicSalary: "",
    incentive: "",
    budgetAllowance: "",
    specialIncentive: "",
    serviceIncentive: "",
    examiningIncentive: "",
    adjustment: "",
    transportFee: "",
    attendanceBonus: "",
    epfAllowed: false,
    leaveAllowed: false,
    inactive: false,
    etfEpfAllowed: false,
  });

  const [dynamicIncentives, setDynamicIncentives] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addDynamicIncentive = () => {
    setDynamicIncentives([
      ...dynamicIncentives,
      { id: Date.now(), name: "", amount: "" },
    ]);
  };

  const removeDynamicIncentive = (id) => {
    setDynamicIncentives(dynamicIncentives.filter((item) => item.id !== id));
  };

  const updateDynamicIncentive = (id, field, value) => {
    setDynamicIncentives(
      dynamicIncentives.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Dynamic Incentives:", dynamicIncentives);
    alert("Employee saved successfully!");
    setCurrentPage("emplist");
  };

  return (
    <div className="flex-1 overflow-y-auto p-3">
      {/* Header with Back Button */}
      <div className="mb-3">
        <button
          onClick={() => setCurrentPage("emplist")}
          className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors text-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Employee List</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* New User  */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-blue-500">
          <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-3">
            NEW USER
          </h2>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-xs">No Image</span>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-1.5 cursor-pointer shadow-lg">
                <Upload className="w-3.5 h-3.5" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {/* Left Column */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  EMP NO
                </label>
                <input
                  type="text"
                  name="empNo"
                  value={formData.empNo}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  DISPLAY NAME
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CATEGORY
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Select Team</option>
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  GENDER
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Male</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CONTACT NO
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                  />
                  <input
                    type="text"
                    name="contactNo2"
                    value={formData.contactNo2}
                    onChange={handleInputChange}
                    className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ADDRESS
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white resize-none"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  SALARY STATUS
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="salaryStatus"
                      value="monthly"
                      checked={formData.salaryStatus === "monthly"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 text-blue-500"
                    />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      MONTHLY SALARY
                    </span>
                  </label>
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="salaryStatus"
                      value="daily"
                      checked={formData.salaryStatus === "daily"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 text-blue-500"
                    />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      DAILY SALARY
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  MIDDLE NAME
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  NIC
                </label>
                <input
                  type="text"
                  name="nic"
                  value={formData.nic}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  QUALIFICATIONS
                </label>
                <input
                  type="text"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CIVIL STATUS
                </label>
                <select
                  name="civilStatus"
                  value={formData.civilStatus}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Single</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xs font-bold text-gray-800 dark:text-white mb-3">
            ADDITIONAL DETAILS
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {/* Left Column */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  EPF NO
                </label>
                <input
                  type="text"
                  name="epfNo"
                  value={formData.epfNo}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CATEGORY
                </label>
                <select
                  name="category2"
                  value={formData.category2}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Select Employee Category</option>
                  <option value="executive">Executive</option>
                  <option value="non-executive">Non-Executive</option>
                  <option value="support">Support Staff</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  JOIN DATE
                </label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  LEAVES
                </label>
                <input
                  type="number"
                  name="leaves"
                  value={formData.leaves}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  BANK
                </label>
                <select
                  name="bank"
                  value={formData.bank}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Select Bank</option>
                  <option value="boc">Bank of Ceylon</option>
                  <option value="peoples">People's Bank</option>
                  <option value="commercial">Commercial Bank</option>
                  <option value="sampath">Sampath Bank</option>
                  <option value="hnb">HNB</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  BRANCH
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Select Branch</option>
                  <option value="colombo">Colombo</option>
                  <option value="kandy">Kandy</option>
                  <option value="galle">Galle</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ACCOUNT NO
                </label>
                <input
                  type="text"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  INCENTIVE
                </label>
                <input
                  type="number"
                  name="incentive"
                  value={formData.incentive}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  SPECIAL INCENTIVE
                </label>
                <input
                  type="number"
                  name="specialIncentive"
                  value={formData.specialIncentive}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  EXAMINING INCENTIVE
                </label>
                <input
                  type="number"
                  name="examiningIncentive"
                  value={formData.examiningIncentive}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  TRANSPORT FEE
                </label>
                <input
                  type="number"
                  name="transportFee"
                  value={formData.transportFee}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  SALARY TYPES
                </label>
                <select
                  name="salaryType"
                  value={formData.salaryType}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Select Salary Type</option>
                  <option value="fixed">Fixed</option>
                  <option value="variable">Variable</option>
                  <option value="commission">Commission Based</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  DEPARTMENT
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                >
                  <option value="">Select Employee Department</option>
                  <option value="it">IT Department</option>
                  <option value="hr">HR Department</option>
                  <option value="finance">Finance Department</option>
                  <option value="sales">Sales Department</option>
                  <option value="marketing">Marketing Department</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  RESIGN DATE
                </label>
                <input
                  type="date"
                  name="resignDate"
                  value={formData.resignDate}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  REMARKS
                </label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  BANK CODE
                </label>
                <input
                  type="text"
                  name="bankCode"
                  value={formData.bankCode}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  BRANCH CODE
                </label>
                <input
                  type="text"
                  name="branchCode"
                  value={formData.branchCode}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  BASIC SALARY
                </label>
                <input
                  type="number"
                  name="basicSalary"
                  value={formData.basicSalary}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  BUDGET ALLOWANCE
                </label>
                <input
                  type="number"
                  name="budgetAllowance"
                  value={formData.budgetAllowance}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  SERVICE INCENTIVE
                </label>
                <input
                  type="number"
                  name="serviceIncentive"
                  value={formData.serviceIncentive}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ADJUSTMENT
                </label>
                <input
                  type="number"
                  name="adjustment"
                  value={formData.adjustment}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ATTENDANCE BONUS
                </label>
                <input
                  type="number"
                  name="attendanceBonus"
                  value={formData.attendanceBonus}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Incentives Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-gray-800 dark:text-white">
              DYNAMIC INCENTIVES
            </h3>
            <button
              type="button"
              onClick={addDynamicIncentive}
              className="flex items-center space-x-1 px-2.5 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Incentive</span>
            </button>
          </div>

          {dynamicIncentives.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-gray-400">
              <Plus className="w-12 h-12 mb-2" />
              <p className="text-xs">NO DYNAMIC INCENTIVES ADDED YET</p>
              <button
                type="button"
                onClick={addDynamicIncentive}
                className="mt-3 flex items-center space-x-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Incentive</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {dynamicIncentives.map((incentive) => (
                <div key={incentive.id} className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Incentive Name"
                    value={incentive.name}
                    onChange={(e) =>
                      updateDynamicIncentive(
                        incentive.id,
                        "name",
                        e.target.value
                      )
                    }
                    className="flex-1 px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={incentive.amount}
                    onChange={(e) =>
                      updateDynamicIncentive(
                        incentive.id,
                        "amount",
                        e.target.value
                      )
                    }
                    className="w-32 px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => removeDynamicIncentive(incentive.id)}
                    className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <input
                  type="checkbox"
                  name="epfAllowed"
                  checked={formData.epfAllowed}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5"
                />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  EPF ALLOWED
                </span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <input
                  type="checkbox"
                  name="leaveAllowed"
                  checked={formData.leaveAllowed}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5"
                />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  LEAVE ALLOWED
                </span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <input
                  type="checkbox"
                  name="inactive"
                  checked={formData.inactive}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5"
                />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  INACTIVE
                </span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <input
                  type="checkbox"
                  name="etfEpfAllowed"
                  checked={formData.etfEpfAllowed}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5"
                />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  ETF/EPF ALLOWED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setCurrentPage("emplist")}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Save Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default Empregister;
