
let departmentData = {};

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];
  let department = employee.department;
  let salary = calculateSalary(employee.level);

  if (!departmentData[department]) {
    departmentData[department] = {
      count: 1,
      salary: salary
    };
  } else {
    departmentData[department].count++;
    departmentData[department].salary += salary;
  }
}

let table = document.createElement("table");
table.innerHTML = `
  <thead>
    <tr>
      <th>Department Name</th>
      <th>Number of employees</th>
      <th>Average salary</th>
      <th>Total salary</th>
    </tr>
  </thead>
`;

let tableBody = document.createElement("tbody");

for (let department in departmentData) {
  let count = departmentData[department].count;
  let avgSalary = (departmentData[department].salary / count).toFixed(2);
  let totalSalary = departmentData[department].salary;

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${department}</td>
    <td>${count}</td>
    <td>${avgSalary}</td>
    <td>${totalSalary}</td>
  `;

  tableBody.appendChild(row);
}

table.appendChild(tableBody);

let tableFooter = document.createElement("tfoot");
let totalEmployees = employees.length;
let totalSalary = 0;

for (let department in departmentData) {
  totalSalary += departmentData[department].salary;
}

let avgSalaryAll = (totalSalary / totalEmployees).toFixed(2);

tableFooter.innerHTML = `
  <tr>
    <td><strong>Total:</strong></td>
    <td><strong>${totalEmployees}</strong></td>
    <td><strong>${avgSalaryAll}</strong></td>
    <td><strong>${totalSalary}</strong></td>
  </tr>
`;



table.appendChild(tableFooter);

let tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);


function calculateSalary(level) {
    const salaryTable = {
      'Junior': {min: 500, max: 1000},
      'Mid-Senior': {min: 1000, max: 1500},
      'Senior': {min: 1500, max: 2000}
    };
    
    const salaryRange = salaryTable[level];
    const randomSalary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
    const salary=  Math.floor(randomSalary * 0.925); 
    return Math.floor(salary);
  }
  
  
