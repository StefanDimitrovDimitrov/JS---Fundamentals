function arrayManipulator(arr1, arr2) {
    function add(string, arr1) {
        index = Number(string.split(" ")[1])
        element = Number(string.split(" ")[2])
        arr1.splice(index, 0, element)
        return arr1
    }

    function contains(string, arr1) {
        element = Number(string.split(" ")[1])
        // find = arr1.includes(element)
        // if (find) {
        //     return 0
        // } else {
        //     return -1
        // }
        return arr1.indexOf(element)

    }

    function addMany(string, arr1) {
        index = Number(string.split(' ')[1])
        string = string.split(' ')
        number = string.map(Number)
        // for (let i = 0; i < number.length; i++) {
        //     arr1.splice(index + i, 0, number[i])
        // }

        // return arr1


        let currentEl = 0;
        for (let i = number.length - 1; i >= 2; i--) {
            currentEl = number[i];
            arr1.splice(index, 0, currentEl);
        }
    }

    function remove(string, arr1) {
        index = Number(string.split(" ")[1])
        arr1.splice(index, 1)
        return arr1

    }

    function shift(string, arr1) {
        let position = Number(string.split(" ")[1])

        for (let i = position; i > 0; i--) {
            let current = arr1.shift()
            arr1.push(current)

        }
        return arr1
    }

    function sumPairs(arr1) {
        arr1.push(0)
        let len = arr1.length/2-1
        let count = 0
        for (let i = 0; i <= len; i++) {

            let result = arr1[i] + arr1[i + 1]
            arr1.shift()
            if (isNaN(result)) {
                break
            }
            arr1.push(result)
            count++

        }
        arr1.splice(0,arr1.length - count)
        return arr1

    }

    newArr2 = []
    command = arr2[0].split(" ")[0]

    for (let i = 0; i < arr2.length; i++) {
        let command = arr2[i].split(" ")[0];

        if (command == "add") {
            add(arr2[i], arr1)
        } else if (command == "contains") {
            console.log(contains(arr2[i], arr1));
        } else if (command == "addMany") {
            addMany(arr2[i], arr1)
        } else if (command == "remove") {
            remove(arr2[i], arr1)
        } else if (command == "shift") {
            shift(arr2[i], arr1)
        } else if (command == "sumPairs") {
            sumPairs(arr1)
        } else {
            for (let el of arr1){
                newArr2.push(el)
            }
        }

    }

    console.log('[ ' + newArr2.join(', ') + ' ]');
}





arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
    