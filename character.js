// Create parent class for player, powerups, and enemies.
class Character {
    constructor(element, speed, top = 0, left = 0) {
        if (typeof element === 'string') {
            this.element = document.querySelector(element);
            this.element.className = element; 
        } else {
            this.element = element; 
        }

        this.speed = speed;
        this.top = top; 
        this.left = left; 

        
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
        this.left = Math.random() * (game.width - this.element.offsetWidth); 
        this.top = game.height; 

        this.element.style.position = 'absolute'; 
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
       
        this.element.remove();
    
        // delete the interactable from the array
        const index = game.interactableArray.indexOf(this);
        if (index > -1) {
            game.interactableArray.splice(index, 1);
        }
        this.updatePosition()
    }
}
