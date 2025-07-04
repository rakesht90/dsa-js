function fun(num) {
    if(num == 0) {return}
    console.log("Recursion", num)
    num = num-1
    fun(num)
}
let a=10
fun(a)
n=10
function print(p) {
    
    if(p>n) return

    
    print(++p)
}
print(1)
sum=0
function sumOfNumber(n) {
    if(n==0) return 0
    return n + sumOfNumber(n-1)

}
result =sumOfNumber(n)
console.log("sumOfNumber",result)

let arr=[5,3,2,0,1]

function sumOfArray(n) {
    if(n == 0) {

     return arr[n] }

    return arr[n] + sumOfArray(n-1)

}
console.log(sumOfArray(arr.length-1))

function sumOfOdd(n) {
    let isOdd = arr[n] %2 !=0
    if(n == 0) { return isOdd? arr[n]:0

      }

    return (isOdd? arr[n]:0) + sumOfOdd(n-1)

}
console.log(sumOfOdd(arr.length-1))

function factorial(n) {
    if(n==0) return 1;
    return n * factorial(n-1)
}

console.log("factorial",factorial(5))

function powerOfTwo(n) {
    if(n == 1) {return true}
    else if((n/2 < 1) || ( n%2 !=0)) {return false}

    return powerOfTwo(n/2)
}

console.log("powerOfTwo",powerOfTwo(16))

var fib = function(n) {
    if(n<=1) return n;
    return fib(n-1) + fib(n-2)
};
console.log("fib",fib(5))