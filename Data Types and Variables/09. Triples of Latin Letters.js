function triples(n){
    let letter = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let fLetter = String.fromCharCode(97 + i);
                let sLetter = String.fromCharCode(97 + j);
                let tLetter = String.fromCharCode(97 + k);
                console.log(fLetter+sLetter+tLetter)
                
            }
            
        }
        
    }
}

triples(3)