
# Solution 1
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = ''.join(e.lower() for e in s if e.isalnum())
        end = len(s)-1
        for i in range(len(s)):
            if s[i] != s[end]:
                return False
            end -=1
        return True
            

# Solution 2

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = ''.join(e.lower() for e in s if e.isalnum())
        return s == ''.join(reversed(s))