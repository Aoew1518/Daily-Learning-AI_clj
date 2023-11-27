const ages = [32,15,19,12];
// 遍历一下 for map
// 条件筛选 callback 做符合条件的这一部分

// const adultPreset = ages.some(function(age,index,array) {

// });

// const adultPreset = ages.some(age => {
//     return age >= 18;
// });

const adultPreset = ages.some(age => age >= 18);//or
const adultEnough = ages.every(age => age >= 19);//all
console.log(adultPreset);
console.log(adultEnough);