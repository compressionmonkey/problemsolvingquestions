const arr = [2,3,6,6,5]
Array.prototype.findMax = function(){
    let array = this
	let x = array.reduce(function(a, b) {
    return Math.max(a, b);
});
    return x
}
let max = arr.findMax()

const modifiedArr = arr.filter(value => value < max)

let secondmax = modifiedArr.findMax()
console.log(secondmax)