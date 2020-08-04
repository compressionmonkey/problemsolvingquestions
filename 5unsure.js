const n= 6
const arr = [-4,3,-9,0,4,1] 
let positive = 0
let negative = 0
let zero = 0
arr.map(value => {
    let decision = Math.sign(value)
    if(decision > 0){
        positive += 1
    }
    if(decision < 0){
        negative += 1
    }
    if(decision == 0){
        zero +=1
    }
})
positive = (positive/5).toPrecision(6)
negative = (negative/5).toFixed(6)
zero = (zero/5).toFixed(6)
console.log(positive + "\n",negative + "\n",zero)