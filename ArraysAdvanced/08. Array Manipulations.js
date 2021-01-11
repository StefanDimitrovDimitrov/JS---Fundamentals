function arrManipulations(arr){

    // list = arr.shift().split(" ").map(x=>+x)
    list = arr.shift().split(" ").map(Number);

   for(element of arr) {
        command = element.split(' ')[0]
        numIndex = Number(element.split(' ')[1])
        
        if (command == "Add"){
            list.push(numIndex);
        
        }else if (command == "Remove"){
            list = list.filter(el => el !== numIndex);
        
        }else if(command == "RemoveAt"){
            list.splice(numIndex,1);
        
        }else if (command == "Insert"){
            index = Number(element.split(' ')[2]);
            list.splice(index,0,numIndex);
        }
        
    }
    console.log(list.join(' '));

}

arrManipulations(['4 19 2 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])

