//I got descrpiton of methods from assigment

class Game {

    constructor () {
      //used to track the number of missed guesses by the player. 
      //The initial value is 0, since no guesses have been made at the start of the game.
      this.missed = 0;
      //an array of five Phrase objects to use with the game. 
      //A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
      this.phrases = ['Im going to make him an offer he cant refuse','May the Force be with you', 'ET phone home',
      'I see dead people', 'Houston we have a problem', 'Say hello to my little friend', 'Heres Johnny', 
      'My precious','jazz'];
      //This is the Phrase object that’s currently in play
      this.activePhrase = null;
    }
  //hides the start screen overlay, calls the getRandomPhrase() method, 
  //and sets the activePhrase property with the chosen phrase. 
  //It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
    startGame () {
      $('#overlay').hide();
      phrase = new Phrase(this.getRandomPhrase());
      this.activePhrase = phrase.phrase;
      phrase.addPhraseToDisplay();
    }
  //this method randomly retrieves one of the phrases
  //stored in the phrases array and returns it.
    getRandomPhrase () {
      return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
  //this method controls most of the game logic. It checks to see 
  //if the button clicked by the player matches a letter in the phrase, 
  //and then directs the game based on a correct or incorrect guess
  /**
   * 
   * @param {string} - Letter that user choosed 
   */
    handleInteraction (index) {
      let buttons = document.querySelectorAll('button.key');
      if (phrase.checkLetter(index)) {
        phrase.showMatchedLetter();
      } else {
        game.removeLife();
      }
      buttons.forEach(keyLetter => {
        if (keyLetter.innerHTML === index && phrase.checkLetter(index)) {
          keyLetter.className = 'key chosen';
          keyLetter.disabled = true;
        } else if (keyLetter.innerHTML === index) {
          keyLetter.className = 'key wrong';
          keyLetter.disabled = true;
        }
      });
      if (game.checkForWin()) {
        game.gameOver();
      }
    }
  //this method removes a life from the scoreboard, 
  //by replacing one of the liveHeart.png images with a lostHeart.png image 
  //(found in the images folder) and increments the missed property. 
  //If the player has five missed guesses (i.e they're out of lives), 
  //then end the game by calling the gameOver() method.
    removeLife () {
      this.missed = this.missed + 1;
      document.querySelectorAll('.tries img')[this.missed-1].src = 'images/lostHeart.png';
      if(this.missed == 1){
      $("#hg1").hide()
      $("#hg2").show()
      }
      if(this.missed == 2){
      $("#hg2").hide()
      $("#hg3").show()
        }
      if(this.missed == 3){
        $("#hg3").hide()
        $("#hg4").show()
      }
      if(this.missed == 4){
        $("#hg4").hide()
        $("#hg5").show()
      }
      if(this.missed >= 5){
        $("#hg5").hide()
        $("#hg6").show()
        game.gameOver();
      }
  
    }
  //this method checks to see if the player has revealed all of the letters in the active phrase
    checkForWin () {
      let allletters = document.querySelectorAll('li.letter');
      let visibleletters = document.querySelectorAll('li.show.letter');
      if (visibleletters.length === allletters.length) {
        return true;
      }
      return false;
    }
  //this method displays the original start screen overlay, and depending on the outcome of the game, 
  //updates the overlay h1 element with a friendly win or loss message
    gameOver () {
      if (game.checkForWin()) {
        document.querySelector('#overlay').className = 'win';
        document.querySelector('#game-over-message').textContent = 'You won!';
        $('#overlay').show()
        document.querySelector('#btn__reset').textContent = 'Start New Game';
      } else {
        document.querySelector('#overlay').className = 'lose';
        document.querySelector('#game-over-message').textContent = 'You lose!';
        $('#overlay').show()
        document.querySelector('#btn__reset').textContent = 'Start New Game';
      }
  
      start();
    }
  }