function solve(arr){
    let words = arr.shift().split(' ')

    tracker = {}

    for (const word of words) {
        tracker[word] = 0
    }

    for (const string of arr) {
        if(tracker.hasOwnProperty(string))
        tracker[string]++
    }
    Object.keys(tracker)
    .sort((a,b)=> tracker[b]-tracker[a])
    .forEach(el => {console.log(`${el} - ${tracker[el]}`);});
}

solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )