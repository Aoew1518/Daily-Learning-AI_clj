//  暴力破解    逻辑 O(n^2)
// O(nlogN) 快排 归并排序   排序 + 双指针
// 策略选择  双指针
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let child = 0, cookie = 0;
    while (child < g.length && cookie < s.length) {
        if (g[child] <= s[cookie])
            child++;
        cookie++;
    }
    return child;
};
g = [1, 2, 3], s = [1, 1]