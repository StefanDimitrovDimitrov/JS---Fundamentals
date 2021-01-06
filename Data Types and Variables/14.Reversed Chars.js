function reverceChars(a, b , c){
    let string = a+b+c
    let result = ""
    for (let i = string.length-1; i > -1; i--) {
        result += `${string[i]} `
        
    }
    console.log(result);
}

reverceChars('1',
'L',
'&'
)