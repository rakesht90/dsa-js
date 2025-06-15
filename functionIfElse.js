function printHelloWorld() {
    console.log("Hello World")
}

function greet(name) {
    console.log("Nameste,", name)
}
printHelloWorld()
greet("Rakesh")

function sum(a, b) {
    let add= a+b;
    console.log(add)
}

function multiply(a, b) {
    let multiplication= a*b;
    console.log(multiplication)
}
sum(10,29)
multiply(3,4)

function square(x) {
    let result = x * x
    return result
}
let a = square(5)
console.log(a)

function eligibilityForVote(age) {
    if(age<0) {
        console.log("Invalid Input")
    }
    else if(age<18) {
        console.log("Not Eligible to vote")
    } else {
        console.log("Eligible to vote Congrates!")
    }
}

eligibilityForVote(-18)
eligibilityForVote(17)
eligibilityForVote(18)

function checkOddEven(number) {
    if(number%2 == 0) {
        console.log("Given number is Even")
    } else console.log("Given number is Odd")
}
checkOddEven(-17)
checkOddEven(12)