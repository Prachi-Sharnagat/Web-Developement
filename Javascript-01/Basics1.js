console.log("prachi sharnagat")

//? let , const , var 

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

let str1 = "hello "
let str2 = " prachi "
let str3 = str1 + str2;
console.log(str3);
console.log(1+2+"3");
console.log("7"+2+9);
// bad practice 
console.log(+true);
console.log(+"");
// focus on readibility 
let num1 , num2 , num3;
num1 = num2 = num3 = 1;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter++);
console.log(gameCounter)

//! comparision of datatype
/*
comparision operator
*/

//? same datatype 
console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2!= 1);
console.log(2==1);

//& compare different datatype -> avoid this :: very bad pracice 
console.log(null > 0) // comaprison false
console.log(null == 0) // equality false
console.log(null >= 0) // comaprison true
// note "comparison convert null to a number , treat it as 0 thats why null >= 0 true and null > 0 is false "

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

// strick check : it also check datatype 
console.log("2" ===  2);

//* do clean code and focus on readability  

//~ primitive datatype : 1.string 2.number 3. boolean 4. null 5. undefined 6.symbol 7.BigInt
//? non - primitive (refrence) 1.arrays 2. objects 3. function
//! javascript is dynamic language because we dont have to defined its datatype 
const score1  = 1000;
const score2 = 100.354 ;

const id1 = Symbol('123');
const id2 = Symbol('123');
// note : Each symbol is unique, even if the description is the same:
console.log(id1==id2);

// use BigInt 
// 1. Add 'n' at the end of an integer literal
let big1 = 123456789012345678901234567890n;

// let num = 10;
// let big = 20n;

// console.log(num + big); // Error: Cannot mix BigInt and other types
const myhero = ["shubhman ", "prachi "];
let Profile = {
  name:'prachi',
  ag: 20
};

const myFunction = function(){
  console.log('hello');
}

console.log(typeof myFunction);
console.log(typeof myhero);

// memory : 
// stack ---> primitive (copy change )
// heap --> non - primitive (original value change )

let user1 = "hello world ";
let user2 = user1;
user2 = "hello universe";
console.log(user1)
console.log(user2)

const details = {
  email : "xyz@gmail.com",
  id: 101
};

let details2 = details;

details2.email = "abc@gmail.com";

console.log(details.email);
console.log(details2.email);