// while loop
var a = 1;

while ( a < 10 ) {
    console.log(a)
    a++;
}

// do while loop
var a = 1;

do {
    console.log(a);
    a++;
} while ( a < 10 );


// for loop
for ( var i = 1 ; i < 10 ; i++ ) {
    // do stuff
    // do stuff
    // do stuff
    // etc..
}


// break
for ( var i = 1 ; i < 5000 ; i++ ) {
    // do stuff
    // do stuff
    if (i == 101) {
        break;
    }
    // do stuff
}

// break jumps out of the loop

//continue
for ( var i = 1 ; i < 5000 ; i++) {
    // do stuff
    // do stuff
    if (i % 5 == 0) {
        continue; //done with this iteration
    }
    // do second set of stuff
    // do second set of stuff
}