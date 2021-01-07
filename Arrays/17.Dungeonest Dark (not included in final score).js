function dungeonest(arr){
    arr = arr[0].split("|");
    let health = 100;
    let coins = 0;
    let gameOver = false

    for (let i = 0; i < arr.length; i++) {
        room = arr[i].split(' ');
        command = room[0];
        value = Number(room[1]);

        if (command == "chest"){
            coins += value;
            console.log(`You found ${value} coins.`);
        }else if(command == "potion"){
            health += value
            if (health > 100){
                value = 100 - (health - value) 
                health = 100
            }
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else{
            health -= value
            if (health > 0){
                console.log(`You slayed ${command}.`);
            }else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
                gameOver = true
                break
            }
        }

    }
    if (!gameOver){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}

dungeonest(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])















