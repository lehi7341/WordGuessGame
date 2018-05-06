// Global Variables
// _________________________________________________________________________________________________________
// Arrays and Variables for holding data
var wordChoices = ["christopher", "braxton", "desiree", "kailyn", "leonardo", "sabrina", "kendrick", "shaylee"];
var wordSelected = "";
var wordLetters = [];
var blankCount = 0;
var blanksAndCorrects = []; // c_ _ _ _ _ _ _ _ _ _
var wrongSelections = [];

// Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// Functions
// _________________________________________________________________________________________________________
function startGame () {
    wordSelected = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    wordLetters = wordSelected.split("");
    blankCount = wordLetters.length;

    // Reset
    guessesLeft = 9;
    wrongSelections = [];
    blanksAndCorrects = [];

    // Populate blanksAndCorrects with right number of blanks
    for (var i=0; i<blankCount; i++) {
        blanksAndCorrects.push("_");
    }

    // Change HTML to reflect game
    document.getElementById("wordToGuess").innerHTML = blanksAndCorrects.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    // Test
    console.log(wordSelected);
    console.log(wordLetters);
    console.log(blankCount);
    console.log(blanksAndCorrects);
}
    
function checkLetters(letter) {
        // Check if letter exists in code at all
        
        var isLetterInWord = false;
        
        for (var i=0; i<blankCount; i++) {
            if(wordSelected[i] == letter) {
                isLetterInWord = true;
            }
        }

        // Check where the word letter exists, then populate out of blanksAndCorrects array
        if(isLetterInWord) {
            for (var i=0; i<blankCount; i++) {
                if(wordSelected[i] == letter) {
                    blanksAndCorrects[i] = letter;
                }
            }
        }

        // Letter wasn't found
        else {
            wrongSelections.push(letter);
            numGuesses--
        }

        // Test
        console.log(blanksAndCorrects);


    }

    function roundComplete() {
        console.log("Win Count: " + windCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);
        
    }

// Main Process
// _________________________________________________________________________________________________________

// Initiates the code the first time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkLetters(letterGuessed);
    // Test
    console.log(letterGuessed);
}