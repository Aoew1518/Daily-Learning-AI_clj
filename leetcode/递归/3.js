// 斐波那锲数列
// 1 1 2 3 5 8 13 21 34 55 。。。

function fb(n) {
    if (n == 1 || n == 2) return 1
    
    return fb(n-1) + fb(n-2)
  }
  console.log(fb(15));
  
  // fb(15) == fb(14) + fb(13)
  
  // fb(2) == 1
  // fb(1) == 1
  