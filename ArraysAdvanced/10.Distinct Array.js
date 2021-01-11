function distractArr(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let g = i+1; g <= arr.length; g++) {
            first = arr[i]
            second = arr[g]
            if (first === second){
                arr.splice(g,1)
                g--
            } 
        }
        
    }

    console.log(arr.join(' '));
}

distractArr([20, 8, 12, 13, 4, 4, 8, 5])