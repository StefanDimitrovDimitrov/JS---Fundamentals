function sorting(arr){

    finalArr = []

    function compareNumbers(a, b) {return a-b}
    arr.sort(compareNumbers);

    length = arr.length

    for (let i = 0; i < length; i+=2) {
        finalArr.push(arr.pop())
        finalArr.push(arr.shift())
        
    }



    // for (const element of arr) { 
    //     finalArr.push(arr.pop())
    //     finalArr.push(arr.shift())
    // }
    // finalArr.push(arr.pop())
    // finalArr.push(arr.shift())
    console.log(finalArr.join(", "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])