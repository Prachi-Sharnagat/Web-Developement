
const name = "prachi"
const myRepo = 8;
// console.log(name + myRepo + "value");  bad practice
console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${myRepo}`)
//^ string interpolation 
const nameInObj = new String('prachi');
console.log(nameInObj);
console.log(nameInObj[0]);
console.log(nameInObj.__proto__); // obj -> {} curly braces define empty 
console.log(typeof nameInObj);

console.log(nameInObj.length);
// string is primitive datatype so it will not change original one 
console.log(nameInObj.toUpperCase());
console.log(nameInObj.charAt(0));

console.log(nameInObj.indexOf('p'));

const SubstringConvert = nameInObj.substring(0,4);
console.log(SubstringConvert);

// we can start giving indexing from reverse 
const SubstringConvert2 = nameInObj.slice(-1,0);
console.log(SubstringConvert2);

const newStringOne = "                     huiafu             ";
console.log(newStringOne)
console.log(newStringOne.trim()) // space trim 
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());
const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11";
url.replace('https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11', 'ttps://leetcode.com/problems/longest-common-subsequence/descriptio');
console.log(url);

// url.includes('youtube')
console.log(url.includes('youtube'));
const obj = {
    name : "prachi",
    class : "second "
};

console.log(obj.name.split(" "));

const score =  new Number(100000000000000);
console.log(score); // it will show datatype 

console.log(score.toString()); // type change to string 
console.log(typeof score);
console.log(score.toFixed(2));
console.log(score.toString().length);

console.log(score.toLocaleString('en-IN'))

// score.MAX_VALUE
// score.MIN_VALUE

console.log(Math.PI)
console.log(Math.abs(-27));
console.log(Math.round(27.932));
console.log(Math.ceil(27.132));
console.log(Math.floor(27.932));
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10)+ 1);

const min = 31;
const max = 45;

console.log(Math.floor(Math.random()*(max-min + 1))+ min);

// ? date and time 
const date = new Date();
console.log(date); 
console.log(date.toString());
console.log(date.toLocaleString("hi-IN"));
// object -> Date()

let myDate = new Date(2025 , 0 , 12)
// let myDate = new Date("2025-02-23")
// let myDate = new Date("01-12-23")

// index 0 se month
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString("hi-IN"));

let myTimeStamp = Date.now();
console.log(myTimeStamp);
// milisecond me ans 
console.log(myDate.getTime())
console.log(Math.floor(myDate.getTime()/1000)) // in seconds
console.log(myDate.getMonth()+1);
myDate.toLocaleString('default', {
   
})