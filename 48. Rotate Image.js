You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



Solution

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix[0].length
   for(let i=0;i< len;i++){
       for (let j=i+1;j<len;j++){
           let temp = matrix[j][i]
           matrix[j][i] = matrix[i][j]
            matrix[i][j] = temp
       }
   }
    
    for ( let i=0;i<len;i++){
        for(let j=0;j<len/2;j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][len-j-1]
            matrix[i][len-j-1] = temp
        }
    }
    
    return matrix
    
};