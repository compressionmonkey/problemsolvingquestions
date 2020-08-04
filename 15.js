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

generateNumberFactorial = n => {
    n = BigInt(n);
  
    return n === 0n ? 1n : n * generateNumberFactorial(n - 1n);
  };
  
  let testMagicNumber = 30;
  
  const factorial = generateNumberFactorial(testMagicNumber).toString();
  
  console.log(factorial);