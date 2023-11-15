var arr = [1, [2, [3, 4]]]



function flaten(arr) {
  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {

      let newArr = flaten(arr[i])  // [1, 2, 3, 4]
      res = res.concat(newArr)

    } else {
      res.push(arr[i])
    }

  }

  return res
}



console.log(flaten(arr));