//number + number
var foo = 5;
var bar = 5;
console.log(foo + bar); //10

//string + string
var foo = "5";
var bar = "5";
console.log(foo + bar); //55

// number + string
var foo = 5;
var bar = "5";
console.log(foo + bar); //55 - one is a string

//example for NaN (Not a Number)
var foo = 5;
var bar = "b";
console.log(foo * bar); //NaN

var foo = "55"; //could be "abc"
var myNumber = Number(foo); // make it a number

if ( isNaN(myNumber) ) {
    console.log("It's not a number!");
}