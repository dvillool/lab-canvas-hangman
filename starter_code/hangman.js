'use strict';

function Hangman(secretWord, guessedLetters) {
  this.words = ["Annakin", "Leia", "Luke", "Chewbacca", "HanSolo", "DeathStar", "Ewooks"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetters = guessedLetters;
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function() {
  return (this.words[Math.floor(Math.random() * this.words.length)]);
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (65 <= keyCode && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {

  for (var i = 0; i < this.letters.length; i++) {
    if (key !== this.letters[i]) {
      this._checkIfLetter (key);
      return true;
    } else {
      return false;
    }
  }
};

Hangman.prototype._addCorrectLetter = function(i) {

};

Hangman.prototype._addWrongLetter = function(letter) {

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};

var testGame = new Hangman();
