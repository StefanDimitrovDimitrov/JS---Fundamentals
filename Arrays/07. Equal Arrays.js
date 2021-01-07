function equalArrays(arr1, arr2){
    let sum = 0 
    isIndentical = true
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] === arr2[i]){
            sum += Number(arr1[i])
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIndentical = false
            break
        }
            
    };
    if (isIndentical)
        console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10','20','30'], ['10','20','30'])


// Write a program which receives two string arrays and print on the console whether they are identical or NOT. 
// Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on the console following message: 
// 'Arrays are identical. Sum: {sum}'
//  If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
//  'Arrays are not identical. Found difference at {index} index'.
// Examples
// Input	Output
// ['10','20','30'], ['10','20','30']	Arrays are identical. Sum: 60
// ['1','2','3','4','5'], ['1','2','4','4','5']	Arrays are not identical. Found difference at 2 index
// ['1'], ['10']	Arrays are not identical. Found difference at 0 index
