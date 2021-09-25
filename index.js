const fs = require('fs');

// Create
fs.writeFile('employees.json', JSON.stringify({"name": "Employee 1 Name", "salary": 2000}), (err) => {
  if(err) console.error(err)
  console.log("Employees file created...");
})

// Read
fs.readFile('employees.json', 'utf8', (err, data) => {
  if(err) console.error(err)
  console.log(data)
})


// Update
fs.appendFile('employees.json', JSON.stringify({name: 'Emp 2', salary: 1599}) ,'utf8', (err) => {
  if(err) console.error(err)
  console.log("Employees file updated...");
})


// Delete
fs.unlink('employees.json', (err) => {
  if(err) console.error(err)
  console.log("Employees file deleted...");
})
