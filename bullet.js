//Bullet class
/* class Fire extends Character {
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
  
} */


  class Bullet extends Character {
    constructor(player) {
        const element = document.createElement('div');
        element.className = 'bullet'; // Assign the 'bullet' CSS class
        super(element, 10); // Speed is set here (you can adjust it)
        
        // Position bullet at the bottom of the player
        this.left = player.left + (player.width / 2) - (this.element.offsetWidth / 2);
        this.top = player.top + player.height;
        
        // Add the bullet to the game area
        game.gameArea.appendChild(this.element);
        game.bulletArray.push(this);
        
        this.width = this.element.offsetWidth;  // Set bullet width
        this.height = this.element.offsetHeight; // Set bullet height
    }

    move() {
      console.log("Bullet moving!")
        this.top += this.speed; // Move bullet upwards
        this.updatePosition(); // Update the bullet's position on the screen

        // Destroy if it goes off-screen
        if (this.top >= game.height) {
            this.destroy();
        }
    }

    destroy() {
      console.log("deleting bullet");
        // Remove the bullet from the DOM
        this.element.remove();

        // Remove the bullet from the array
        const index = game.bulletArray.indexOf(this);
        if (index > -1) {
            game.bulletArray.splice(index, 1);
        }
    }
}


function createBullet() {
  if (isShooting) {
      new Bullet(player);
  }
}
