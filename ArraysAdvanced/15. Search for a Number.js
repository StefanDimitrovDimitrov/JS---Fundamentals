function search(arr1, arr2){


    let takeNumbers = arr2[0];
    let removeNumbers = arr2[1];
    let searchNumber = arr2[2];

    arr1.splice(takeNumbers, arr1.length)
    arr1.splice(0,removeNumbers)

    count = arr1.filter(number => number == searchNumber)

    console.log(`Number ${searchNumber} occurs ${count.length} times.`);
}

search([5, 2, 3, 3, 4, 1, 6], [5, 1, 3])