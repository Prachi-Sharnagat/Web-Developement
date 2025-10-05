console.log("prachi sharnagat")
const accountId = 1212784          // fixed 
let accountEmail = 'prachisharnagat123@gmail.com';
var accountPassward = '12333';
let accountState; // undefined 
accountCity = "nagpur";
console.table([accountEmail, accountPassward, accountCity])

// accountId = 2; // not allowed -> error 
console.log(accountId);
accountEmail = "xyz@gmail.com"
accountPassward = "prachu";
accountCity = "raipur";  //  bad practice -> as a var consider 
console.table([accountEmail, accountPassward, accountCity, accountState])

// note : try not to use var 

"use strict"; // use all js code as new version 

// alert("hey prachu"); // we are using nodejs not browser
let name = "prachi"
let age = 20;
let isLoggedIn = false

/* datatype : 
primitive : 
1. number
2. bigint
3. string
4. boolean 
5. float 
6. null => standlone value: let state = null;
7. undefined => let state 
8. symbol => uniqueness 

object :


*/
console.log(typeof(name));

console.log(typeof "prachi");
console.log(typeof null);  // type of null is object 
console.log(typeof undefined); // type of undefined is undefined 

// conversion and operations : 
// let score =  null  
// console.log(typeof(score)); 

// let valueInNum = Number(score);
// console.log(valueInNum); 
// console.log(typeof valueInNum);

// let score =  "3A"
// console.log(typeof(score)); 

// let valueInNum = Number(score);
// console.log(valueInNum); 
// console.log(typeof valueInNum);

// let score =  undefined 
// console.log(typeof(score)); // undefined 

// let valueInNum = Number(score);
// console.log(valueInNum); // NaN
// console.log(typeof valueInNum); // number

// let score =  true
// console.log(typeof(score)); // boolean 

// let valueInNum = Number(score);
// console.log(valueInNum); // 1 
// console.log(typeof valueInNum); // number

let score = "prachi"
console.log(typeof(score)); // string

let valueInNum = Number(score);
console.log(valueInNum); // NaN
console.log(typeof valueInNum); // number

/*
conclusion :
 "33 " -> number 33
 "33A" -> number NaN
 "true" -> number 1 
 "prachi " -> number NaN 
*/

// let IsTrue = 1;
// let booleanIsLoggedIn = Boolean(IsTrue);
// console.log(booleanIsLoggedIn);

let IsTrue = "prachi";
let booleanIsLoggedIn = Boolean(IsTrue);
console.log(booleanIsLoggedIn);

/*
conclusion :
  1 => true
  0 => false
  "" => false
  "prachi " => true
*/

let matchScore = 77;
let stringMatchScore = String(matchScore);
console.log(stringMatchScore);
console.log(typeof stringMatchScore);


//operations :
let value = 3;
let negValue = -value;
console.log(negValue);

