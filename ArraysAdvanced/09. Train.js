function train(arr){
    let train = arr.shift().split(" ").map(Number);
    let capacity = arr.shift().split(" ").map(Number);
    let leftPeople = 0

    for (let i = 0; i < arr.length; i++) {
        [command, people] = arr[i].split(' ')
        people = Number(people);

        if (command == "Add"){
            train.push(people);

        }else{
            people = Number(command);

            for (let g = 0; g < train.length; g++) {
                if ((capacity - train[g]) >= people || train[g] == 0){
                    people += train[g]
                    train.splice(g,1,people)
                    break
                }else{
                    continue
                }
                
            }

        }
    }

    
    console.log(train.join(" "));
}


train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']


)