function gladiatorExpeses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
        for (let lostCounter = 1; lostCounter <= lostFights; lostCounter++) {
            if(lostCounter % 12 == 0){
                expenses += helmetPrice + swordPrice + shieldPrice + armorPrice    
            }else if (lostCounter % 6 == 0){
                expenses += helmetPrice + swordPrice + shieldPrice
            }else if(lostCounter % 3 ==0){
                expenses += swordPrice
            }else if(lostCounter % 2 == 0){
                expenses += helmetPrice
            }     
            
                     
        }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpeses(23,
    12.50,
    21.50,
    40,
    200
    )