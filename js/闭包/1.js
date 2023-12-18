var arr = []

for (var i = 0; i < 10; i++) {
  // arr[i] = function() {
  //   console.log(i);
  // }

  // function help(j) {
  //   arr[j] = function() {
  //     console.log(j);
  //   }
  // }
  // help(i)

  (function(j) {
    arr[j] = function() {
      console.log(j);
    }
  })(i)

}



// {
//   let i = 0
//   function () {
//     console.log(i);
//   }
// }








// -----------
for (var j = 0; j < arr.length; j++) {
  arr[j]()
}


