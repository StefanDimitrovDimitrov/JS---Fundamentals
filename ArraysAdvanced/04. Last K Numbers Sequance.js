function softFibunachi(a, b){
    let fib = [];
    let num = 0;

    for (let i = 0; i < a; i++) {
        if (fib.length == 0){
            num = 1;

        }else if (fib.length <= b){
            num += eval(fib.join("+ 0"));
        }else{
            part = fib.length - b;
            slice = fib.slice(part);
            let sum = eval(slice.join("+"))
            num += sum;
        }

        fib.push(num);
        num = 0 ;
    }
    console.log(fib.join(" "));
}
softFibunachi(8, 2)

// fib.slice(-b) = last b elements from fib

