// Factory Functions
const player = (name, marker) => ({ name, marker });

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

// Modules
const gameBoard = (() => {
  const boardArray = [
    player1.marker,
    player2.marker,
    player1.marker,
    player2.marker,
    player1.marker,
    player2.marker,
    player1.marker,
    player2.marker,
    player1.marker,
  ];

  const gameBoardDiv = document.querySelector(".gameBoard");

  const displayBoard = () => {
    for (let i = 0; i < gameBoard.boardArray.length; i++) {
      const tile = document.createElement("div");
      tile.textContent = `${gameBoard.boardArray[i]}`;
      tile.dataset.index = i;
      gameBoardDiv.appendChild(tile);
    }
  };

  return { boardArray, displayBoard };
})();

const displayController = (() => {
  const nextTurn = () => console.log("Next player move");
  return { nextTurn };
})();

gameBoard.displayBoard();
