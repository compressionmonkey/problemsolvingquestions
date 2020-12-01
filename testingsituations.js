const _ = require('lodash')
// if you had to check if an array of numbers had a duplicate or not
const data = [1,2,2,4,7,7,1]
function containsDuplicates(data){
    return (new Set(data)).size !== data.length 
}
// console.log("duplicates are present",containsDuplicates(data))

// to check for any duplicates or to take out duplicates
// option 1 use lodash to ease life
const groupped = _.groupBy(data, (n) => {return n});
const result = _.uniq(_.flatten(_.filter(groupped, (n) => {return n.length > 1})))

// console.log('here', result)

// option 2 use countBy() and reduce()
const dup = _(data)
    .countBy()
    .reduce((acc, val, key) => val > 1 ? acc.concat(key): acc, [])
    .map(_.toNumber)
// console.log('duplicate', dup)

// option 3 uses filter and set

const dupResult = new Set(data.filter((value, index, arrayUsed) => arrayUsed.indexOf(value) !== index))
console.log(Array.from(dupResult))
