function sorting(arr){

    finalArr = []

    arr.sort((a, b) => (a-b));

    length = arr.length

    for (let i = 0; i < length; i+=2) {
        finalArr.push(arr.pop())
        finalArr.push(arr.shift())
        
    }

    console.log(finalArr.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])