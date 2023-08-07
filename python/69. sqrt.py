class Solution:
    def mySqrt(self, x: int) -> int:

        ans =0
        s=0
        e=x
        mid = int(s+(e-s)/2)
        while(s<=e):
            if mid*mid == x:
                return mid
            if mid*mid > x:
                e=mid-1
            else:
                s=mid+1
                ans = mid
            mid = int(s + (e-s)/2)
        return ans

            