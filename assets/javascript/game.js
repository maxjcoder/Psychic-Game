var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = [];

document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

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

        document.querySelector("#game").innerHTML = html;

    }
};

