function solve(text, word){
    let newText = text.replace(word, repeat(word));
    while (newText.includes(word)){
        newText = newText.replace(word,repeat(word));
    }
    function repeat(word){
        let result = ''
        for (let index = 0; index < word.length; index++) {
            result += '*'
        }
        return result     
    }

    console.log(newText);
}

solve("A small sentence with some words", "small")