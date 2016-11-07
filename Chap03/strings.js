//quotes inside quotes
var phrase = 'Don't mix your quotes.''; //wrong
var phrase = "Don't mix your quotes"; //right

var phrase = "He said "that's fine," and left."'; //wrong
var phrase = "He said \"that's fine,\" and left." //right

//string properties
var phrase = "This is a simple phrase.";
console.log(phrase.length); //24

var phrase = "This is a simple phrase.";
console.log( phrase.toUpperCase() );
             // THIS IS A SIMPLE PHRASE.

//string methods - split
var phrase = "This is a simple phrase."
var words = phrase.split(" "); //["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "s", "i", "m", "p", "l", "e", " ", "p", "h", "r", "a", "s", "e", "."]

//string methods - indexof
var phrase = "We want a groovy keyword.";
var position = phrase.indexOf("groovy"); //10

//it returns -1 if the term is not found
if ( phrase.indexOf("DDDD") == -1) {
    console.log("That word does not occur.");
}

//string methods - slice
var phrase = "Yet another phrase";
var segment = phrase.slice(6,11); //other

//string comparison
var str1 = "aardvark";
var str2 = "beluga";

if (str1 < str2) {
    //true
 }

var str1 = "aardvark"
var str2 = "Beluga"

if (str1 < str2) {
    //false
}
//ABCD... less than abcd...