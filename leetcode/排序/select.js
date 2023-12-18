let arr = [2,4,5,1,3]
// 找出（选择）原数组中的最小值，放到当前数组的最前方，再缩小区间
function selectSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i
        for(let j = i+1; j < arr.length; j++) {
            if(arr[min] > arr[j]) {
                min = j
            }
        }
        if(min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}