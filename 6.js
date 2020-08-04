const repeatSpace = (string,n) => {
    var i =0
    var finalstring = ''
    while(i < n){
        finalstring += string
        i++
    }
    return finalstring 
}
const n = 6
for(var i=0; i < n;i++){
    let numberSpaces = (n -1)- i
    let answer = repeatSpace(" ", numberSpaces) + "#".repeat(i ? i+1:1)
    console.log(answer)
}