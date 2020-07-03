function songPicker(arrayInput) {

    let arr = arrayInput.slice();
    let songsNumber = arr.shift();
    let playlistName = arr.pop();

    let length = arr.length;

    class Song {
        constructor(typeList, name, duration) {
            this.typeList = typeList;
            this.name = name;
            this.duration = duration;
        }
    }

    for (let i = 0; i < length; i++) {
        let currentSongInfo = arr[i].split('_');
        let currentTypeList = currentSongInfo[0];
        let currentSong = currentSongInfo[1];
        let currentduration = currentSongInfo[2];

        let currentSongObj = new Song(currentTypeList, currentSong, currentduration);

        if ((currentSongObj.typeList === playlistName) || (playlistName === 'all')) {
            console.log(currentSong);
        } else {
            continue;
        }
    }
}

// songPicker([
//     3,
//     "favourite_DownTown_3:14",
//     "favourite_Kiss_4:16",
//     "favourite_Smooth Criminal_4:01",
//     "favourite",
// ]);

// songPicker([
//     4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'
// ]);

songPicker([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
