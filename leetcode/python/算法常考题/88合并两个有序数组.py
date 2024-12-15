# class Solution:
#     def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
#         """
#         Do not return anything, modify nums1 in-place instead.
#         """
#         if m==0:
#             nums1.clear()
#             nums1.extend(nums2)
#             return nums1
#         if n==0:
#             return nums1[0:n]
#         else:
#             for i in range(n):
#                 nums1[m+i]=nums2[i]
#             nums1.sort()
#             return nums1

#     nums1 = [1, 2, 3, 0, 0, 0]
#     nums2 = [2, 5, 6]
#     m = 3
#     n = 3

#     print(merge(0,nums1, m, nums2, n))
class main:
    def merge(nums1, m, nums2, n):
        if m == 0:
            nums1.clear()
            nums1.extend(nums2)
            return nums1
        if n == 0:
            return nums1[0:n]
        else:
            for i in range(n):
                nums1[m + i] = nums2[i]
            nums1.sort()
            return nums1

    nums1 = [1, 2, 3, 0, 0, 0]
    nums2 = [2, 5, 6]
    m = 3
    n = 3

    print(merge(nums1, m, nums2, n))

# git add .
# git commit -m '力扣'
# git push origin main