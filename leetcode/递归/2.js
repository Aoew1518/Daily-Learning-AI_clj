// 5!
function mul(n) {
    // let res = 1
    // for (var i = 1; i <= n; i++) {
    //   res = res * i
    // }
    // return res
  
  
    // n * (n-1) * (n-2) * ... * 1
  
    if (n === 1) {
      return 1
    }
    return n * mul(n - 1)  // 5 * mul(4)   4 * mul(3)
  
  }
  
  console.log(mul(5)); // 120
  
  // mul(5) == 5 * mul(4) 
  // mul(4) == 4 * mul(3)
  // mul(3) == 3 * mul(2)
  // mul(2) == 2 * mul(1)
  // mul(1) == 1
  
  
  // 找规律
  // 找出口