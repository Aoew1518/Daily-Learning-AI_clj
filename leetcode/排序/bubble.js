let arr = [2,4,5,1,3]

// while(arr.length){
//     let min=Math.min(...arr)  
// }
// console.log(min)

// arr.sort((a,b) => a-b) //升序 [ 1, 2, 3, 4, 5 ]
// console.log(arr)
// arr.sort((a,b) => b-a)    //降序 [ 5, 4, 3, 2, 1 ]
// console.log(arr)

function bubbleSort(arr){
    // const res = []
    // for(let i = 0; i < arr.length; i++){
    //     res.push(arr[i])
    // }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(res[j] > res[j + 1]){
                // let temp = res[j]
                // res[j] = res[j + 1]
                // res[j + 1] = temp
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return res
}

console.log(bubbleSort(arr));