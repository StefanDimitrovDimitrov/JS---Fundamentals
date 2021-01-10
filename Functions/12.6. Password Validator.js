function pass(string){
    let isValid = true;

    function lengthPass(string){
        if (string.length < 6 || string.length > 10){
            isValid = false;
            return "Password must be between 6 and 10 characters"
        }else{
            return true
        }
        
    }

    function lettersDigits(string){
        let isValid2 = true;
        for (let i = 0; i < string.length; i++) {
            let code = string[i].charCodeAt(0);
            if(code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57){
                    isValid2 = true;
                }else{
                    isValid = false
                    isValid2 = false;
                    break;
                }
        }
        if(!isValid2){
            return "Password must consist only of letters and digits";
        }else{
            return true
        }
    }
    
    function twoDigits(string){
        let digits = 0;
        for (let g = 0; g < string.length; g++) {
            let code = string[g].charCodeAt(0);
            if (code >= 48 && code <= 57){
                digits++;
            }
        }
        if (digits < 2){
            isValid = false
            return "Password must have at least 2 digits"
        }else{
            return true
        }

    }

    lengthPass(string)
    lettersDigits(string)
    twoDigits(string)

    if (isValid){
        console.log("Password is valid");
    }else{
        if (lengthPass(string) !== true){
            console.log(lengthPass(string));
        }
        if (lettersDigits(string) !== true){
            console.log(lettersDigits(string));
        }
        if (twoDigits(string) !== true){
            console.log(twoDigits(string));
        }

    }

}


// pass('logIn');
// pass('MyPass123');
pass('Pa$s$s');