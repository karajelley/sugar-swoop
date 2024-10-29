//Bullet class
class Fire extends Character {
  constructor(element, speed) {
      super(element, speed); // Initialize the base class
      this.left = player.width - (player.left / 2); 
      this.top = player.height; 

      this.element.style.position = 'absolute';
      this.updatePosition();
      
      game.bulletArray.push(this);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}

  move() {
    console.log("Bullet moving!")
      this.top += this.speed;
  
      if (this.top <= game.height) {
          this.destroy();
      }
  
      this.element.style.left = this.left + "px";
      this.element.style.top = this.top + "px";

      this.updatePosition();
  }
  
  destroy() {
      console.log("deleting bullet");
      // delete the html element
      this.element.remove();
  
      // delete the interactable from the array
      const index = game.bulletArray.indexOf(this);
      if (index > -1) {
          game.bulletArray.splice(index, 1);
      }
      this.updatePosition()
  }
}


// Bullet class
class Bullet extends Fire {
  constructor(speed) {
      const element = document.createElement("div");
      element.className = "bullet";
      element.innerText = ""; // Add visual representation
      super(element, speed); // Initialize the base class
      this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
      this.height = this.element.offsetHeight; // Use offsetHeight to get the height

      this.updatePosition(); // Set initial position

  }
  
}

function createBullet(){
  new Bullet(5);
  }
