function bombNum(arr1, arr2) {
    let index = 0;
    let removeNumElements = 0;
    let startIndex = 0;

    while (index != -1) {

        index = arr1.indexOf(arr2[0])
        if (index < 0) {
            break;
        } else {
            let startIndex = index - arr2[1]
            if (startIndex < 0){
                startIndex = 0;
            }
            if (index > arr2[1]){
                removeNumElements = arr2[1] * 2 + 1
            }else{
                removeNumElements = index + arr2[1] + 1
            }
            console.log(arr1)
            arr1.splice(startIndex, removeNumElements);
            console.log(arr1)
        }
    }
    if (arr1.length == 0){
        console.log(0);
    }else{

        console.log(eval(arr1.join("+")));
    }
}

bombNum([1, 9, 4, 2, 8, 9, 1],[9,2])
    
    


