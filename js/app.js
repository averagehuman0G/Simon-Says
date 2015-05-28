//Your application here should use jQuery to wire up the interface to play a
//Simon Says type game. A SimonGame object has been provided that has the guts
//of the game logic. You should not _need_ to edit simongame.js however if you
//want to add extra features like more colors, etc edit the file to your hearts
//content.
var game;
function newGame(difficulty, timeToSee){
    game = new SimonGame(difficulty);
    //display the answer for two seconds
    $(".display").text(game.answer());
    
    setTimeout(function(){
        $(".display").text("");
    },timeToSee);
    
}
//listen to a button click 
function check(colorGuess){
    var guess = game.guess(colorGuess)
    if(guess === "lost"){
        alert("You have lost.");
    }
    else if(guess === "won"){
        alert("You have won.")
    }
}
// make a guees based on the button 
$("#blue").on("click", function(){
    check("blue")
});
$("#green").on("click", function(){
    check("green")
});
$("#yellow").on("click", function(){
    check("yellow")
});
$("#red").on("click", function(){
    check("red")
});
//add new levels
$('#med_difficulty').on("click", function() {
    newGame(10, 4000);
});
$('#hard_difficulty').on("click", function() {
    newGame(20, 3000);
});
$('#easy_difficulty').on("click", function() {
    newGame(4, 2000);
});



