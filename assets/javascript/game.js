// Create the game, use an array for the alphabet and then set values for the diff. variables realted to gameplay, scoring, & chances left

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = [];

//Create an event listener that realtes to the key pressed that will help log the keystroke "up"

document.onkeyup = function (event) {

// need an event.key value for user guess and some logic to randomize the computer's choice, finally an array is needed for the letters that the user will guess

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// create logic for wins, losses, and guesses left; looking to give the user nine chances to guess what the computer picked for its letter; basically some if statments with logic comparison operators for 'euality or difference'. I am using "equal to", "not equal to", and am trying to account for the length of times, "9", that a user can guess.

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            left = 9;
            guesses = [];
        }
        if (userGuess != computerGuess) {
            left--;
            guesses.push(userGuess);
        }
        if (left === 0) {
            left = 9;
            losses++;
            guesses = [];
        }

//create logic that writes HTML to the page using JS; (heading, directions, "<hr>", scoring, and chances/guesses left" simplicity is a must, look for DRY code: 2/16/16 :: join() proved to be helpful! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join :: shared with class

        var html =
            "<h1> The Psychic Game </h1>" +
            "<hr>" +
            "<p>Guess what letter I am thinking of!</p>" +
            "<hr>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + left + "</p>" +
            "<p>Your Guesses so far: " + guesses.join(", ") + "</p>" +
            "<hr>";

// Reach out to the "id game" using document. / .innerHTML to write the HTML 

        document.querySelector("#game").innerHTML = html;

    }
};

