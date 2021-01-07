function addSubtract(arr){
    modifiedArr = []
    arr1 = eval(arr.join("+"))
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0){
            arr[i] += i
            modifiedArr.push(arr[i])
        }else{
            arr[i] -= i
            modifiedArr.push(arr[i])
        }
        
    }
    arr2 = eval(modifiedArr.join("+"))
    console.log(modifiedArr);
    console.log(arr1);
    console.log(arr2);
}
addSubtract([5, 15, 23, 56, 35])


// // // Given array 'arr'
// var i = arr.length;
// var sum = 0;
// while (--i) sum += arr[i];



// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
// Examples
// Input	Output
// [5, 15, 23, 56, 35]	[ 5, 14, 21, 59, 31 ]
// 134
// 130
// [-5, 11, 3, 0, 2]	[ -5, 10, 1, 3, 6 ]
// 11
// 15
