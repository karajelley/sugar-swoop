// Cotton Candy Clouds class inheriting from Interactable
class CottonCandyCloud extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "cotton-candy-cloud";
        element.innerText = ""; // Add visual representation
        super(element, speed); // Initialize the base class
        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    // Override the crash behavior
    handleCrash() {

        applyShake();
        game.isGameOver = true;
        game.gameOverScreen.style.display = "flex";
        // Slow the player down
/*         player.speed = player.speed / 5; // Slow down the player
        setTimeout(() => {
            player.speed *= 5; // Restore speed after 5 seconds or any desired duration
        }, 3000);
        if (game.score >= 5) {
            game.decreaseScore(5)
        } else {
            game.score = 0;
            game.updateScore();
        } */
    }

    handleBullet() {
        game.increaseScore(5);
    }
    
}

function createCottonCandyCloud(){
    new CottonCandyCloud(1);
    }
setInterval(createCottonCandyCloud, 10000);


//// Candy Lightning Bolts class inheriting from Interactable

class CandyLighteningBolt extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-lightening-bolt";
        element.innerText = "";
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
        if (game.score > 10) {
            game.decreaseScore(10)
        } else {
            game.score = 0;
            game.updateScore();
        }
    }

    handleBullet() {
        game.increaseScore(10);
    }
    
}

function createCandyLighteningBolt(){
    new CandyLighteningBolt(.75);
    }
/* setInterval(createCandyLighteningBolt, 9000); */




//// Candy Bandit class inheriting from Interactable

class CandyBandit extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-bandit";
        element.innerText = "";
        super(element, speed);

        this.speed = 10;
        this.width = this.element.offsetWidth;  // Use offsetWidth to get the width
        this.height = this.element.offsetHeight; // Use offsetHeight to get the height

        this.updatePosition(); // Set initial position

    }

    
    // Override the crash behavior
    handleCrash() {
        applyShake();
        player.speed = player.speed / 5; // Slow down the player
        setTimeout(() => {
            player.speed *= 5; // Restore speed after 5 seconds or any desired duration
        }, 3000);
        // Lose a life
        game.decreaseLives(1);
    }

    handleBullet() {
        // Slow the player down
        game.increaseScore(20);
    }
    
}

function createCandyBandit(){
    let cB = new CandyBandit();
    }
//setInterval(createCandyBandit, 6000);
setInterval(()=>{
    createCandyBandit(),
    CandyBandit(150)
},6000)