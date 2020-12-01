const _ = require('lodash')
let data = {
    name: 'one',
    phone: 123,
    email: 'one@.com',
    password: 'password'
}

const randomNumber = 8 //Use Rand Function here to get a random number
data = {id: randomNumber,...data}
console.log(_.omit(data, ['password'])) 