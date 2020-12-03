const number = '12258'
// you should get multiple answers like abbeh, aveh, abyh, lbeh, lyh
function selectAlphabetWithNumber(number){
    let answerPossibilities = []
    let finalAlphabet = ''
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // so get an arr of alphabets
    // get our string in arrs
    // make numbers into string i.e 1 = a , 2 = b, 3 = c
    const numberToArr = number.split("")
    numberToArr.map((value) => {
        finalAlphabet += alphabets[parseInt(value)-1]
    })
    return finalAlphabet
}

console.log(selectAlphabetWithNumber(number))