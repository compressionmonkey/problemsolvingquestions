const _ = require('lodash')
// if you had to check if an array of numbers had a duplicate or not
const data = [1,2,2,4,7,7,1]
function containsDuplicates(data){
    return (new Set(data)).size !== data.length 
}
// console.log("duplicates are present",containsDuplicates(data))

// to check for any duplicates or to take out duplicates
// option 1 use lodash to ease life
function checksAllDuplicates(data){
    const groupped = _.groupBy(data, (n) => {return n});
    return _.uniq(_.flatten(_.filter(groupped, (n) => {return n.length > 1})))
}
// console.log('here', checksAllDuplicates(data))

// option 2 use countBy() and reduce()
function checksAllDuplicates1(data){
return _(data)
    .countBy()
    .reduce((acc, val, key) => val > 1 ? acc.concat(key): acc, [])
    .map(_.toNumber)
}
// console.log('duplicate', checksAllDuplicates1(data))

// option 3 uses filter and set
function checksAllDuplicates2(data){
    const dupResult = new Set(data.filter((value, index, arrayUsed) => arrayUsed.indexOf(value) !== index))
    return Array.from(dupResult)
}
// console.log('option 3', checksAllDuplicates2(data))
// option 4 just use loops and object
function checksAllDuplicates3(data){
    let dup = []
    let obj = {}
    for(let i=0; i < data.length; i++){
        if(!obj[data[i]]){
            obj[data[i]] = 1
        }
        else{
            dup.push(data[i])
        }
    }
    return dup
}

// console.log(checksAllDuplicates3(data))
const arr = [1,2,2,4,7,7,1]
function checksAllDuplicates4(data){
    let duplicate = []
    let obj = {}
    for(let i=0; i < data.length; i++){
        if(!obj[data[i]]){
            obj[data[i]] = data[i]
        }
        else{
            duplicate.push(data[i])
        }
    }
    return duplicate 
}
console.log(checksAllDuplicates4(arr))