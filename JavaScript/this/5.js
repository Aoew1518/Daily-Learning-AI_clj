// // function foo() {}



// var obj = {
//   a: 1
// }

// var foo = () => {
//   console.log(this.a);
// }
// foo.call(obj)


// var bar = function() {
//   console.log(this.a);
// }
// bar.call(obj)


// // console.log(this);


var obj = {
  a: 1
}

function foo() {
  // console.log(this);
  var bar = () => {
    var baz = () => {
      console.log(this);
    }
    baz()
  }
  bar()
}
foo.call(obj)