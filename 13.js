const apple = [-2,2,1]
const orange = [5,-6]
const numberofApples = 3
const numberofOranges = 2
const housestart = 7
const houseEnd = 11
const appleLocation = 5
const orangeLocation = 15
const ApplePos = apple.map(value => value + appleLocation)
const OrangePos = orange.map(value => value + orangeLocation)

const fallenApples = ApplePos.filter(value => {return(value >= housestart && value <= houseEnd)});
const fallenOranges = OrangePos.filter(value => {return(value >= housestart && value <= houseEnd)});

console.log(fallenApples.length)
console.log(fallenOranges.length)