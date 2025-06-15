 function countDigit(num) {
    let count= 0;
    let number = Math.abs(num) 
    if(number == 0) return 1
    
    while(number> 0) {
        number = Math.floor(number / 10)
        count++
    }
    return count;
 }

 let result = countDigit(0)
 console.log(result)