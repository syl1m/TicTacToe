// Factory Functions
const player = (name, marker) => ({ name, marker });

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");
let currentPlayer = player1;
let gameState = "unresolved";

// Modules
const gameBoard = (() => {
  const boardArray = new Array(9);
  const gameBoardDiv = document.querySelector(".gameBoard");

  const displayBoard = (() => {
    for (let i = 0; i < 9; i++) {
      const tile = document.createElement("div");
      tile.textContent = "";
      tile.dataset.index = i;
      gameBoardDiv.appendChild(tile);
    }
  })();

  return { boardArray };
})();

const playGame = (() => {
  const checkWinState = () => {
    if (
      gameBoard.boardArray[0] === gameBoard.boardArray[1] &&
      gameBoard.boardArray[0] === gameBoard.boardArray[2] &&
      gameBoard.boardArray[0]
    ) {
      gameState = "win";
    } else if (
      gameBoard.boardArray[3] === gameBoard.boardArray[4] &&
      gameBoard.boardArray[3] === gameBoard.boardArray[5] &&
      gameBoard.boardArray[3]
    ) {
      gameState = "win";
    } else if (
      gameBoard.boardArray[6] === gameBoard.boardArray[7] &&
      gameBoard.boardArray[6] === gameBoard.boardArray[8] &&
      gameBoard.boardArray[6]
    ) {
      gameState = "win";
    } else if (
      gameBoard.boardArray[0] === gameBoard.boardArray[3] &&
      gameBoard.boardArray[0] === gameBoard.boardArray[6] &&
      gameBoard.boardArray[0]
    ) {
      gameState = "win";
    } else if (
      gameBoard.boardArray[1] === gameBoard.boardArray[4] &&
      gameBoard.boardArray[1] === gameBoard.boardArray[7] &&
      gameBoard.boardArray[1]
    ) {
      gameState = "win";
    } else if (
      gameBoard.boardArray[2] === gameBoard.boardArray[5] &&
      gameBoard.boardArray[2] === gameBoard.boardArray[8] &&
      gameBoard.boardArray[2]
    ) {
      gameState = "win";
    } else if (
      gameBoard.boardArray[0] === gameBoard.boardArray[4] &&
      gameBoard.boardArray[0] === gameBoard.boardArray[8] &&
      gameBoard.boardArray[0]
    ) {
      gameState = "win";
    } else if (
      gameBoard.boardArray[2] === gameBoard.boardArray[4] &&
      gameBoard.boardArray[2] === gameBoard.boardArray[6] &&
      gameBoard.boardArray[2]
    ) {
      gameState = "win";
    } else if (!gameBoard.boardArray.includes(undefined)) {
      gameState = "tie";
    }

    return gameState;
  };

  const swapPlayerTurn = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  const gameOver = () => {
    if (gameState === "win") {
      alert(`${currentPlayer.name} has won the game`);
    } else {
      alert("Tie game!");
    }
  };

  const placeMarker = (e) => {
    if (gameState === "tie" || gameState === "win") return;
    const i = e.target.dataset.index;
    if (gameBoard.boardArray[i]) return;
    gameBoard.boardArray[i] = currentPlayer.marker;
    e.target.textContent = currentPlayer.marker;
    checkWinState();
    if (gameState === "win" || gameState === "tie") {
      gameOver();
    } else {
      swapPlayerTurn();
    }
  };

  const tiles = document.querySelectorAll(".gameBoard div");
  tiles.forEach((tile) => tile.addEventListener("click", placeMarker));

  return {};
})();

const displayController = (() => {
  const restartGame = () => {
    currentPlayer = player1;
    gameState = "unresolved";
    gameBoard.boardArray = new Array(9);
    const gameBoardDivs = document.querySelectorAll(".gameBoard div");
    gameBoardDivs.forEach((div) => (div.textContent = ""));
  };

  const restartBtn = document.querySelector(".restartBtn button");
  restartBtn.addEventListener("click", restartGame);
})();
