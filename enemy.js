// Cotton Candy Clouds class inheriting from Interactable
class CottonCandyCloud extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "cotton-candy-cloud";
        element.innerText = ""; 
        super(element, speed); 
        this.width = this.element.offsetWidth;  
        this.height = this.element.offsetHeight; 

        this.updatePosition(); 

    }

    // Override the crash behavior
    handleCrash() {
        pauseBgSound();
        playLoseSound()
        applyShake();
        game.isGameOver = true;
        game.gameOverScreen.style.display = "flex";
    }

    handleBullet() {
        game.increaseScore(20);
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

        this.width = this.element.offsetWidth;  
        this.height = this.element.offsetHeight; 

        this.updatePosition(); 

    }

    
    // Override the crash behavior
    handleCrash() {
        playCrashSound()
        player.speed = player.speed / 25; 
        setTimeout(() => {
            player.speed *= 25; 
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
/* setInterval(createCandyLighteningBolt, 9000);
Currently, they are set to appear at higher levels */




//// Candy Bandit class inheriting from Interactable

class CandyBandit extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-bandit";
        element.innerText = "";
        super(element, speed);

        this.width = this.element.offsetWidth;  
        this.height = this.element.offsetHeight; 

        this.updatePosition(); 

    }

    
    // Override the crash behavior
    handleCrash() {
        playCrashSound()
        applyShake();
        player.speed = player.speed / 5; 
        setTimeout(() => {
            player.speed *= 5; 
        }, 3000);
        game.decreaseLives(1);
    }

    handleBullet() {
        game.increaseScore(5);
    }
    
}

function createCandyBandit(){
    new CandyBandit(0.85);
    }
setInterval(createCandyBandit, 6000);