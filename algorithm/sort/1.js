//优化2
// 数组的右边，有大部份排好序的，出现不需要比较 j-i-1的
// 标记上一轮，完成交换的最后一次的位置， 最后的位置 < j-i-1 
const bubbleSort = (arr) => {
    let tmp = 0; 
    let lastExchangeIndex = 0; // 
    let arrLen = arr.length;
    let sortBorder = arrLen - 1;
    for (let i = 0; i < arrLen - 1; i++) {
        let isSorted = true;
        for (let j = 0; j < sortBorder; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex
        if (isSorted) {
            break;
        }
    }

    return arr
}