'use strict';

// Import employees array from event.js
import { employees } from './event.js';

// Initialize departmentData object to hold department-wise data
const departmentData = {};

// Loop through the employees array and calculate department-wise data
for (const employee of employees) {
if (!departmentData[employee.department]) {
departmentData[employee.department] = {
numEmployees: 1,
totalSalary: employee.salary
};
} else {
departmentData[employee.department].numEmployees++;
departmentData[employee.department].totalSalary += employee.salary;
}
}

// Create and populate the department table
const table = document.createElement('table');

// Create table header row
const headerRow = table.insertRow();
const headerCells = ['Department Name', 'Number of employees', 'Average salary', 'Total salary'];

// Add header cells to header row
for (const cell of headerCells) {
const headerCell = document.createElement('th');
headerCell.textContent = cell;
headerRow.appendChild(headerCell);
}

// Create a row for each department and calculate the required data
for (const department in departmentData) {
const departmentRow = table.insertRow();
const numEmployees = departmentData[department].numEmployees;
const totalSalary = departmentData[department].totalSalary;
const averageSalary = (totalSalary / numEmployees).toFixed(2);

// Add cells to department row
departmentRow.insertCell().textContent = department;
departmentRow.insertCell().textContent = numEmployees;
departmentRow.insertCell().textContent = averageSalary;
departmentRow.insertCell().textContent = totalSalary.toFixed(2);
}

// Create table footer row
const footerRow = table.insertRow();
const totalEmployees = employees.length;
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
const averageSalary = (totalSalary / totalEmployees).toFixed(2);

// Add cells to footer row
footerRow.insertCell().innerHTML = '<strong>Total:</strong>';
footerRow.insertCell().textContent = totalEmployees;
footerRow.insertCell().textContent = averageSalary;
footerRow.insertCell().textContent = totalSalary.toFixed(2);

// Add table to the accountingDiv
const accountingDiv = document.getElementById('accounting');
accountingDiv.appendChild(table);