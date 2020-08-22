const str = 'fedcbabcd';
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let new2indexes = str[str.length-1].concat('',str[str.length-2])
let newStr = ""
let strArr = new2indexes.split("")
if(new Set(strArr).size == strArr.length){
    newStr = str.replaceAt(str.length-2, new2indexes)
}

console.log(newStr || "no answer");