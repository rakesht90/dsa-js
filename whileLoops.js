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

 function removeDuplicate(num) {
    let x =0;
    for(let i=0; i<num.length; i++) {
        if(num[i] >num[x]) {
            x= x+1
            num[x] = num[i]
        }
    }
    return x+1
 }
 let array = [3,2,2,3]
 let resultDuplicates = removeDuplicate(array)
 console.log(resultDuplicates)

 function removeElement(nums, val) {
    let x=0
    for(let i =0; i<nums.length; i++) {
        if(nums[i]!=val) {

           nums[x] = nums[i]
           x= x+1
        } 
    }return nums
 }
 let resultRemoveElement = removeElement(array, 3)
 console.log("remove duplicates",resultRemoveElement)

 let  s = ["h","e","l","l","o"]

 function reverseString(s) {
    let stringLength = Math.floor(s.length/2)
 for (let i=0;i<stringLength;i++){
   let temp = s[i]
   s[i]= s[s.length-1-i]
   s[s.length-1-i] = temp

 } return s
}

 let reverseStringElement = reverseString(s)
 console.log("reverseStringElement",reverseStringElement)

 function maxProfit(arr) {
    let min = arr[0];
    let maxProfit=0;
    for(let i=1; i<arr.length; i++) {
        if(arr[i]-min > maxProfit  ) {
            maxProfit=arr[i]-min
        }
        if(arr[i]< min) {
            min = arr[i]
        }

    }return maxProfit
 }
 let array1 = [7,1,3,5,6,2]
 let maxProfitResult = maxProfit(array1)
 console.log("maxProfitResult",maxProfitResult)

