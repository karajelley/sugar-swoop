// Candy Coin class inheriting from Interactable
class CandyCoin extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-coin";
        element.innerText = ""; // Add visual representation
        super(element, speed); // Initialize the base class

        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    
    // Override the crash behavior
    handleCrash() {
        game.increaseScore(10)
    }

    handleBullet() {
        game.increaseScore(10);
    }
}

function createCandyCoin(){
    new CandyCoin(1);
    }
setInterval(createCandyCoin, 3500);


// Lollipop Token class inheriting from Interactable
class LollipopToken extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "lollipop-token";
        element.innerText = ""; // Add visual representation
        super(element, speed); // Initialize the base class

        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    
    // Override the crash behavior
    handleCrash() {
        game.increaseScore(5)
    }

    handleBullet() {
        game.increaseScore(5);
    }
}

function createLollipopToken(){
    new LollipopToken(1.5);
    }
setInterval(createLollipopToken, 8000);



// Candy Heart class inheriting from Interactable
class CandyHeart extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-heart";
        element.innerText = ""; // Add visual representation
        super(element, speed); // Initialize the base class

        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    
    // Override the crash behavior
    handleCrash() {
        game.increaseLives(1);
    }

    handleBullet() {
        game.increaseLives(1);
    }
}

function createCandyHeart(){
    new CandyHeart(1.5);
    }
setInterval(createCandyHeart, 9000);
