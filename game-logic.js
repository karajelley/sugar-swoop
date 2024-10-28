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
/*       if (frames % 100 === 0) {
        new CottonCandyCloud();
      }
      if (frames % 500 === 0) {
        game.level++;
        game.updateLevel();
      } */
      requestAnimationFrame(gameLoop);
    }
  }

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
        // Call the interactable's handleCrash method
        interactable.handleCrash(); 
        interactable.destroy(); // Destroy the interactable
       // appearPowElement(enemy.left, enemy.top);
    }
}


  requestAnimationFrame(gameLoop);
