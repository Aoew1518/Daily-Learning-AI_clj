console.log(Object.prototype.toString.call({a:1}))//'[object Object]'

Number({}) //Number('[object Object]') //NaN

console.log(String([])) //String('') // ''

//二元运算符
console.log([]+{}) //'[object Object]'
console.log({}+[]) //0
