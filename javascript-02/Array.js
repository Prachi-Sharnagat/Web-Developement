// // arrays 
// // shallow copies -> original copy 
// // deep copy -> copy sends

// const myArr = [1,2,33,231,3411];
// console.log(myArr[1]);
// myArr.shift();

// console.log(myArr);

// myArr.push(3);
// console.log(myArr);
// console.log(myArr.pop());
// myArr.unshift(9);

// console.log(myArr);

// myArr.shift();


// console.log(myArr.includes(3));
// // slice and splice 
// // return a section of copy of array 
// console.log(myArr);
// const myn11 = myArr.slice(1,3); // index 3 is not included 
// console.log(myn11);
// console.log(myArr)
// // difference between slice and splice 


// console.log(myArr.splice(1,3)) // include 3rd index
// console.log(myArr); // change original remove splices arrays 

const superstar = ["shubhman " , "virat ", "mahi "]
const heros = ["sidharth", "sumedh ", "dhanush"]

// superstar.push(heros);
// console.log(superstar)
const new1 = superstar.concat(heros); // it give new array not work on old array
console.log(new1);
console.log(superstar)

//? spread operator 
const all_newSupeerstar = [...heros, ...superstar];
console.log(all_newSupeerstar) 
 
const newArray = [1, 2, [2, 4, [2, 42, 21, [31]]]]



const final_array = newArray.flat(Infinity);
console.log(final_array);
console.log(Array.isArray("prachi"))
console.log(Array.from("prachi"))

// key -pair array => empty array 
 let score1 = 100
 let score2 = 200;
 console.log(Array.of(score1, score2))