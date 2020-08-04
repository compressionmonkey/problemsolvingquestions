const n= 8
const arr = [1,2,3,-1,-2,-3,0,0] 
let positive = 0
let negative = 0
let zero = 0
arr.map(value => {
    if(value > 0){
        positive += 1
    }
    if(value < 0){
        negative += 1
    }
    if(value == 0){
        zero +=1
    }
})
positive = (positive/n).toPrecision(6)
negative = (negative/n).toFixed(6)
zero = (zero/n).toFixed(6)
const final = [positive,negative,zero]
final.map(value => {
    console.log(value)
})