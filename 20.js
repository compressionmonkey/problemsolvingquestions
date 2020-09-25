const arr = [[ 1, 3, 1 ], [ 2, 1, 2 ], [ 3, 3, 3 ]]

const n = arr.length
// const containerCounts = new Array(n).fill(0)
const containerCounts = []
const ballTypes = new Array(n).fill(0)
// const ballTypes = []

// for(let i =0; i < n; i++){
//     const container = arr[i]
//     for(let j = 0; j < n; j++){
//         const ballCount = container[j]
//         containerCounts[i] += ballCount
//         ballTypes[j] += ballCount
//     }
// }

arr.map(value => {
    const totalBallinArray = value.reduce((a,b) => a+b)
    containerCounts.push(totalBallinArray)
    value.map((inside, index) => {
        ballTypes[index] += inside
    })
})

containerCounts.sort()
ballTypes.sort()
let Impossible = null
containerCounts.map((value, index) => {
    ballTypes.map((ballVal,ballIndex) => {
        if(index == ballIndex && value != ballVal){
            Impossible = 'Impossible'
        }
    })
})
if(Impossible){
    console.log(Impossible)
}
else{
    console.log('Possible')
}
console.log({containerCounts, ballTypes})