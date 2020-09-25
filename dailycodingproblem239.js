const _ = require('lodash')
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1  
}
  
const digits = getRandomInt(9)
let NewRandNumber = 0
let selected = ''
const arr = [1,2,3,4,5,6,7,8,9]

const patternFinder = (Digit, Arr, RandNumber, numberofTries) => {
    console.log(RandNumber)
    if(Digit == 1){
        selected += RandNumber
        return selected
    }
    else{
        selected += RandNumber
        let newarr = [...Arr]
        if(numberofTries == 0){
            newarr = Arr.filter(element => element != RandNumber)
            NewRandNumber = _.sample(_.range(1,RandNumber))
        }
        if(numberofTries){
            newarr = Arr.filter(element => element != RandNumber)
            let range = _.difference(arr, newarr)
            let test = numberofTries > 2 ? arr.splice(range[0]-1,range[1] + 1 -range[0]): arr.splice(range[0],1)
            newarr = _.difference(arr, test)
            NewRandNumber = _.sample(newarr)
        }
        patternFinder(Digit -1,newarr,NewRandNumber, numberofTries + 1)
    }
}
const final = patternFinder(4,arr, _.sample(arr.filter(value => value != 1)),0)
console.log("final answer is",final)