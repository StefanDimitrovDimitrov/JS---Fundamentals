function solve(arr1) {

    let songs = []
    let n = arr1.shift()
    let typeSong = arr1.pop()

    class Song{
        constructor(type, name, time) {

            this.type = type;
            this.name = name;
            this.time = time;

        }
    }

    for (let i = 0; i < n; i++) {
        let [type, name, time,] = arr1[i].split("_")
        let song = new Song(type, name, time)
        songs.push(song);
    }

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}


solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)