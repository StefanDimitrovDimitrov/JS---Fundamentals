function commantElements(arr1, arr2){
    for (const el1 of arr1) {
        for (const el2 of arr2) {
            if(el1 === el2){
                console.log(el1);
                break    
            }            
        } 
        
    }
}

commantElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l'])





// // Write a function, which prints common elements in two string arrays. 
// Print all matches on separate lines. 
// Compare the first array with the second array.
// Examples
// Input	Output
// ['Hey', 'hello', 2, 4, 'Peter', 'e'],
// ['Petar', 10, 'hey', 4, 'hello', '2']	hello
// 4
// ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
// ['s', 'o', 'c', 'i', 'a', 'l']	o 
// i
