# 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。
# 如果不存在 公共子序列 ，返回 0 。
# 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。


# 输入：text1 = "abcde", text2 = "ace" 
# 输出：3  
# 解释：最长公共子序列是 "ace" ，它的长度为 3 。
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        M, N = len(text1), len(text2)
        dp = [[0] * (N + 1) for _ in range(M + 1)]
        for i in range(1, M + 1):
            for j in range(1, N + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                    
        return dp[M][N]

            