Array.prototype.swap = function(index_A, index_B) {
    let input = this;

    let temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

let lastPersonMoved = 0
let secondPersonMoved = 0

const arr = [1,2,3,4,5]
arr.forEach((value,index) => {
    if(index == 1){
        arr.swap(0,index)
        secondPersonMoved = index - 0
    }
    if(index == arr.length - 1){
        let NewPosition = Math.floor(arr.length/2)
        arr.swap(NewPosition,index)
        lastPersonMoved = index - NewPosition
    }
})
const totalMoves = secondPersonMoved + lastPersonMoved
console.log(totalMoves)
console.log(totalMoves > 2 ? "Too chaotic": totalMoves)