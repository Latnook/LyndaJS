//function example
function myFunction() {
    console.log("We're in the function");
    // loops, if statements, anything!
    // ...
}

//sometime later
myFunction();
myFunction();
myFunction();

//function with parameters
function myFunction2 (x,y) {
    var myVar = x * y;
    console.log(myVar);
}

function myFunction3 () {
    var x = prompt("Please input first number");
    var y = prompt("Please input second number");
    var myVar = x * y;
    alert("The product is " + myVar);
    console.log(myVar);
}