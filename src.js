var prompt = require('prompt');

var board = [ ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' ];

const showBoard = () => {
  console.log(`  ${board[0]} | ${board[1]} | ${board[2]} \n ------------ \n  ${board[3]} | ${board[4]} | ${board[5]} \n ------------ \n  ${board[6]} | ${board[7]} | ${board[8]} `);
};

const showBoardPositions = () => {
  console.log(`These are the positions on the board!\n  0 | 1 | 2 \n ------------ \n  3 | 4 | 5 \n ------------ \n  6 | 7 | 8 `);
};

const addToBoard = (position, player) => {
  board[position] = player;
}

const checkValidMove = (position) => {
  return board[position] === ' ';
}

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkTie = () => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === ' ') {
      return false;
    }
  }
  return true;
};

const checkWin = (player) => {
  for (let i = 0; i < winConditions.length; i++) {
    let mark = 0;
    for (let j = 0; j < winConditions[i].length; j++) {
      if (board[winConditions[i][j]] === player) {
        mark++;
      }
      if (mark === 3) {
        return true;
      }
    }
  }
  return false;
}

const playGame = (player) => {
  console.log('current player is: ', player);
  prompt.start();
  prompt.get(['position'], function (err, result) {
    const { position } = result;
    // check if move is valid
    if (checkValidMove(position)) {
      // add move
      addToBoard(position, player);
      showBoard();
      // check win condition
      if (checkWin(player)) {
        console.log(`Player ${player} has won!`);
        return;
      }
      // check tie condition
      if (checkTie()) {
        console.log('It is a tie!');
        return;
      }
      // switch to other player
      if (player === 'X') {
        playGame('O');
      } else {
        playGame('X');
      }

    } else {
      console.log('invalid input, please try again');
      showBoard();
      playGame(player);
    }
  });
}

showBoardPositions();
playGame('X');



// addToBoard(0,'X');
// addToBoard(1,'X');
// addToBoard(2,'X');
// addToBoard(3,'O');
// addToBoard(4,'O');
// addToBoard(5,'X');
// addToBoard(6,'X');
// addToBoard(7,'O');
// addToBoard(8,'O');

// /* board should be this

//  X  |  X  |  X
// ----------------
// ' ' | ' ' | ' '
// ----------------
// ' ' | ' ' | ' '

// */

// console.log(`  ${board[0]} | ${board[1]} | ${board[2]} \n ------------ \n  ${board[3]} | ${board[4]} | ${board[5]} \n ------------ \n  ${board[6]} | ${board[7]} | ${board[8]} `);

// console.log(checkWin('X')); // true
// console.log(checkWin('0')); // false
// console.log(checkTie()); // true
