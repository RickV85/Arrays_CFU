var names = ['Alan', 'Bobby', 'Chris', 'Dave'];
var age = ['65', '32', '51', '26'];
var married = ['true', 'false', 'false', 'true'];
// display the last element (Dave) of 'names' variable
console.log(names.pop())
// display the first element (true) in married array
console.log(married.shift())
// add '37' end of to age array
age.push('37')
// display age with added '37'
console.log(age)
//display second and third elements only (32 and 51) in 'age' array
console.log(age.slice(1, 3))
// create a new variable 'agePrimary' from second and third element in 'age'
var agePrimary = age.slice(1, 3)
// display new variable 'agePrimary'
console.log(agePrimary)
