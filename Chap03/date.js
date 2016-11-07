//working with dates
var today = new Date(); //current date and time

//year, month, day
var y2k = new Date(2000,0,1)

//year, month, day, hours, minutes, seconds
var y2k = new Date(2000,0,1,0,0,0);


//get methods of the date object
var today = new Date();
today.getMonth(); //returns 0-11
today.getFullYear(); //YYYY (not zero-based)
today.getYear(); // deprecated
today.getDate(); //1-31 day of month
today.getDay(); //0-6 day of week. 0 == sunday
today.getHours(); //0-23
today.getMilliseconds(); //milliseconds since 1/1/1970