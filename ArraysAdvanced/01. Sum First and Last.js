function sumFirstLast(arr){

    firstNum = Number(arr.shift())
    secondNum = Number(arr.pop())

    console.log(firstNum + secondNum);

}

sumFirstLast(['20', '30', '40'])