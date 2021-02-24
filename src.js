
var board = [ ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' , ' ' ];

// console.log(`  ${board[0]} | ${board[1]} | ${board[2]} \n ------------ \n  ${board[3]} | ${board[4]} | ${board[5]} \n ------------ \n  ${board[6]} | ${board[7]} | ${board[8]} `);

const addToBoard = (place, mark) => {
  board[place] = mark;
}

addToBoard(0, 'X');
addToBoard(1, 'X');
addToBoard(2, 'X');

console.log(`  ${board[0]} | ${board[1]} | ${board[2]} \n ------------ \n  ${board[3]} | ${board[4]} | ${board[5]} \n ------------ \n  ${board[6]} | ${board[7]} | ${board[8]} `);
