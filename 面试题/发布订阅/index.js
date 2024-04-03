class EventEmitter {
  constructor() {
    this.handles = {};
  }

  // 订阅事件
  on(eventName, cd) {
    // { 'onSell': [cd1, cd2], 'onCar': [cd3] }
    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(cd);
  }

  // 取消订阅
  off(eventName, cd) {
    if (this.handles[eventName]) {
      this.handles[eventName] = this.handles[eventName].filter(
        (item) => item !== cd
      );
    }
  }

  // 只订阅一次的事件
  once(eventName, cd) {
    // const one = (...args) => {
    //   cd(...args);
    //   this.off(eventName, one); // 使用唯一标识符取消订阅
    // };
    // this.on(eventName, one);
    if(this.handles[eventName] && this.handles[eventName].indexOf(cd) !== -1){
        return 
    }
    this.on(eventName, cd);
  }

  // 触发事件
  emit(eventName) {
    if (this.handles[eventName]) {
      this.handles[eventName].forEach((cd) => cd());
    }
  }
}

function wan() {
  console.log("王总去买房");
}

function li() {
  console.log("李总去买房");
}

function wu() {
    console.log("吴总去买车");
}

const emiter = new EventEmitter();

// emiter.on("onSell", wan);
// emiter.on("onSell", li);
// // 使用相同的函数引用取消订阅
// emiter.off("onSell", wan);

emiter.once("onCar",wu);

emiter.once("onCar", wu);

emiter.once("onCar", wu);

setTimeout(() => {
//   emiter.emit("onSell");
  emiter.emit("onCar");
}, 1000);
