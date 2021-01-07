function maxS(arr){
    let currentSiquence = [];
    let longestSiquence = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]){
                currentSiquence.push(arr[i]);
            }else{
                break
            }
        }
        if(currentSiquence.length > longestSiquence.length){
            longestSiquence = currentSiquence
        }
        currentSiquence = [];
    }
    console.log(longestSiquence.join(' '));
}

maxS([0, 1, 1, 5, 2, 2, 6, 3, 3])


// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.
// Examples
// Input	Output
// [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]	2 2 2
// [1, 1, 1, 2, 3, 1, 3, 3]	1 1 1
// [4, 4, 4, 4]	4 4 4 4
// [0, 1, 1, 5, 2, 2, 6, 3, 3]	1 1
