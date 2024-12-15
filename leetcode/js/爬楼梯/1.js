// 递归
/*自顶向下
每个问题都相同
退出条件相同
*/
function climStairs(n){
    if(n==1) return 1;
    if(n==2) return 2;
    return climStairs(n-1)+climStairs(n-2);
}