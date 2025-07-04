//  function countDigit(num) {
//     let count= 0;
//     let number = Math.abs(num) 
//     if(number == 0) return 1
    
//     while(number> 0) {
//         number = Math.floor(number / 10)
//         count++
//     }
//     return count;
//  }

//  let result = countDigit(0)
//  console.log(result)

//  function isPalendrome(num) {
//   if (num<0) {return false}
//     let reverse = 0;
//     let NumberCopy = num
//     let remainder = 0;
//     while(num > 0)  {
//          remainder = num % 10
//          reverse=reverse *10+ remainder
//          num = Math.floor(num/10)
//     }
//    return reverse == NumberCopy
//  }
//  let result = isPalendrome(121)
//  console.log(result)


 function reverse(x) {
    let output = 0;
    let remainder = 0;
    let isNegative = x < 0;
     x = Math.abs(x);
    while(x > 0)  {
         remainder = x % 10
         output= output * 10+ remainder
         x = Math.floor(x/10)
    }
    let limit =Math.pow(2,31)
    // limit = 2**31
    if( output< -limit || output> limit) return 0
   return isNegative ? -output :output
 }
 let result = reverse(1213)
 console.log(result)

