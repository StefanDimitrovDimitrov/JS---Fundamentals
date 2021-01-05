function intFloat(n1, n2, n3){
    result = Number(n1 + n2 + n3)
    if (!Number.isInteger(result)){
        console.log(`${result} - Float`);
    }else{
        console.log(`${result} - Integer`);
    }
}

intFloat(100, 200, 303)