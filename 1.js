function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }
function getRandomElement(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
let arr = []  
const number = getRandomInt()
for(var i = 0; i < number; i++){
    let element = getRandomElement(1000)
    arr.push(element)
}
sum = arr.reduce((a,b) => a + b, 0)
console.log(arr + "\n", number + "\n", sum)