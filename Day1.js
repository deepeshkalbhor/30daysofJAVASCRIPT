let z = "--------------------------------------------------------------------------------------"
//create a string and add number to it

let a = "Hello"
let b = 3
console.log(a + b)

console.log(z)

//typeof operator to find the datatype

console.log(typeof (a+b))

console.log(z)

//creating const object & try to change it to hold a number later

const car = {
    name: "CIVIC",
    quantity: 0,
    isAvailable: false
}
//so you cannot change it to hold a number later

console.log(z)

//add a new key to const object 'a'. Will I be able to do it or not ?
car['color'] = "RED"
console.log(car)
//yes we can add a new key and can even change the values of the keys created 

console.log(z)

//create a word-meaning dictionary of 5 words

const dictionary = {
    null: "having no legal or binding force; invalid.",
    number: "a word or symbol that indicates a quantity",
    string: "a piece of long, strong material like very thin rope, that you use for tying things",
    symbol: "a sign, object, etc. which represents something",
    undefined: "not clear or defined."
}
console.log(dictionary)

console.log(z)

//Operators
//Arithmetic Operators
let x = 4
let y = 6
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)
console.log(++x)
console.log(--y)

console.log(z)

//Assignment Operators
console.log(x=y)
console.log(x+=y)
console.log(x-=y)
console.log(x*=y)
console.log(x/=y)
console.log(x%=y)
console.log(x**=y)

console.log(z)

//Comparison Operators
console.log(x==y)
console.log(x!=y)
console.log(x===y)
console.log(x!==y)
console.log(x<y)
console.log(x>y)
console.log(x>=y)
console.log(x<=y)

console.log(z)

//Logical Operator

console.log(x&&y)
console.log(x||y)

console.log(z)



