// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  //Start with an empty array that you will push each object to
  const employeesArray = [];
  //Start off with while loop condition met to run intially
  let addEmployees = true;

  //A while loop to keep running the code until addEmployee is false
  while(addEmployees === true) {
  //Prompts to receive user input
  let prompt1 = prompt("Enter first name");
  let prompt2 = prompt("Enter last name");
  let prompt3 = prompt("Enter Salary");

  //Ensure that salary is a number or return that it is not
  let promptSalary = function() {
    if(isNaN(prompt3)) {
      salaryCorrected = prompt("Please enter a Number");
        while(isNaN(salaryCorrected)) {
          salaryCorrected = prompt("Please enter number")
        }
      return salaryCorrected;
    }
    else {
      return prompt3;
    }  
  }  
 
  //Create object to reference properties from
  let currentEmployee = {
    firstName: prompt1.charAt(0).toUpperCase() + prompt1.slice(1,prompt1.length).toLowerCase(),
    lastName: prompt2.charAt(0).toUpperCase() + prompt1.slice(1,prompt1.length).toLowerCase(),
    salaryNumber: promptSalary(),
    salary: "$ " + promptSalary(),
    
  }

  //Create empty array to push information to
  
  employeesArray.push(currentEmployee);

  //Confirm that you would like to enter an employee
  addEmployees = confirm("Do you want to add another employee?")

  }
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary=0;
  for (const employee of employeesArray) {
    // Extract the numerical value from the salary string and convert it to a number
    const salary = Number(employee.salaryNumber);
    totalSalary += salary;
  }
  function employeePlural () {
    if (employeesArray.length < 2) {
      return "employee"
    }
    else {
      return "employees"
    }

  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} 
  ${employeePlural()} is ${averageSalary.toFixed(2)}`);

  }


// Select a random employee
const getRandomEmployee = function(employeesArray) {
 let randomNumber = Math.floor(Math.random()*employeesArray.length);
 randomObject = employeesArray[randomNumber];
 console.log(`Congratulations to ${randomObject.firstName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
