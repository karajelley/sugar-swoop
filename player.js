class Player extends Character {
  constructor(element, speed) {
    super(element, speed);
    this.top = (game.height / 2) - (this.element.offsetHeight / 2); 
    this.left = (game.width / 2) - (this.element.offsetWidth / 2); 

    this.width = this.element.offsetWidth; 
    this.height = this.element.offsetHeight; 

    this.updatePosition(); 
    }

    move() {
        switch (this.direction) {
            case "up":
              if (this.top <= 0) {
                this.top = 0; 
              } else {
                this.top -= this.speed;
              }
              break;
            case "down":
              if (this.top >= game.height - this.height) {
                this.top = game.height - this.height;
              } else {
                this.top += this.speed;
              }
              break;
            case "left":
              if (this.left <= 0) {
                this.left = 0;
              } else {
                this.left -= this.speed;
              }
              break;
            case "right":
              if (this.left >= game.width - this.width) {
                this.left = game.width - this.width;
              } else {
                this.left += this.speed;
              }
              break;
          }

          this.updatePosition(this.element); 
    }
}

let player = new Player('#player', 5);
