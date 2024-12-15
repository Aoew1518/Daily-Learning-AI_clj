class Solution:
    def hIndex(self, cs) -> int:
        n = len(cs)
        l, r = 0, n
        while l < r:
            count = 0
            mid = (l + r + 1) // 2  # 这样可以确保中点偏向右边
            for c in cs:
                if c >= mid:
                    count += 1
            if count >= mid:
                # if sum(c >= mid for c in cs) >= mid:
                l = mid
            else:
                r = mid - 1
        return r

    citations = [3,0,6,1,5]
    citations.sort()
    print(citations)
    print(hIndex(0, citations))
