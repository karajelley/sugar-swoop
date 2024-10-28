// Enemy classes inheriting from Interactable
class CottonCandyCloud extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "cotton-candy-cloud"; // Set class name for CSS
        element.innerText = "☁️"; // Visual representation

        super(speed);
        this.element = element; // Assign the newly created element
/*         this.element.className = "cotton-candy-cloud";
        this.element.innerText = "☁️"; */
        game.gameArea.appendChild(this.element);
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    // Override the crash behavior
    handleCrash() {
        // Slow the player down
        player.speed = player.speed / 2; // Slow down the player
        setTimeout(() => {
            player.speed *= 2; // Restore speed after 5 seconds or any desired duration
        }, 5000);
    }

}

let cottonCandyCloud = new CottonCandyCloud(10);