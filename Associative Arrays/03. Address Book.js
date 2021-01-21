function addressBook(arr){
    adressBook = {}

    for (let line of arr) {
        let [name, adress] = line.split(":");
        adressBook[name]=adress;
    }
    
    let sorted= Object.entries(adressBook);
    sorted.sort((a,b)=> a[0].localeCompare(b[0]))

    for (const [name,adress] of sorted) {
        console.log(`${name} -> ${adress}`);
    }

}



    

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)