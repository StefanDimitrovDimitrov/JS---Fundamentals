function personInfo(first, second, age){
    let person = {
         firstName: first,
         lastName : second,
         age: Number(age), 
    }

    return person
}

console.log(personInfo("Peter", "Pan","20"))