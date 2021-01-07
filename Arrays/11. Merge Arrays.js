function merge(arr1, arr2){
    mergeArr3 = []
    for (let i = 0; i < arr1.length; i++) {
        if(i % 2 == 0){
            mergeArr3.push(Number(arr1[i])+Number(arr2[i]))
        }else{
            mergeArr3.push(arr1[i]+arr2[i])
        }
        
    }
    console.log(mergeArr3.join(" - "));
}
       
    

merge(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])


// Write a function which receives two string arrays and merges them into a third array.  
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input you will receive two string arrays.
// Output
// As output you should print the resulting third array, each element separated by " - ".
// Examples
// Input	Output
// ['5', '15', '23', '56', '35'],
// ['17', '22', '87', '36', '11']	22 - 1522 - 110 - 5636 - 46
// ['13', '12312', '5', '77', '4'],
// ['22', '333', '5', '122', '44']	35 - 12312333 - 10 - 77122 - 48
