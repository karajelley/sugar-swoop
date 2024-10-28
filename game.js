class Game {
    constructor() {
      this.isGameOver = false;
      this.lives = 5;
      this.level = 1;
      this.gameArea = document.querySelector("#game-area");
      this.width = this.gameArea.getBoundingClientRect().width;
      this.height = this.gameArea.getBoundingClientRect().height;
      this.interactableArray = [];
      this.livesElement = document.querySelector("#lives");
      this.levelElement = document.querySelector("#level");
      this.gameOverScreen = document.querySelector("#game-over");
      this.updateLives();
    }
  
    updateLives() {
      this.livesElement.innerText = "❤️".repeat(this.lives);
    }
    updateLevel() {
      this.levelElement.innerText = this.level.toString();
    }
  }
  
  let game = new Game();