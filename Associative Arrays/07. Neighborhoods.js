function solve(arr) {
    object = {}

    let neighborhoods = arr.shift().split(", ")

    for (const neighbo of neighborhoods) {
        object[neighbo] = []
    }

    for (const line of arr) {
        let [neyba, name] = line.split(' - ')
        if (object.hasOwnProperty(neyba)) {
            object[neyba].push(name)
        }
    }

    let sorted = Object.entries(object);
    sorted.sort((a, b) => b[1].length - a[1].length)

    for (const [key, value] of sorted) {
        result = `${key}: ${value.length}`
        let result2 = ''
        for (const name of value) {
            result2 += `\n--${name}`
        }
        console.log(`${result}${result2}`)
    }
}

solve(
    ['Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy']
)