function rightPlace(str, char, template){
    let res = str.replace("_", char);
    let output = res === template
    if (output){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong')