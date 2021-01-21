function solve(input){
    let phonebook = {};
    //repeat for each element
    for (let line of input){
        //- parse input string
        let [name, phone] = line.split(' ');
        // - store in collection
        phonebook[name] = phone
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    };
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)