// Candy Coin class inheriting from Interactable
// **Not currently being used in the game
class CandyCoin extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-coin";
        element.innerText = ""; 
        super(element, speed); 

        this.width = this.element.offsetWidth;  
        this.height = this.element.offsetHeight; 

        this.updatePosition(); 

    }

    
    // Override the crash behavior
    handleCrash() {
        playChingSound()
        game.increaseScore(10)
    }

    handleBullet() {
        game.increaseScore(10);
    }
}

function createCandyCoin(){
    new CandyCoin(1);
    }
/* setInterval(createCandyCoin, 3500);
   Not currently featured in the game */


// Lollipop Token class inheriting from Interactable
class LollipopToken extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "lollipop-token";
        element.innerText = ""; 
        super(element, speed); 

        this.width = this.element.offsetWidth;  
        this.height = this.element.offsetHeight; 

        this.updatePosition(); 

    }

    
    // Override the crash behavior
    handleCrash() {
        playChingSound()
        game.increaseScore(5)
    }

    handleBullet() {
        game.increaseScore(5);
    }
}

function createLollipopToken(){
    new LollipopToken(1);
    }
setInterval(createLollipopToken, 3050);



// Candy Heart class inheriting from Interactable
class CandyHeart extends Interactable {
    constructor(speed) {
        const element = document.createElement("div");
        element.className = "candy-heart";
        element.innerText = ""; 
        super(element, speed); 

        this.width = this.element.offsetWidth;  
        this.height = this.element.offsetHeight; 

        this.updatePosition(); 

    }

    
    // Override the crash behavior
    handleCrash() {
        playChingSound()
        game.increaseLives(1);
    }

    handleBullet() {
        game.increaseLives(1);
    }
}

function createCandyHeart(){
    new CandyHeart(0.8);
    }
setInterval(createCandyHeart, 12550);
