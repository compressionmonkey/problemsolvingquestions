// check if string is a palindrome 
let word = 'level'
function isPalindrome(word){
    // returns true if it is
    return word == word.split('').reverse().join('')
}

// console.log(isPalindrome(word))

// show number of character occurences in a word
// eg we have word level so let's take out two ls
word = 'seed'
// function numberOfOccurences(character,word){
//     let newWord = word.split('')
//     // first we turn string into an array
//     newWord = newWord.filter((v) => (v === character)).length;
//     // next we filter out all characters equal to our chosen characters which we will 
//     // then check length of array of possibilities
//     return newWord
// }
function numberOfOccurences(character,word){
    // let newWord = word.split('')
    let count = 0
    for(let i=0; i< word.length; i++){
        if(word[i] === character){
            count++
        }
    }
    return count
}
console.log('here',numberOfOccurences('s', word))


// let us take out object values and insert it into an array
const x = {
    a: 1,
    b: 2,
    c: 3
}
function takeOutObjectValue(obj){
let xArr = []
for(i in x){
    xArr.push(i)
}
return xArr
}
// console.log(takeOutObjectValue(x))

// now we have a string and we want to reverse the string
const string = 'hi'
const finalString = 'ih'
function reverseString(word){
    return word.split('').reverse().join('')
}

// console.log(reverseString(string) == finalString)

const obj = {
    a: 1,
    b: 2,
    getA(){
        console.log(this.a)
        // adding this allows you to return back object
        return this;
    },
    getB(){
        console.log(this.b)
    }
}

// obj.getA().getB()

// what is output?
// we will get an error because obj.getA() consoles and doesn't return anything
// that makes .getB() error
// to get it to work i would 

obj.getA().getB()