// singleton and object literals 

// constructor method to create object is 
// object.create()
// const student = Object.create(person, {
//   name: { value: "Prachi", writable: true, enumerable: true },
//   rollNo: { value: 101, writable: false }
// });

// console.log(student.name);   // Prachi
// console.log(student.rollNo); // 101
// student.greet();             // Hello, my name is Prachi


//? object literals 
const mysymb = Symbol("key1") // define a symbol is important 
const jsUser = {
name : "prachi",
"number" : "782372378",
age: 18,
location : "prachi123@gmail.com",
"email id ": "prachu2006",
[mysymb] : "key1"  // this is symbol in square bracket 
} 

jsUser.name; // still not effecient 
console.log(jsUser.name);
console.log(jsUser["name"]); // string print like this way 
console.log(jsUser["number"]);
console.log(jsUser[mysymb]);
console.log(typeof mysymb)

jsUser["email id"] = "psharnagat@gmail.com";
// stop adding any thing 
// Object.freeze(jsUser);
console.log(jsUser);
// jsUser.name= "prachi@gmail.com"
jsUser["email id"] = "24sharnagatp@gmail.com"; // it will not add since it is freeze
console.log(jsUser)
jsUser.greeting = function() {
    console.log(`hello world,${this.name}`);
}
console.log(jsUser.greeting) // function anynomus
console.log(jsUser.greeting()); // it shows undefined when object is freeze

//! singleton

const user1 = new Object() //~ empty singleton object 
const user2 = {} //? empty non singleton object 
