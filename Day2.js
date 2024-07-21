//Conditional Statements

//(1) Switch case statement

let color = "Red";
let carColor;

switch(color){
    case "Orange" : 
    carColor = "Orange";
    break;

    case "Red" : 
    carColor = "Red";
    break;

    case "Black" : 
    carColor = "Black";
    break;

    default : carColor = "Invalid Request";
}
console.log(carColor)

//(2)find whether a number is divisible by either 2 or 3

let num1 = 10

if(num1 % 2 == 0) {
    console.log("Number is divisible by 2");
}
else if(num1 % 3 == 0){
console.log("Number is divisible by 3")
}

else{
    console.log("Neither divisible by 2 nor 3");
}

//(3) Ternary Operator

let age = 20
let a = age>18 ? 'You can drive':'You cannot drive'
console.log(a)
