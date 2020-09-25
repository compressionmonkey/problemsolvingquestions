let arr = [10,20,14]
let max = 0
const selectPeak = (arr) => {
    max = Math.max.apply(Math, arr);
    console.log(max)
}
selectPeak(arr)
arr = [7,7,7,7]
selectPeak(arr)
arr = [10,90,20,90,10]
selectPeak(arr)
arr = [10,3,10]
selectPeak(arr)
