// myArr.push(6)-adds element in array
//pop removes last value of arr
//unshift(9)-- shift()
//slice
const myArr=[2,4,5,7,3,9,8]
const myn1= myArr.slice(1,3)//index 3 is not included
console.log("A",myArr);
console.log(myn1)
console.log("B",myArr);
const myn2= myArr.splice(1,3)//index 3 is included
console.log(myn2)
//arr.flat(Infinity)-- solves all the indepth in array
//.from("Khushi")
