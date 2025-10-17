

function sayMyName(){
    // console.log("Prachi Sharnagat");
    console.log("P")
console.log("R")
console.log("C")
console.log("H")
console.log("I")
}

sayMyName()

function addTwoNumbers(a,b){ // here a and b are parameters
    console.log(a+b);
}

addTwoNumbers(8,9); // here 8 and 9 are argument (which will going to pass)
// string pass 3 + "4"
addTwoNumbers(3,"9");
addTwoNumbers(3,"a");
addTwoNumbers(3,null);

const result = addTwoNumbers(9,0);
console.log(result); // answer undefined because return nothing 