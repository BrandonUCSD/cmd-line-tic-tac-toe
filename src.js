
var board = [ ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' ];

const addToBoard = (place, mark) => {
  board[place] = mark;
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
  let doneBoard = new Set(board);
  return [...doneBoard].length === 2;
};

const checkWin = (player) => {
  let mark;
  for (let i = 0; i < winConditions.length; i++) {
    mark = 0;
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

// console.log(`  ${board[0]} | ${board[1]} | ${board[2]} \n ------------ \n  ${board[3]} | ${board[4]} | ${board[5]} \n ------------ \n  ${board[6]} | ${board[7]} | ${board[8]} `);

addToBoard(0,'X');
addToBoard(1,'X');
addToBoard(2,'X');
addToBoard(3,'O');
addToBoard(4,'O');
addToBoard(5,'X');
addToBoard(6,'X');
addToBoard(7,'O');
addToBoard(8,'O');



/* board should be this

 X  |  X  |  X
----------------
' ' | ' ' | ' '
----------------
' ' | ' ' | ' '

*/

console.log(`  ${board[0]} | ${board[1]} | ${board[2]} \n ------------ \n  ${board[3]} | ${board[4]} | ${board[5]} \n ------------ \n  ${board[6]} | ${board[7]} | ${board[8]} `);

console.log(checkWin('X')); // true
console.log(checkWin('0')); // false
console.log(checkTie()); // true

