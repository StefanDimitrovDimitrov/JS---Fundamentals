function houseParty(tracker){
    listGuest = []

    for (const guest of tracker) {
        let guestName = guest.split(' ')[0]
        let info = guest.split(' ')[2]

        if (!listGuest.includes(guestName) && info == "going!"){

            listGuest.push(guestName)
        }else if(listGuest.includes(guestName) && info == "going!"){

            console.log(`${guestName} is already in the list!`);
        }else if(!listGuest.includes(guestName) && info == "not"){

            console.log(`${guestName} is not in the list!`);
        }else{
            const nameToBeRemove = (element) => element == guestName;
            index = listGuest.findIndex(nameToBeRemove);
            listGuest.splice(index,1)
        }
    }

    console.log(listGuest.join("\n"));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
