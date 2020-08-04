const arr = [3,2,3,3,3,3,3,1]

const max = arr.reduce((a,b) => {
    return Math.max(a,b)
})

const candlesLeft = arr.filter(number => number < max)

const candlesBlownOut = arr.length - candlesLeft.length
console.log(candlesBlownOut)