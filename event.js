let employees = [];


let savedEmployees = localStorage.getItem("employees");

if (savedEmployees) {
 
employees = JSON.parse(savedEmployees);

  for (let i = 0; i < employees.length; i++) {
    
    renderEmployeeCard(employees[i]);
 
  }
  
}




form.addEventListener("submit", function(event) {
  event.preventDefault();

  // get employee data from form inputs
  let employeeData = {
    full_name: document.getElementById("full-name").value,
    department: document.getElementById("department").value,
    level: document.getElementById("level").value,
    image_url: document.getElementById("image-url").value,
    id: generateEmployeeId()
  };
  "use strict"
  // add new employee to employees array
  employees.push(employeeData);

  // save employees data to local storage
  localStorage.setItem("employees", JSON.stringify(employees));

  form.reset();

  // render employee card using new employee data
  renderEmployeeCard(employeeData);
});

function renderEmployeeCard(employee) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${employee.image_url}">
    <strong class="info-box">ID: ${employee.id} </strong><br>
    <strong class="info-box">Name: ${employee.full_name}</strong><br>
    <strong class="info-box">Department: ${employee.department}</strong><br>
    <strong class="info-box">level: ${employee.level}</strong><br>
  `;
  let cardsContainer = document.getElementById("cards-container");
  cardsContainer.appendChild(card);
}

function generateEmployeeId() {
  let employeeId = "";
  const digits = "0123456789";
  for (let i = 0; i < 4; i++) {
    employeeId =  employeeId + digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return employeeId;
}


export { employees };
