function oddVsEvenSum(n){

    let arr = String(n).split('');
    let sumOdd = 0
    let sumEven = 0

    for (let i = 0; i < arr.length; i++) {
        const e = Number(arr[i]);
        if (e % 2 == 0){
            sumEven += e
        }else{
            sumOdd +=e
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
}

console.log(oddVsEvenSum(1000435));