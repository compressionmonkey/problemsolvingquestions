const arr = [4,5,3,7,2]
const pivot = arr[0]
let left = []
let right = []
let equal = []
arr.map(value => {
    if(value === pivot){
        equal.push(value)
    }
    if(value > pivot){
        right.push(value)
    }
    if(value < pivot){
        left.push(value)
    }
})
let final = [...left,...equal,...right]
// let final = (left.join(' ')).concat(' ', equal.join(' '),' ',right.join(' '))
return final