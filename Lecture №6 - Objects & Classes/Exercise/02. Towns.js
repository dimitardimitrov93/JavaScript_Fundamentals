function townInformation(arrInput) {

    arr = arrInput.slice();

    for (const index in arr) {

        let infoArr = arr[index].split(' | ');
        let currentTownInfo = {};

        currentTownInfo.town = infoArr[0];
        currentTownInfo.latitude = (Number(infoArr[1])).toFixed(2);
        currentTownInfo.longitude = (Number(infoArr[2]).toFixed(2));

        console.log(currentTownInfo);
    }
}

townInformation([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);