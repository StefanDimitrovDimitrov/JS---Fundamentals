function processOdd(arr){
    let newArr = []
    let oddNum
    for (let i = 1; i < arr.length; i+=2) {
        oddNum = arr[i] * 2
        newArr.push(oddNum)
        
    }
    console.log(newArr.reverse().join(' '));
}

processOdd([10, 15, 20, 25])