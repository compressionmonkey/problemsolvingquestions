const arr = [5,5,5,5,5]

const max = arr.reduce((a,b) => {
    return Math.max(a,b)
})

const min = arr.reduce((a,b) => {
    return Math.min(a,b)
})

function hasDuplicates(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}

const check = hasDuplicates(arr)
if(max == min && check){
    let minvalue = 0
    let maxvalue = 0
    arr.forEach((value, index)=> {
        if(value == min && value == max && index != arr.length -1){
            minvalue += value
            maxvalue += value
        }
    })
    console.log(minvalue, maxvalue)
    
}
else{
    const toAddMin = arr.filter(number => number < max)
    const toAddMax = arr.filter(number => number > min)
    
    let minsum = 0
    let maxsum = 0
    toAddMin.forEach(element => {
        minsum += element
    })
    toAddMax.forEach(element => {
        maxsum += element
    })
    console.log(minsum, maxsum)
}
