function ladyBugs(arr){
    let fields = Number(arr.shift());
    let matrix = []
    matrix.length = fields
    matrix = matrix.fill(0)
    let bugFields = arr.shift().split(' ');
    
    for (element of bugFields) {
        let CurrentBugFieldIndex = Number(element)
        if (CurrentBugFieldIndex < fields && CurrentBugFieldIndex >= 0){
            matrix[CurrentBugFieldIndex] = 1
        }
    } 

    for (let i = 0; i < arr.length; i++) {
        let [bug, direction, nextPosition] = arr[i].split(' ')
        bug = Number(bug)
        nextPosition = Number(nextPosition)
        if(direction == 'left'){
            nextPosition = -nextPosition
        }
        

        if (bug < 0 || bug >= matrix.length || matrix[bug] !== 1){
            continue;
        }

        matrix[bug] = 0;
        bug += nextPosition

        while (bug >= 0 && bug < matrix.length){
            if(matrix[bug] === 0){
                matrix[bug] =1;
                break
            }
            bug += nextPosition;
        }
    }     

    console.log(matrix.join(' '));
}  

ladyBugs([ 5, '3',
'3 left 2',
'1 left -2']



)

