# // s  = cbbcc
# // res= ccbbc

# // i = 1
# // t1 = cbcc
# // t2 = cbbc

# // i = 3
# // t1 = abca
# // t2 = acca

class Solution:
    def validPalindrome(self, s: str) -> bool:
        n=len(s)
        if s == s[::-1]:
            return True
        res=s[::-1]
        for i in range(n):
            if s[i]!=res[i]:   
                t1=s[:i]+s[i+1:]
                t2=res[:i]+res[i+1:]
                if t1==t1[::-1] or t2==t2[::-1]: 
                    return True
                else:
                    return False