/////////////////


var wins = [],
    losses = [];

// var makeZero = 0;

$("body").keyup(function(event) {
    var computerLetterGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ],
        computerResult = Math.floor(Math.random() * computerLetterGuess.length + 1),
        userLetterGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ],
        userResult = Math.floor(Math.random() * userLetterGuess.length + 1);


    if (event.keyCode < 65 || event.keyCode > 90) return;

    var keyPressed = event.key;

    if (userResult === computerResult) {
        wins++;
        $("#wincounter").text(wins);
        alert("You picked " + keyPressed + " You win!");

    };

    if (userResult != computerResult) {
        losses++;
        $("#losscounter").text(losses);
    };

});



$("button").click(function() {

    $("#wincounter").text(wins = 0);
    $("#losscounter").text(losses = 0);

});


































// wrongGuesses = [];
// guessesLeft = 9;
// indexOfWordToGuess = Math.floor(Math.random() * wordBank.length);
// wordToGuess = wordBank[indexOfWordToGuess];
// wordToDisplay = [];
// for (var i = 0; i < wordToGuess.length; i++) {
//     wordToDisplay.push("_");
// }

// console.log(wordToGuess);

// //update ui
// setWordBlanks();
// setWrongGuesses();
// setGuessesLeft();
// }

// /// UI Modifiers
// function setWrongGuesses() {
//     $("#wrong-guesses").text(wrongGuesses.join(", "));
// }

// function setWordBlanks() {
//     $("#word-blanks").text(wordToDisplay.join(" "));
// }

// function setGuessesLeft() {
//     $("#guesses-left").text(guessesLeft);
// }

// function setWinCounter() {
//     $("#win-counter").text(wins);
// }

// function setLossCounter() {
//     $("#loss-counter").text(losses);
// }
