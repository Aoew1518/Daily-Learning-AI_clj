//优化1
function bubbleSort(arr) {
    console.time('改进冒泡排序');
    const length = arr.length;
    if (length <= 1) return;
    // 也行不需要执行那么多轮， 提前已排好了
    for (let i = 0; i < length - 1; i++) {
        let isSorted = true;
        for (let j = 0; j < length - i -1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j] , arr[j+1]] = [arr[j+1], arr[j]];
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }
    }
    console.timeEnd('改进冒泡排序')
    return arr
}

const arr = [5, 8, 6,  3,  9, 2, 1, 7];
console.log(bubbleSort(arr))

// 5  8  6  3  9  2  1  7
// 5  6  3  8  2  1  7  9
// 5  3  6  2  1  7  8  9
// 3  5  2  1  6  7  8  9
// 3  1  2  5  6  7  8  9 //实际上已经排序好了，后面的可以去掉优化空间
// 1  2  3  5  6  7  8  9 
// 1  2  3  5  6  7  8  9 
// 1  2  3  5  6  7  8  9 