//naming conventions
//var/function (letters, numbers, $, _)
//bad name for a variabke = var _XYZ$$_lk5sh33 ;

//variables and functions: camelCase
var score;
var highScore;
var evenHigherScore;
function calculate() {...}
function calculateDistance() {...}
function checkFormFields() {...}

//objects: UPPERCASE first letter
Math
Date
var myDate = new Date();
//  camelCase|UPPERCASE first letter

//alternative naming styles
var high_score;
var str_firstname;

//brace style
if (x) {
    //...
} else {
    //...
}
//pascal style is not recommended to use
if (x)
{
    //...
}
//other examples of good brace styles
while (x) {
    //...
}
for (var i = 0; i < 10; i++) {
    //...
}
function doStuff() {
    //...
}

//always use blocks
if (x > 500) {
    alert("There's a problem");
}

//define your functions before you call them
function otherFunction (x) {
    //...
}
function someFunction() {
    otherFunction();
}

//use camelCase for variables, functions, and methods
//open { on the same line
//always use blocks - even if only one line
//define your functions before you call them
//always use ; to end a statement
//always use var when declaring a variable