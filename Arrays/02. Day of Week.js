function days(n){
    let days_of_week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    if (n> 0 && n <=7){
        console.log(days_of_week[n-1]);    
    }else{
        console.log(`Invalid day!`)
    }
        
}

  
days(3)


//Write a program which receives a number and prints the corresponding name of the day of week. 
//If the number is NOT a valid day, print 'Invalid day!'.
