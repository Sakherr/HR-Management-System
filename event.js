//  this line wil define  object to store the employee data
let employeeData = {};


//  this line wil get the form element
let form = document.getElementById("form");

//  this line wil listen for the form submit event
form.addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the default form submission behavior

	//  this line wil get the form field values and store them in the employeeData object
	
	
	employeeData.full_name = document.getElementById("full-name").value;
	
	employeeData.department = document.getElementById("department").value;
	
	employeeData.level = document.getElementById("level").value;
	
	employeeData.image_url = document.getElementById("image-url").value;

	//  this line wil Create a new card element for the employee
	  let card = document.createElement("div");
	 
	    card.className = "card";
	


  card.innerHTML = 
  
 
  `<img src="${employeeData.image_url}">
   
  <strong class="info-box">ID: ${generateEmployeeId()} </strong><br>
  
  <strong class="info-box">Name: ${employeeData.full_name}</strong><br>
  
  <strong class="info-box">Department: ${employeeData.department}</strong><br>

  <strong class="info-box">level: ${employeeData.level}</strong><br>`

  



  
	//  this line wil add the card element to the cards contaener
	let cardsContainer = document.getElementById("cards-container");
	
	   cardsContainer.appendChild(card);

	//  this line will reseet the form
	form.reset();

	// this line wikl reset the employeeData object
	  employeeData = {};
});




//this function will generate random employee id

function generateEmployeeId() {
	let employeeId = "";
	const digits = "0123456789";
  
	for (let i = 0; i < 4; i++) {
	  employeeId =  employeeId + digits.charAt(Math.floor(Math.random() * digits.length));
	}
  
	return employeeId;
  }