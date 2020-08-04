const arr = [73,67,38,33]
let roundedValue = 0
let roundedarr = []
arr.forEach(value => {
    if(value >= 38){
        roundedValue = Math.ceil(value/5) * 5
        if(roundedValue - value < 3){
            roundedarr.push(roundedValue)
        }
        if(roundedValue - value >= 3){
             roundedarr.push(value)
        }
    }
    else{
        roundedarr.push(value)
    }
     
})
console.log(roundedarr)