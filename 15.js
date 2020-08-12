// My solution
// Array.prototype.multiply = function(){
//     let array = this
// 	let x = array.reduce(function(a, b) {
//     return a*b
// });
//     return x
// }
// let n = 25
// let arr = []
// for(let i=0; i< n; i++){
//     arr.push(n-i)
// }
// let product = arr.multiply()
// console.log(BigInt(product))

// recursive need to learn
generateNumberFactorial = num => {
    num = BigInt(num)
    return num === 0n ? 1n : num * generateNumberFactorial(num - 1n);
  };
  
  let testMagicNumber = 25;
  
  const factorial = BigInt(generateNumberFactorial(testMagicNumber));
  
  console.log(factorial);
// iterative

// const num = 25
// var rval=1;
// for (var i = 2; i <= num; i++){
//   rval = rval * i;
// }
// console.log(BigInt(rval))
