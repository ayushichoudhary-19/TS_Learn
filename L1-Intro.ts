// Normal JS function
// const function add(x,y){
//     return x+y;
// }

// Arrow fcuntion
const add = (x,y) => {
    return x+y
}


//Now the above is a JS code and works well as JS is subset of JS
// TS has types for variables unlike JS, so when type is not specified it gives it the type 'any' by default
//so here x and y have 'any' type.


//JS is a dynamic typing language means data type of variable are determined at run time after code is executed
//Thus in JS no errors are given at typing time


//TS is JS with types

//TS is a statically typed language - All type checking is done at compile time only

// JS gives no error for below:
// console.log(null*4) prints 0 instead
//But TS gives error


console.log(add(2,"4"));

