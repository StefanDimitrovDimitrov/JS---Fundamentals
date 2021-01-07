function rotationA(arr, num){

    for (let i = 0; i < num; i++) {
        arr[arr.length -1] = arr.shift();
    }
    console.log(arr.join(" "))
}

rotationA([51, 47, 32, 61, 21], 2)






// Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
// Output
// Print the resulting array elements separated my single space.
// Examples
// Input	Output
// [51, 47, 32, 61, 21], 2	32 61 21 51 47
// [32, 21, 61, 1], 4	32 21 61 1
// [2, 4, 15, 31], 5	4 15 31 2
