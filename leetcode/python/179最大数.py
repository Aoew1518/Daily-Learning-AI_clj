from typing import List
import functools
class Solution:
    #先把nums中的所有数字转化为字符串，形成字符串数组 nums_str
    #比较两个字符串x,y的拼接结果x+y和y+x哪个更大，从而确定x和y谁排在前面；将nums_str降序排序
    #把整个数组排序的结果拼接成一个字符串，并且返回
    def largestNumber(self, nums: List[int]) -> str:
        nums_str=list(map(str,nums))
        compare=lambda x,y: 1 if x+y<y+x else -1
        nums_str.sort(key=functools.cmp_to_key(compare))
        res=''.join(nums_str)
        res = "".join(nums_str)
        if res[0]=='0':
            res='0'
        return res

    nums = [3, 30, 34, 5, 9]
    print(largestNumber(0,nums))