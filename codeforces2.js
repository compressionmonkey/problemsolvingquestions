function GetMaximumItemsCarried(MyCap,ShopSwords,ShopAxes,WSwords,WAxes){
    let totalCarried = 0
    let possibleSolutions =[]
    let st = 0
    let swordsandAxes = 0
    let stObj = {}
    for(let i=0;i <= ShopSwords;i++){ //ShopSwords carried
        for(let j=0;j <= ShopAxes;j++){ //ShopAxes carried
            totalCarried = i* WSwords + j * WAxes
            if(totalCarried <= MyCap && MyCap/2 < totalCarried) {
                possibleSolutions.push({
                    numberofSwords:i,
                    numberOfAxes: j,
                    weightCarried: totalCarried
                })
            }
    }
}
possibleSolutions.forEach((value,index) => {
    if(st < value.weightCarried && swordsandAxes < value.numberOfAxes + value.numberofSwords){ 
    st = value.weightCarried
    swordsandAxes = value.numberofSwords + value.numberOfAxes
    stObj = value
    }
})
const itemsCarried = stObj.numberofSwords + stObj.numberOfAxes
return itemsCarried
}
// case 1
// let maxItemsCarriedByMe = GetMaximumItemsCarried(33,6,10,5,6)
// let maxItemsCarriedByPartner = GetMaximumItemsCarried(27,6,10,5,6)
// let totalItemsCarried = maxItemsCarriedByMe + maxItemsCarriedByPartner
// console.log(totalItemsCarried)

// case 2
// const maxItemsCarriedByMe = GetMaximumItemsCarried(100,10,10,5,5)
// const maxItemsCarriedByPartner = GetMaximumItemsCarried(200,10,10,5,5) || 0
// const totalItemsCarried = maxItemsCarriedByMe + maxItemsCarriedByPartner
// console.log(totalItemsCarried)
// case 3
const maxItemsCarriedByMe = GetMaximumItemsCarried(1,1,3,19,5) || 0
const maxItemsCarriedByPartner = GetMaximumItemsCarried(19,1,3,19,5) || 0
const totalItemsCarried = maxItemsCarriedByMe + maxItemsCarriedByPartner
console.log(totalItemsCarried)