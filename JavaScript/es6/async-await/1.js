function a(cb) {
  setTimeout(() => {
    console.log('A');
    cb()
  }, 1000)
}

function b() {
  console.log('B');
}

a(b)
