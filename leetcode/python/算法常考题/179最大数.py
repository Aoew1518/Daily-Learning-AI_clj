from typing import List
import functools
class Solution:
    #先把nums中的所有数字转化为字符串，形成字符串数组 nums_str
    #比较两个字符串x,y的拼接结果x+y和y+x哪个更大，从而确定x和y谁排在前面；将nums_str降序排序
    #把整个数组排序的结果拼接成一个字符串，并且返回
    #nums_str.sort(key=functools.cmp_to_key(compare)) 将会按照自定义的比较函数 compare 对列表 nums_str 进行排序。
    #排序规则是将列表中的字符串拼接起来进行比较，从而得到最终的排序结果。
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


