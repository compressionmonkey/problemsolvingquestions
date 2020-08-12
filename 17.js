const s = "have anic eday"
let newS = s.replace(/ /g,'')
const sqrt = Math.sqrt(newS.length)
const columns = Math.ceil(sqrt)
const rows = Math.floor(sqrt)
// console.log(rows,columns)
let word = ''
let arr = [] 

// my approach 
// for(let i=1; i <= s.length -1; i++){
//     if(i % columns == 0){
//         word += s[i-1]
//         arr.push(word)
//         word = ''
//     }
//     else if(i == s.length - 1){
//         word += s[i-1]
//         word += s[i]
//         arr.push(word)
//         word = ''
//     }
//     else{
//         word += s[i-1]
//     }
// }

// someone's more efficient way to get initial arr
for(let i=0; i< newS.length; i+= columns){
    arr.push(newS.substring(i, columns + i))
}
// to get string in format I used someone's code
Array.from({length: columns}).forEach((value, index) => {
    arr.forEach(chunk => {
        word += (chunk[index] || '')
    })

    word += " "
})
console.log(word) 