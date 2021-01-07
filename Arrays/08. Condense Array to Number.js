function eArrays(arr){

    while (arr.length != 1){
        let newArr = []
        for (let i = 0; i < arr.length-1; i++) {
        newArr[i] = arr[i]+arr[i+1];     
        }
        arr = newArr
    }
    console.log(arr.join(''));
}

eArrays([5, 0, 4, 1, 2])


// 8.	Condense Array to Number
// Write a program which receives an array of numbers and condense them by summing adjacent couples of elements until a single number is obtained. 
// Examples
// For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.
// Input	Output	Comments
// [2,10,3]	25	2 10 3  2+10 10+3  12 13  12 + 13  25
// [5,0,4,1,2]	35	5 0 4 1 2  5+0 0+4 4+1 1+2  5 4 5 3  5+4 4+5 5+3  9 9 8  9+9 9+8  18 17  18+17  35
// [1]	1	1 is already condensed to number