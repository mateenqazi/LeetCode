Question: 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules






/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {    
    const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}]; 
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];   
    
    for (let i = 0; i < 9; i++) {              
        for (let j = 0; j < 9; j++) {            
            const digit = board[i][j];
            
            if (digit !== '.') {
                const k = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
                    if (boxes[k][digit] || cols[j][digit] || rows[i][digit]) {
                    return false;
                }

                boxes[k][digit] = cols[j][digit] = rows[i][digit] = true;       
            }
        }
    }
    
    return true;
};