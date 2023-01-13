// Factory Functions
const player = (name, marker) => ({ name, marker });

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

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
  let currentPlayer = player1;

  const swapPlayerTurn = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  const placeMarker = (e) => {
    const i = e.target.dataset.index;
    if (gameBoard.boardArray[i]) return;
    gameBoard.boardArray[i] = currentPlayer.marker;
    e.target.textContent = currentPlayer.marker;
    swapPlayerTurn();
  };

  const tiles = document.querySelectorAll(".gameBoard div");
  tiles.forEach((tile) => tile.addEventListener("click", placeMarker));
})();
