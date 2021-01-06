function calculator(n1, operator, n2){
    let calculation = eval(n1 + operator + n2)
    console.log(`${(calculation).toFixed(2)}`);

}

calculator(5, "+", 10)