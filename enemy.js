// Cotton Candy Clouds class inheriting from Interactable
class CottonCandyCloud extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "cotton-candy-cloud";
        element.innerText = "☁️"; // Add visual representation
        super(element, speed); // Initialize the base class

        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    
    // Override the crash behavior
    handleCrash() {
        // Slow the player down
        player.speed = player.speed / 5; // Slow down the player
        setTimeout(() => {
            player.speed *= 5; // Restore speed after 5 seconds or any desired duration
        }, 3000);
        if (game.score >= 5) {
            game.decreaseScore(5)
        }
    }
    
}

function createCottonCandyCloud(){
    new CottonCandyCloud(2);
    }
setInterval(createCottonCandyCloud, 4000);


//// Candy Lightning Boltsclass inheriting from Interactable

class CandyLighteningBolt extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-lightening-bolt";
        element.innerText = "⚡️";
        super(element, speed);

        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    
    // Override the crash behavior
    handleCrash() {
        // Slow the player down
        player.speed = player.speed / 25; // Slow down the player
        setTimeout(() => {
            player.speed *= 25; // Restore speed after 5 seconds or any desired duration
        }, 3000);
        if (game.score >= 10) {
            game.decreaseScore(10)
        } else if (game.score >= 5 && game.score < 10) {
            game.score === 0;
        }
    }
    
}

function createCandyLighteningBolt(){
    new CandyLighteningBolt(2);
    }
setInterval(createCandyLighteningBolt, 5000);