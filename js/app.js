    //I got descrpiton of methods from assigment
    //Create a new instance of the Game class and 
    //add event listeners for the start button and onscreen keyboard buttons:
    let phrase, game, triedletters;
    const start = () => {
      phrase = null;
      game = null;
      triedletters = Array();
      document.querySelector('.section#phrase>ul').innerHTML = '';
      document.querySelectorAll('.key').forEach(butn => {
        butn.className = 'key';
        butn.disabled = false;
      });
      document.querySelectorAll('.tries img').forEach(life => {
        life.src = 'images/liveHeart.png';
        life.className = 'none';
      });
      $("#hg0").hide()
      $("#hg1").show()
      $("#hg2").hide()
      $("#hg3").hide()
      $("#hg4").hide()
      $("#hg5").hide()
      $("#hg6").hide()
    }
    // event listener to the "Start Game" button which creates 
    //a new Game object and starts the game by calling the startGame() method.
    
    document.querySelector('#btn__reset').addEventListener('click', () => {
      start();
      game = new Game();
      game.startGame();
    });
    
    document.querySelector('#qwerty').addEventListener('click', event => {
      if (event.target.tagName.toLowerCase() === 'button') {
        let key = event.target.innerHTML;
        game.handleInteraction(key);
      }
    });
    
    
    window.addEventListener('keyup', event => {
        if ((/^[a-z]/).test(event.key.toLowerCase()) && !triedletters.includes(event.key.toLowerCase())) {
          triedletters.push(event.key.toLowerCase());
          game.handleInteraction(event.key.toLowerCase());
      }
    });