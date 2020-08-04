const arr = [100,90,90,80,75,60]
const alice = [50,65,77,90,102]
let arrNew = [...arr]
let uploadedRank = 0
let indexRank = 0

function getLastIndexof(arr, value){
    var counts = {};
    var indexes = {};
    let a = value.toString()
    arr.forEach(function(x, idx) {
    counts[x] = parseInt(counts[x] || 0) + 1;
    indexes[x] = idx; // update value index
    });
    // logs the last index of all values
    return indexes[a];
}

const updatedArr = alice.map(value => {
    arr.map((score,index) => {
        let found = arr.find(element => value > element);
        // console.log('ay',found)
        if(found && value > score){
            arrNew.splice(index,0, value)
            indexRank = index
            return;
        }
        if(index == arr.length - 1){
            if(found ? false: true){
                arrNew.splice(arr.length,0,value)
                indexRank = arr.length
            }
            return;
        }
    })
    
    uploadedRank = arrNew[indexRank]
    // let test = getLastIndexof(arrNew, uploadedRank)
    // console.log(test)
    uploadedRank = arrNew.indexOf(uploadedRank)
    arrNew = [...arr]
    return uploadedRank
})
console.log(updatedArr)

