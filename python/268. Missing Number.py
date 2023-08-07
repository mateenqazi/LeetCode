# Solution No 1
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return len(nums) * (len(nums)+1)//2 - sum(nums)


# Solution No 2

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        N = Counter(nums)
        for i in range(len(nums)+1):
            if i not in N:
                return i
                
        

                
        