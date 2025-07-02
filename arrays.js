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

let merge = function(nums1, m, nums2, n) {
     let p1 = m-1
     let p2= n-1

     for(let i=m+n-1; i>=0; i--) {
        if(p2 < 0) {
            break
        }
        if(p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1]
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--
        }
     }
    
}; 

var mergeSortedArrays = function(nums1, m, nums2, n) {
    let num1Copy = nums1.slice(0,m);
    let p1 = 0
    let p2 = 0
    for(let i=0 ; i<m+n ; i++) {
        if(p2>= n || ((p1< m) && (num1Copy[p1]<nums2[p2]))) {
            nums1[i]= num1Copy[p1]
            p1++;
        } else {nums1[i] = nums2[p2]
        p2++}
    }
    return nums1;
    
};

let result = mergeSortedArrays([1,2,3],3,[2,5,6], 3)

console.log("mergeSortedArrays",result)

let nums = [0,1,0,3,12]

// var moveZeroes = function(nums) {
//     let p1=0
    
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i] !=0) {

//                 swap(nums, i, p1)
//          p1++
//         }
//     }
//     return nums;
// };

var moveZeroes = function(nums) {
    let p1=0
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !=0) {
            nums[p1]=nums[i]
         p1++
        }
    }
    for(let i=p1; i<nums.length;i++) {
        nums[i] =0
    }
    return nums;
};
function swap(arr, n1, n2) {
    let temp = arr[n1];
    arr[n1]=arr[n2];
    arr[n2]=temp
}
result = moveZeroes(nums)
console.log("moveZeroes",result)

let nums1 = [1,1,0,1,1,1,0,1,1]

var findMaxConsecutiveOnes = function(nums) {
    let p1=0;
    let maxCount = 0
    for(let i=0;i<nums.length;i++) {
        if(nums[i] ==1) {
                p1++;
                maxCount =Math.max(p1, maxCount) ;
        } else p1=0
        
    }return maxCount;
};

result = findMaxConsecutiveOnes(nums1)

console.log("findMaxConsecutiveOnes",result )

nums = [3,0,1]

var missingNumber = function(nums) {
   let missing =0;
    let sumOfArray = 0
    let n = nums.length
    for(let i=0; i<n;i++) {
        sumOfArray += nums[i] 
    }
    missing = n*(n+1)/2 - sumOfArray
    return missing
};
result = missingNumber(nums)
console.log("missingNumber",result)
nums = [4,1,2,1,2]
// var singleNumber = function(nums) {
//     let hash = {}
    
//     for(let i=0; i<nums.length; i++) {
//         if(!hash[nums[i]]) {
//             hash[nums[i]] =1
//         } else hash[nums[i]]++
//     }
//  for(let i=0; i<nums.length; i++) {
//  if(hash[nums[i]] ==1) {
//     return nums[i]
//  }
// }

    
// };
// result = singleNumber(nums)
// console.log("singleNumber",result)

var singleNumber = function(nums) {
    let xor = 0
    
    for(let i=0; i<nums.length; i++) {
       xor= xor ^ nums[i]
} return xor

    
};
result = singleNumber(nums)
console.log("singleNumber",result)