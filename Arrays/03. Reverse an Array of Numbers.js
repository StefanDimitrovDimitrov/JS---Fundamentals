function reverse(n, arr){
    let new_arr = []
    for (let i = n - 1; i >= 0; i--) {
        new_arr.push(arr[i]);
    }
    console.log(new_arr.join(' '));
}

reverse(3,[10, 20, 30, 40, 50])



// Write a program which receives a number n and an array of elements. 
// Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.
// Examples
// Input	Output
// 3, [10, 20, 30, 40, 50]	30 20 10
// 4, [-1, 20, 99, 5]	5 99 20 -1
// 2, [66, 43, 75, 89, 47]	43 66
