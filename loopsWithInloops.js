// for(let i=0; i<2; i++) {
//     for(let j=0; j<3; j++) {
//         console.log("*", "i=", i, "j=", j)
//     }
// }
// let count = 0;
// for(let i=5; i>0; i--) {
//     for(let j=0; j<i; j++) {
//         count++
//         console.log("*", "i=", i, "j=", j)
//     }
    
// }console.log("Loop run number of times", count)

function starPatern(num) {

    for(let i=0; i<num; i++) {
        let row = "" 
        for(let j=0; j<num; j++) {
                 row += "*"      
        } console.log(row)
       
    }
 
}
starPatern(5)


function starRightTrianglePatern(num) {

    for(let i=0; i<num; i++) {
        let row = "" 
        for(let j=i; j>=0; j--) {
                 row += "*"      
        } console.log(row)
       
    }
 
}
starRightTrianglePatern(5)


function starInverseTrianglePatern(num) {

    for(let i=0; i<num; i++) {
        let row = "" 
        for(let j=0; j<num-i; j++) {
                 row += "*"      
        } console.log(row)
       
    }
 
}
starInverseTrianglePatern(5)

function trinaglePatern(num) {
    
    for(let i=0; i<num; i++) {
        let row = ""
        for(let j=0; j<=i; j++){
            row +="*"
        }
        console.log(row)
    }
}
trinaglePatern(5)

function trinaglePatern1(num) {
    
    for(let i=0; i<num; i++) {
        let row = ""
        for(let j=0; j<=i; j++){
            row +=j+1
        }
        console.log(row)
    }
}
trinaglePatern1(5)

function trinaglePatern2(num) {
    
    for(let i=0; i<num; i++) {
        let row = ""
        for(let j=0; j<=i; j++){
            row +=i+1
        }
        console.log(row)
    }
}
trinaglePatern2(5)

function trinaglePatern3(num) {
    
    for(let i=0; i<num; i++) {
        let row = ""
        for(let j=0; j<=num-i; j++){
            row +=j+1
        }
        console.log(row)
    }
}
trinaglePatern3(5)

function trinaglePatern4(num) {
    
    for(let i=0; i<num; i++) {
        let row = ""
         for(let k=0; k<num -i;k++){
                row += " "
            }
        for(let j=0; j<=i; j++){
            row += "*"
        }
        console.log(row)
    }
}
trinaglePatern4(5)

function trinaglePatern5(num) {
     let val=1
    for(let i=0; i<num; i++) {
        let row = ""
        
        for(let j=0; j<=i; j++){
            
            row += val
            if( val==1) {
                val=0
            }else val=1
        }
        console.log(row)
    }
}
trinaglePatern5(5)