export {}
let message: string = 'lol'
let n : string = null
let u: number = undefined
let list1: number[] = [1,2]
let list2: Array<number> = [1,2]

let person : [number, string] = [1,"hey"]
console.log(message)

enum Color {Red = 12, Green = 10, Blue = 40}

let c: Color = Color.Green
console.log(c)

let random : any = 123
random = true

let myvar : unknown = "hello"

function hasName(obj: any): obj is { name: string }{
    return !!obj && 
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myvar)){
    console.log(myvar.name)
}

(myvar as string).toUpperCase()

function fullName(person: {firstName: string, lastName: string}): object{
    return { firstName: person.firstName, lastName: person.lastName }
}
const p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}
console.log(fullName(p))

class Employee {
    protected employeeName: string

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('kel')
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }
    delegateWork(){
        console.log(`Manager delegating tasks to ${this.employeeName}`)
    }
}

let m1 = new Manager('Bruce')
m1.delegateWork()
m1.greet()
console.log(m1.managerName)