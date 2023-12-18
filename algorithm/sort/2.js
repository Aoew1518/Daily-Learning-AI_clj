// let a=1,b=2;
// [a,b]=[b,a]
// console.log(a,b)

//冒泡排序
function bubbleSort(arr) {
    console.time('冒泡排序');
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.timeEnd('冒泡排序')
    return arr;
}
const arr = [5, 8, 6,  3,  9, 2, 1, 7];
console.log(bubbleSort(arr));

//优化1
function bubbleSort1(arr) {
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
console.log(bubbleSort1(arr))

const bubbleSort2 = (arr) => {
    console.time('改进冒泡排序2.0');
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
    console.timeEnd('改进冒泡排序2.0')
    return arr
}
console.log(bubbleSort2(arr))