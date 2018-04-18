// define variables for HTML elements
var wins = 0;
var losses = 0;
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var lettersTriedSpan = document.getElementById("lettersTried");
var guessLeft = document.getElementById("guessLeft");
guessLeft.innerText = 10;
var wordList = [
    "Tom Haverford",
    "Ben Wyatt",
    "Leslie Knope",
    "Jerry Gergich",
    "Ron Swanson",
    "Donna Meagle",
    "Andy Dwyer",
    "April Ludgate",
    "Chris Traeger",
    "Ann Perkins",
    "Jeremy Jamm",
    "Greg Pikitis",
    "Mona-Lisa Saperstein",
    "Jean-Ralphio Saperstein",
    "Mark Brendanawicz",
    "The Douche",
    "Tammy Swanson",
    "Joan Callamezzo",
    "Perd Hapley",
    "Li’l Sebastian"];

var currentWord = document.getElementById("word");
// randomly picks a word from the array
var randomNumber = Math.floor(Math.random() * wordList.length);
var word = wordList[randomNumber];
// currentWord.innerText = word;



// Hiding/Replacing words with blanks
var blankWord = []

for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === " ") {
        blankWord.push('\xa0');
    } else {
        blankWord.push("_");
    }
}
currentWord.innerText = blankWord.join('\xa0');


// onkeyup functions
document.onkeyup = function (event) {
    var playerChoice = event.key;
    if (word.includes(playerChoice)) {
        for (var i = 0; i < word.length; i++) {
            if (playerChoice.toUpperCase() === word.charAt(i).toUpperCase()) {
                blankWord[i] = word.charAt(i);
            }
        }
        currentWord.innerText = blankWord.join("\xa0");
    }



    lettersTriedSpan.innerText += playerChoice + ",  ";
    guessLeft.innerText -= 1;
    if (guessLeft.innerText === "0") {
        console.log("you lose");
        losses += 1;
        lossesSpan.innerText = losses;
    }
}









/*
done
    randomly choose word from
    recording the user guess
    display user guesses
    subtract guesses left

 to do
    update hangman as user guesses
    end game/restart game
    make guess left stop at 0
 
 
*/



// winsSpan.innerText = wins;
// lossesSpan.innerText = losses;
// attempsLeftSpan.innerText = attempsLeft;