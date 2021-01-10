function polidrom(arr){
    let result = '';
    for(let num of arr){
        let isPolindrome = 'true'
        num = String(num);
        let mid = parseInt(num.length/2);
        for (let i = 0; i < mid; i++) {
            if (num[i] !== num[num.length - 1 - i]){
                isPolindrome = 'false';
                break;
            }   
            
        }
        result += isPolindrome + '\n';
    }
    return result;
}