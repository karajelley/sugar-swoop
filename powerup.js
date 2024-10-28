// Candy Coin class inheriting from Interactable
class CandyCoin extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-coin";
        element.innerText = "CC"; // Add visual representation
        super(element, speed); // Initialize the base class

        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    
    // Override the crash behavior
    handleCrash() {
        game.increaseScore(5)
    }
}

function createCandyCoin(){
    new CandyCoin(1.5);
    }
setInterval(createCandyCoin, 2050);