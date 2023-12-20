//递归带来的内存问题
// 递归的优点   简单 性能不好
// 两种做法 1.记忆法
/*      入栈过的函数是没必要再入栈的  
            10 
        9           8
      8    7      7    6
     7 6  6 5    6 5  4  3 
     */
const f=[];
const climbStairs=function(n){
    if(n==1)return 1
    if(n==2)return 2//退出条件
    if(f[n]===undefined){//第一次计算
        f[n]=climbStairs(n-1)+climbStairs(n-2)//递归公式
    }
    return f[n];
}
