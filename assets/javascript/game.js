// define variables for HTML elements
var wins = 0;
var losses = 0;
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var lettersTriedSpan = document.getElementById("lettersTried");
var guessLeft = document.getElementById("guessLeft");
var numGuesses = 15;
guessLeft.innerText = numGuesses;
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
    "Mona Lisa Saperstein",
    "Jean Ralphio Saperstein",
    "Mark Brendanawicz",
    "The Douche",
    "Tammy Swanson",
    "Joan Callamezzo",
    "Perd Hapley",
    "Lil Sebastian"];

var currentWord = document.getElementById("word");

var word = "";

var blankWord = [];

function startGame() {
    lettersTriedSpan.innerText = "";
    numGuesses = 15;
    guessLeft.innerText = numGuesses;
    // randomly picks a word from the array
    var randomNumber = Math.floor(Math.random() * wordList.length);
    word = wordList[randomNumber];
    blankWord = []

    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === " ") {
            blankWord.push('\xa0');
        } else {
            blankWord.push("_");
        }
    }
    currentWord.innerText = blankWord.join('\xa0');
    console.log(word);
}
startGame()

// onkeyup functions
document.onkeyup = function (event) {
    if (numGuesses === 0) {
        return
    }
    var playerChoice = event.key;

    for (var i = 0; i < word.length; i++) {
        if (playerChoice.toLowerCase() === word.charAt(i).toLowerCase()) {
            blankWord[i] = word.charAt(i);
        } else {
            if (!lettersTriedSpan.innerText.toLowerCase().includes(playerChoice) && !word.toLowerCase().includes(playerChoice)) {
                lettersTriedSpan.innerText += playerChoice + ",\xa0";
                numGuesses -= 1;
                guessLeft.innerText = numGuesses;
            }
        }
    }
    currentWord.innerText = blankWord.join("\xa0");

    // lettersTriedSpan.innerText += playerChoice + ",\xa0";

    if (blankWord.join("").replace("\xa0", " ") === word) {
        console.log("you win")
        wins += 1;
        winsSpan.innerText = wins;
        startGame()
        // } else {
        //     numGuesses -= 1;
    }

    if (numGuesses === 0) {
        console.log("you lose");
        losses += 1;
        lossesSpan.innerText = losses;
        startGame()
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