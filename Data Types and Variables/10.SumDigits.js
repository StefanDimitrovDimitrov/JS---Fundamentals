function sumDigits(n){
    n = n.toString()
    let sum = 0 
    for (let i = 0;  i < n.length; i++) {
        num = Number(n[i])
        sum += num       
    }
    console.log(sum);
}

sumDigits(245678)