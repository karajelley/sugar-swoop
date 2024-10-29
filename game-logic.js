// this file is in charge of all the game logic, event listeners, etc

//allowing the player to move with arrow keys
document.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch (e.key) {
      case "a":
      case "ArrowLeft":
        player.direction = "left";
        break;
      case "d":
      case "ArrowRight":
        player.direction = "right";
        break;
      case "s":
      case "ArrowDown":
        player.direction = "down";
        break;
      case "w":
      case "ArrowUp":
        player.direction = "up";
        break;
    }
  });

  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "a":
      case "ArrowLeft":
      case "d":
      case "ArrowRight":
      case "s":
      case "ArrowDown":
      case "w":
      case "ArrowUp":
        player.direction = null;
        break;
    }
  });


  let frames = 0;

  function gameLoop() {
    if (!game.isGameOver) {
      frames++;
      player.move();

      game.interactableArray.forEach((interactable) => {
        interactable.move();
        crashTest(interactable);
      });

      if (frames % 2000 === 0) {
        game.level++;
        game.updateLevel();
        setInterval(createCandyLighteningBolt, 30000)
        setInterval(createCandyBandit, 25000);
        setInterval(CandyCoin, 20000)
        new CottonCandyCloud(2);
      }

      
      requestAnimationFrame(gameLoop);
    }
  }
  
  requestAnimationFrame(gameLoop);


  function crashTest(interactable) {
    const playerLeftEdge = player.left;
    const playerRightEdge = player.left + player.width;
    const playerTopEdge = player.top;
    const playerBottomEdge = player.top + player.height;

    const interactableLeftEdge = interactable.left;
    const interactableRightEdge = interactable.left + interactable.width;
    const interactableTopEdge = interactable.top; 
    const interactableBottomEdge = interactable.top + interactable.height;

    if (
        playerLeftEdge < interactableRightEdge &&
        playerRightEdge > interactableLeftEdge &&
        playerTopEdge < interactableBottomEdge &&
        playerBottomEdge > interactableTopEdge
    ) {
        interactable.handleCrash(); 
        interactable.destroy();
 /*        appearPowElement(interactable.left, interactable.top); */
        if (game.lives <= 0) {
            game.isGameOver = true;
            game.gameOverScreen.style.display = "flex";
          }

       // appearPowElement(enemy.left, enemy.top);
    }
}

function restartGame() {
    game.gameOverScreen.style.display = "none";
    game = new Game();
    player = new Player('#player', 5);
    requestAnimationFrame(gameLoop);
  }
  
  const restartButtonElement = document.querySelector("#restart-game");
  
  restartButtonElement.addEventListener("click", () => {
    window.location.reload()
    restartGame();
  });

/*   function appearPowElement(left, top) {
    const powElement = document.createElement("div");
    powElement.classList.add("pow");
    powElement.style.left = left + "px";
    powElement.style.top = top + "px";
    game.gameArea.appendChild(powElement);
    game.gameArea.classList.add("shake");
  
    setTimeout(() => {
      powElement.remove();
      game.gameArea.classList.remove("shake");
    }, 300);
  } */


