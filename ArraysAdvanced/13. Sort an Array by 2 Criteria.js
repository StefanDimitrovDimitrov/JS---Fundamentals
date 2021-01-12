function sortTwoCriteria(arr){

    arr.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(arr.join('\n'));
}

sortTwoCriteria(["test", "Deny", "omen", "Default"])

