const aliceRating = [17, 28, 30]
const bobRating = [99, 16, 8]

let alicePoints = 0
let bobPoints = 0

for(var i = 0; i < aliceRating.length;i++){
    if(aliceRating[i] > bobRating[i]){
        alicePoints += 1
    }
    if(aliceRating[i] < bobRating[i]){
        bobPoints += 1
    }
}
let FinalResults = [alicePoints, bobPoints]
console.log(FinalResults)