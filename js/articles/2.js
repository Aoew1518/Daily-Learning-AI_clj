const res = ['The Plot in You', 
'The Devil Wears Prada',
'Pierce the Veil'];
const oUl = document.querySelector('#bands');
oUl.innerHTML = res.map(function(item){
    return `<li>${item}</li>`;
}).join('');

console.log(oUl.innerHTML)