function max(arr){
    top = []
    isBigger = false
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if(arr[i] > arr[j+1]){
                isBigger = true
            }else{
                isBigger = false
                break
            }
 
    }
    if (isBigger){
    top.push(arr[i])
    isBigger = false        
            
    }

    }
    top.push(arr[arr.length-1])
    console.log(top.join(" "));
}

max([41, 41, 34, 20])









// Write a function to find all the top integers in an array. 
// A top integer is an integer which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by single space.
// Examples
// Input	Output
// [1, 4, 3, 2]	4 3 2
// [14, 24, 3, 19, 15, 17]	24 19 17
// [41, 41, 34, 20]	41 34 20
// [27, 19, 42, 2, 13, 45, 48]	48
