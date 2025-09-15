// Beginner-friendly Word Guesser
var wordLetters = ['G', 'O', 'A', 'T'];
var guessedLetters = ['_', '_', '_', '_'];
var reward = 0;

function guessLetter(letter) {
  var goodGuess = false;
  var moreToGuess = false;

  for (var i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] === letter) {
      guessedLetters[i] = letter;
      goodGuess = true;
    }
    if (guessedLetters[i] === '_') {
      moreToGuess = true;
    }
  }

  if (goodGuess) {
    var randomReward = Math.floor(Math.random() * 100) + 1;
    reward += randomReward;
    console.log('Yay, you found a letter! +$' + randomReward);
    console.log(guessedLetters.join(' '));
    if (!moreToGuess) {
      console.log('YOU WON! Final reward: $' + reward);
    }
  } else {
    var penalty = 10;
    reward -= penalty;
    console.log('Oh noes, that’s not right! -$' + penalty);
  }

  console.log('Current reward: $' + reward);
}

// test guesses
guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');
