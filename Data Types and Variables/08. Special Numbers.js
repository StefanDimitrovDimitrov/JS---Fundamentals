function specialNumbers(n){

    for (let i = 1; i <= n; i++) {
        let sum = 0 
        let p = i
        while(p){
            digit = parseInt(p % 10)
            sum += digit;
            p = (p - digit)/10;
        }

        if(sum == 5 || sum == 7|| sum == 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
        
   }

}
    

specialNumbers(15)