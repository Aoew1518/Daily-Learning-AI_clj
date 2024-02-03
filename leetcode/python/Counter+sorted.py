import collections
from collections import Counter

nums = [0, 1, 0, 1, 0, 1, 99]
n = len(nums)
# res = collections.defaultdict(int)
counter = Counter(nums)
sorted_list = sorted(counter.items(), key=lambda x: x[1], reverse=False)
print(sorted_list[0][0])
