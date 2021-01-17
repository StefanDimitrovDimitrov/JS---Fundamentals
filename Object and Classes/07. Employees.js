function employees(arr){

    class Employees{
        constructor(name){
            this.name = name
                this.number = name.length
        }

        print() {
            return `Name ${this.name} -- Personal Number: ${this.number}`
        
        }
    }

    arr = arr
        .map(x => new Employees(x))
        .forEach(obj => {
            console.log(obj.print());
        })


}


employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)