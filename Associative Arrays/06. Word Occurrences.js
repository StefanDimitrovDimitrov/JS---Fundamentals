function wordOccurrences(arr){
    let myMap = new Map()

   for (const element of arr) {
       let numElem = 1
       if (myMap.has(element)){
            numElem += myMap.get(element)
       }
        myMap.set(element, numElem)   
   }
    
    let sorted = [...myMap];
    sorted.sort((a,b)=> b[1]-a[1])

    for (let [element, numElem ] of sorted) {
        console.log(`${element} -> ${numElem} times`)   
    }


}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])