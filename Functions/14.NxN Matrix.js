function nMatrix(n){
    
    function printNumber(n){
        let result = ''
        for (let i = 0; i < n; i++) {
            result +=`${n} \n`
            for (let j = 1; j < n; j++){
                result +=`${n} `
            }
        }
        return result;
    }
    let finalResult = printNumber(n)
    end = finalResult.length
    finalResult = finalResult.slice(2,end)
    finalResult = `${finalResult}${ n}`
    console.log(finalResult)
}

nMatrix(3)