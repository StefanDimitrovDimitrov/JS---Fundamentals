function solve(str){
    let arr = str.split(' ');

    let occurrences = new Map()

    for (let word of arr){
        word = word.toLowerCase();
        if(!occurrences.has(word)){
            occurrences.set(word, 0)
        }
        occurrences.set(word, occurrences.get(word)+1)
    }
    
    return Array.from(occurrences.keys())
    .filter(x => occurrences.get(x) %2 !==0)
    .join(' ')
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')