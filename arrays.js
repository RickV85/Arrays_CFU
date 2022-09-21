var names = ['Alan', 'Bobby', 'Chris', 'Dave'];
var age = ['65', '32', '51', '26'];
var married = ['true', 'false', 'false', 'true'];
// display the last element (Dave) of 'names' variable
console.log(names.pop());
// display the first element (true) in married array
console.log(married.shift());
// add '37' end of to age array
age.push('37');
// display age with added '37'
console.log(age);
//display second and third elements only (32 and 51) in 'age' array
console.log(age.slice(1, 3));
// create a new variable 'agePrimary' from second and third element in 'age'
var agePrimary = age.slice(1, 3);
// display new variable 'agePrimary'
console.log(agePrimary);
// adds Adam to beginning of names
names.unshift("Adam");
// displays number of elements in names array
console.log(names.unshift());
// displays Adam, Alan, Bobby and Chris in names array
console.log(names);
// display from 2nd element forward
console.log(names.slice(1));
// display from first element to second, shows first position, does not show last element that you define
console.log(names.slice(0, 2));
// negative numbers count elements in from the end of the array and display from there forward so this should display just Chris
console.log(names.slice(-1));
// slice can cut out elements with a range with a (start element, end element) format
console.log(names.slice(0, -1));
