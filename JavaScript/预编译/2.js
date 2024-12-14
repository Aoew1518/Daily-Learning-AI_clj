var a = 1
function foo(a) {
  function a() {}
  console.log(a); // 
  var a = 2
  function b() {}
  console.log(b); // 
  var b = a
  console.log(a);  // 
}
foo(3)