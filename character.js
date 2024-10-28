// Create parent class for player, powerups, and enemies.
class Character {
    constructor(element, speed, top = 0, left = 0) {
        if (typeof element === 'string') {
            this.element = document.querySelector(element);
            this.element.className = element; // Set class name from the selector
        } else {
            this.element = element; // For newly created elements
        }

        this.speed = speed;
        this.top = top; 
        this.left = left; 

        // Append the element only if it exists (not for the Player, since it is queried)
        if (this.element) {
            game.gameArea.appendChild(this.element);
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
    }
}


//Interactable elements (enemies and powerups basic movements)
  class Interactable extends Character {
    constructor(element, speed) {
        super(element, speed);
        this.left = Math.random() * (game.width - this.element.offsetWidth); // Random horizontal position
        this.top = game.height; // Start from the bottom of the screen

        this.element.style.position = 'absolute'; // Ensure the element is positioned absolutely
        this.updatePosition();
        
        game.interactableArray.push(this);
    }

    move() {
        console.log("Moving Interactable");
        this.top -= this.speed;
    
        if (this.top <= 0  - this.height) {
            this.destroy();
        }
    
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";

        this.updatePosition();
    }
    
    destroy() {
        console.log("deleting?");
        // delete the html element
        this.element.remove();
    
        // delete the interactable from the array
        const index = game.interactableArray.indexOf(this);
        if (index > -1) {
            game.interactableArray.splice(index, 1);
        }
        this.updatePosition()
    }
}
