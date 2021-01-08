function grades(grade){


    if (grade < 3){
        console.log(`${checkTheGrade(grade)} (2)`);
    }else{
        console.log(`${checkTheGrade(grade)} (${grade.toFixed(2)})`);
    }
    

    function checkTheGrade(grade){
        if (grade < 3){
            return "Fail"
        }else if(grade < 3.50){
            return "Poor"
        }else if(grade < 4.5){
            return "Good"
        }else if(grade < 5.5){
            return "Very good"
        }else{
            return "Excellent"
        }
    }

}

grades(2.99)



// Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"
// Examples
// Input	Output


// 3.33	Poor (3.33)
// 4.50	Very good (4.50)
// 2.99	Fail (2)
