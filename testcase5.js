// // console.log([1,2])
// [1,2].print()

// Array.prototype.print = function() {
//     let result = ''
//     for ( let [i, elem] of this ){
//         if(i === this.length){
//             result += elem
//         }
//         else{
//             result += `${elem}`
//         }
//     }
//     // this.forEach(elem => result += `${elem},`)
//     console.log(result)
// }
// we are look for getters for next situation

const a = function(x){
    this.x = x
}
const b = function(x,y){
    a.call(this, x)
    // this.x = new a(x).x // I'm adding this to access a's x
    this.y = y
    console.log(this)
}
// I'll create a method for the function
b.prototype.getX = () => {
    return this.x
}
b.prototype.getY = () =>{
    return this.y
}
const newB = new b('x', 'y')
console.log(newB.getY())
// so if a newB.getX() or newB.getY()
// try to use inheritance to do that
