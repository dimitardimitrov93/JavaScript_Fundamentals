function solve(bandName, albumName, songName) {
    const timeForFullRotaionOfPlate = 2.5;
    let songDuration = (albumName.length * bandName.length) * (songName.length / 2);

    let plateRotations = Math.ceil(songDuration / timeForFullRotaionOfPlate);

    console.log(`The plate was rotated ${plateRotations} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');