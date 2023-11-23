const agt = ['1','2','梅西','里皮']
//解构 一次性的解构出来
const [a,b,c,d] = agt
console.log(a,b,c,d)

const [...g] = agt
console.log(g)

const [e,...f] = agt
console.log(e,f)