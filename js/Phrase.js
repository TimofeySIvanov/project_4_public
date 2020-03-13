//I got descrpiton of methods from assigment

class Phrase {
  /**
   * 
   * @param {string} phrase - The phrase used in game
   */
    constructor (phrase) {
      //phrase: this is the actual phrase the Phrase object is representing. 
      this.phrase = phrase.toLowerCase();
    }
  //this adds letter placeholders to the display when the game starts. 
  //Each letter is presented by an empty box, one li element for each letter
    addPhraseToDisplay () {
      this.phrase.split('').forEach(letter => {
        var element = document.createElement('li');
        if ((/\s/).test(letter)) {
          element.className = 'space';
          element.textContent = ' ';
          $('#phrase ul').append(element);
        } else {
          element.className = `hide letter `+letter;
          element.textContent = letter;
          $('#phrase ul').append(element);
        }
      });
    }
  //checks to see if the letter selected by the player matches a letter in the phrase.
  /**
   * 
   * @param {string} - Letter that user choosed 
   */
    checkLetter (letter) {
      if (this.phrase.split('').includes(letter)) {
        phrase.showMatchedLetter(letter);
        return true;
      } else {
        return false;
      }
    }
  //reveals the letter(s) on the board that matches the player's selection. 
  /**
   * 
   * @param {string} - Letter that user choosed 
   */
    showMatchedLetter (letter) {
      let box_phrase = document.querySelectorAll(`.letter.`+letter);
      box_phrase.forEach(letter => {
        letter.className = `show letter `+letter;
      });
    }
  }