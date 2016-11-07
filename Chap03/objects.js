//object creation
var playerName = "Fred";
var playerScore = 10000;
var playerRank = 1;

var player = new Object();
var playerName = "Fred";
var playerScore = 10000;
var playerRank = 1;


//object creation: shorthand
var player1 = { name: "Fred", score: 10000, rank: 1 };
var player2 = { name: "Fred", score: 10000000, rank: 5 };

console.log(player1.name); //Fred

function playerDetails(){
    // display information about each player
    console.log(this.name + "has a rank of: " + this.rank + " and a score of " + this.score);
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();