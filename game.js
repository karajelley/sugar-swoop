class Game {
    constructor() {
      this.isGameOver = false;
      this.score = 0;
      this.lives = 1;
      this.level = 1;
      this.gameArea = document.querySelector("#game-area");
      this.width = this.gameArea.getBoundingClientRect().width;
      this.height = this.gameArea.getBoundingClientRect().height;
      this.interactableArray = [];
      /* this.bulletArray[]; */
      this.scoreElement = document.querySelector("#score");
      this.livesElement = document.querySelector("#lives");
      this.levelElement = document.querySelector("#level");
      this.gameOverScreen = document.querySelector("#game-over");
      this.updateLives();
      this.updateScore();
    }
  
    updateLives() {
      this.livesElement.innerText = "❤️".repeat(this.lives);
    }


    updateLevel() {
      this.levelElement.innerText = this.level.toString();
      }


    updateScore() {
        this.scoreElement.innerText = `${this.score}`;
    }



    //Method to add life
    increaseLives(amount) {
        if (this.lives <= 4) {
            this.lives += amount;
            this.updateLives();
        }
    }

    //Method to remove life
    decreaseLives(amount) {
        if (this.lives >= 0) {
            this.lives -= amount;
            this.updateLives();
        }
    }


    // Method to increase score
    increaseScore(amount) {
        this.score += amount;
        this.updateScore();
    }

    // Method to decrease score
    decreaseScore(amount) {
        this.score -= amount;
        this.updateScore();
    }

  }
  
  let game = new Game();