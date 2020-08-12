const arr = [278,576,496,727,410,124,338,149,209,702,282,718,771,575,436]
// const arr = [1,7,2,4]
let selectedValue = []
for(let i=0;i < arr.length; i++){
    for(let j=1;j < arr.length; j++){
        if(j > i){
            // console.log(arr[i],arr[j])
            if((arr[i] + arr[j])%7 != 0 ){
                selectedValue.push(arr[i],arr[j])
            }
            // selectedValue += (arr[i] + arr[j])%7 == 0 ? 1: 0
        }
    }
}
selectedValue = [...new Set(selectedValue)]
console.log(selectedValue.length)