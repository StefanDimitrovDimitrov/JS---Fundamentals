function printCharBetween(first, second){
    let firstCode = first.charCodeAt(0);
    let secondCode = second.charCodeAt(0);

    let start = firstCode < secondCode ? firstCode : secondCode; //Math.min
    let end = firstCode > secondCode ? firstCode : secondCode;//Math.max()
    
    let line = '';

    for(let i = start + 1; i < end; i ++){
        line += String.fromCharCode(i) + ' ';
    }
    return line

}

console.log(printCharBetween('a', 'd'))