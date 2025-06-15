// for(let i=7; i<=10; i++) {
//     console.log("Hello world", i)
// }

// for(let i=2; i<10; i=i+2) {
//     console.log("Hello World",i)
// }
// for(i=5; i>0; i=i-1) {
//     console.log(i)
// }

// function greet(i) {
//     console.log("Hello World", i)
// }
// for(i=0;i<10;i++) {
//     greet(i);
// }
let arr = [9,1,99,98,97]
let length = arr.length
// for(i=0; i<arr.length; i++) {
//     if(arr[i] %2 == 1)
// console.log(arr[i])
// }

// i=0;
// while(i<5) {
//     console.log("While loop")
//     i++;
// }

// function  searchElement(arr, element) {
//     for (i=0; i<arr.length; i++) {
//         if(arr[i] == element) {
//          return i
//         }    
//     } return -1
// }
// let res= searchElement(arr, 9)
// console.log(res)

// function countNegative(arr) {
//     let count =0;
//     for(i=0; i<arr.length; i++) {
//         if(arr[i]<0) {
//             count +=1;       
//         }
//     } return count;
// }

// let result = countNegative(arr)
// console.log(result)

// function largestNumber(arr) {
//     let largest = -Infinity;
//     for(i=0; i<arr.length; i++) {
//         if(arr[i] > largest)  {
//             largest = arr[i]
//         }
//     }
//     return largest;
// }
// let results = largestNumber(arr)
// console.log(results)

// function smallestNumber(arr) {
//     let smallest = Infinity;
//     for(i=0; i<arr.length; i++) {
//         if(arr[i] < smallest)  {
//             smallest = arr[i]
//         }
//     }
//     return smallest;
// }
// let results1 = smallestNumber(arr)
// console.log(results1)

arr = [9,9]

function secondLargest(arr) {
    
    if(arr.length<2) {
        return "Array should have atleast two number"
    }
    largest1= -Infinity
    secondLargest= -Infinity
    for(i=0;i<arr.length;i++) {
        if(arr[i]> largest1) {
             secondLargest = largest1
            largest1 = arr[i]
        } else if((arr[i] > secondLargest) && (arr[i] != largest1 )) {
            secondLargest = arr[i]

        }
    } return secondLargest == -Infinity ? "No second largest found":secondLargest;
}
let results2 = secondLargest(arr)
console.log(results2)