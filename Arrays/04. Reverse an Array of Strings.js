function reverseString(arr){
    currentChar = ''
    for (let i = 0; i < arr.length/2; i++) {
        currentChar = arr[i];
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = currentChar
    }
    console.log(arr.join(' '));
}
reverseString(['abc', 'def', 'hig', 'klm', 'nop'])





// Write a program which receives an array of strings (space separated values). 
// Your task is to reverse it and print its elements. Swap elements. 
// Examples
// Input	Output	Comments
// ['a', 'b', 'c', 'd', 'e']	e d c b a 	The first element should be last, and the last element should be first.
// ['abc', 'def', 'hig', 'klm', 'nop']	nop klm hig def abc	
// ['33', '123', '0', 'dd']	dd 0 123 33	
