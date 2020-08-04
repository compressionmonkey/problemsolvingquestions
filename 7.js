var string = "07:05:45PM"
let finaltime = ""

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

if(string.indexOf("PM") !== -1){
    let info = (parseInt(string.slice(0,2)) + 12)
    if(info > 23){
        info = "12"
    }
    info = info.toString()
    string = string.replaceAt(0, info)
    string = string.slice(0,-2)
    finaltime = string 
}
else{
    let info = parseInt(string.slice(0,2))
    if(info == 12){
        info = "00"
        string = string.replaceAt(0,info)
    }
    string = string.slice(0,-2)
    finaltime = string
}
console.log(finaltime)