function calc(a, b, operator){
    switch (operator){
        case "multiply":
            let myltiply = (a, b) => a * b
            console.log(myltiply(a, b));
            break
        case "divide":
            let divide = (a, b) => a / b 
            console.log(divide(a, b));            
            break
        case "add":
            let add = (a, b) => a + b
            console.log(add(a, b));
            break
        case "subtract":
            let subtract = (a, b) => a - b
            console.log(subtract(a, b));
            break
    }   
}

calc(5, 5, "add")


// Write a function that receives three parameters and write an arrow function that calculate result depending of operator. Operator can be 'multiply', 'divide', 'add', 'subtract'. 
// Input
// The input comes as parameters named numOne, numTwo, operator.
// Examples
// Input	Output
// 5
// 5
// 'multiply'	25
// 40
// 8
// 'divide'	5
// 12
// 19
// 'add'	31
// 50
// 13
// 'subtract'	37
// Hints
// •	Use switch statements for the different operators.
