// function chunk(array, size) {
//     const chunked_arr = [];
//     let copied = [...array]; // ES6 destructuring
//     const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
//     for (let i = 0; i < numOfChild; i++) {
//       chunked_arr.push(copied.splice(0, size));
//     }
//     return chunked_arr;
// }
let str = 'dcba'
let strArr = str.split("")
let updated = str.split("")
let left = []
let right = []
if (JSON.stringify(updated.reverse())==JSON.stringify(strArr)) {
    console.log("no answer")
}
else{
    for(let i = str.length - 1; i >= 0; i--){
        if(strArr[i] > strArr[i-1]){
            // const newArr chunk(strArr, 2))
            left = strArr.splice(0,i)
            right = strArr
            break
        }
    }
    if(left.length == 0 && right.length == 0){
        console.log("no answer")
    }
    right = right.sort()
    for(let i = 0; i <= right.length - 1; i++){
        if(left[left.length - 1] < right[i]){
            const stored = right[i]
            right[i] = left[left.length - 1]
            left[left.length - 1] = stored
            break
        }
    }
    const final = left.concat(right)
    console.log(final.join(''))
}
