You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

# Solution 1
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        nums = ""
        for i in digits:
            nums += str(i)
        nums= int(nums) +1
        return [int(x) for x in str(nums)]


# Solution 2
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for idx in range(len(digits)-1, -1, -1):
            if digits[idx] != 9:
                digits[idx] += 1
                break
            else:
                digits[idx] = 0
        if digits[0] == 0:
            digits.insert(0, 1)
        return digits
