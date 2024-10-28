// Create parent class for player, powerups, and enemies.
class Character {
    constructor(element, speed, top = 0, left = 0, direction = null) {
        if (typeof element === 'string') {
            this.element = document.querySelector(element);
            this.element.className = element;
        } else {
            this.element = element; // For newly created elements
        }
        this.speed = speed;
        this.top = top; 
        this.left = left; 
        this.direction = direction; 
        
        game.gameArea.appendChild(this.element); 

        this.width = this.element.getBoundingClientRect().width
        this.height = this.element.getBoundingClientRect().height;

        

        this.updatePosition();
    }

    updatePosition() {
        // Update the element's position based on its left and top values
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
    }

  }

//Interactable elements (enemies and powerups basic movements)
  class Interactable extends Character {
    constructor(speed) {

        const element = document.createElement("div");
        super(speed);

        this.left = Math.random() * (game.gameArea.clientHeight - this.width); // Random horizontal position
        this.top = game.gameArea.clientHeight;; // Start from the right edge

        this.element.style.position = 'absolute'; // Ensure the enemy can be positioned absolutely
        game.interactableArray.push(this);
        this.updatePosition();
    }


    move() {

        console.log("Moving Interactable");
        this.top -= this.speed;
    
        if (this.top <= 0 + this.height) {
            this.destroy();
        }
    
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";

        this.updatePosition();
    }
    
    destroy() {
        // delete the html element
        this.element.remove();
    
        // delete the interactable from the array
        const index = game.interactableArray.indexOf(this);
        game.interactableArray.splice(index, 1);

        this.updatePosition()
    }
}