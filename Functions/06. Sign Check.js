
function checker(a, b, c){

    result = ''

    if (a >= 0 && b >= 0 && c >= 0) {
        result = "Positive"
    }else if(a <= 0 && b <= 0 && c >= 0){
        result = "Positive"
    }else if(a >= 0 && b <= 0 && c <= 0){
        result = "Positive"
    }else if(a <= 0 && b >= 0 && c <= 0){
        result = "Positive"
    }else{
        result = "Negative"
    }
    console.log(result);
}



checker(5,12,-15)
// You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is negative or positive. 
// Try to do this WITHOUT multiplying the 3 numbers.
// The input comes as parameters named numOne, numTwo, numThree.
// Example
// Input	Output
// 5
// 12
// -15	Negative
// -6
// -12
// 14	Positive
// -1
// -2
//  -3	Negative
// -1
//  0
// 1	Positive
