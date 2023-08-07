You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



Solution

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        self.transpore(matrix)
        self.reflect(matrix)
    def transpore(self, matrix):
        for i in range(len(matrix)):
            for j in range(i+1, len(matrix)):
                matrix[j][i] , matrix[i][j] = matrix[i][j], matrix[j][i]
                
    def reflect(self, matrix):
        n = len(matrix)
        for i in range(n):
            for j in range(n//2):
                matrix[i][j], matrix[i][n-j-1] =  matrix[i][n-j-1], matrix[i][j]
    

    
        