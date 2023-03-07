function Employee(id, fullName, department, level, imageUrl) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.netSalary = this.calculateNetSalary();
  }
  
  Employee.prototype.calculateNetSalary = function() {
    const salaryTable = {
      'Junior': {min: 500, max: 1000},
      'Mid-Senior': {min: 1000, max: 1500},
      'Senior': {min: 1500, max: 2000}
    };
    const salaryRange = salaryTable[this.level];
    const randomSalary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
    const netSalary = randomSalary * 0.925; 
    return netSalary;
  };
  
  Employee.prototype.render = function() {
    
    const card = document.createElement('div');
    card.classList.add('employee');
    
    const img = document.createElement('img'); 
    img.src = this.imageUrl; 
    img.alt = `${this.fullName}'s profile picture`;
    
    const h2 = document.createElement('h2');
    h2.textContent = this.fullName;
    
    const department = document.createElement('p');
    department.textContent = `Department: ${this.department}`;
    
    const level = document.createElement('p');
    level.textContent = `Level: ${this.level}`;
    
    const salary = document.createElement('p');
    salary.textContent = `Salary: $${this.netSalary.toLocaleString()}`;
    
   
    card.appendChild(img); 
    card.appendChild(h2);
    card.appendChild(department);
    card.appendChild(level);
    card.appendChild(salary);
    return card;
  };
  
    // ************************************************************************

 
    const employees = [
        new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'BCS_S3_GusFringe.webp'),
        new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'images.jpg'),
        new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'Marie Schrader -1.jpg'),
        new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'Walter_White2.jpg'),
        new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'c489b9ba8f444ee548506acaf60b1c1e--breaking-bad-saul-saul-goodman.jpg'),
        new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'EjXEHA2VkAE4tqD.jpg'),
        new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'ECwg_xmUUAAAgqb.jpg')
      ];
      

  // ************************************************************************

  const main = document.querySelector('main');
  employees.forEach(employee => {
  main.appendChild(employee.render());
});

  
  