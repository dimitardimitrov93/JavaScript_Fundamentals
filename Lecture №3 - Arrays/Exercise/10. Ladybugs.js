function solve(arrayInput) {

    const fieldSize = arrayInput[0];
    const initialIndexesOfAllLadybugsString = arrayInput[1];
    let initialIndexesOfAllLadybugsArray = initialIndexesOfAllLadybugsString.split(" ");
    let occupiedPositionsByLadybugsArray = [];
    let printLine = '';
    let targetPosition = 0;

    for (let i = 0; i < fieldSize; i++) {
        occupiedPositionsByLadybugsArray.push(0);
    }

    for (let i = 0; i < initialIndexesOfAllLadybugsArray.length; i++) {
        let ladyBugIndex = Number(initialIndexesOfAllLadybugsArray[i]);
        if (ladyBugIndex > occupiedPositionsByLadybugsArray.length - 1) {
          continue;
        }
        occupiedPositionsByLadybugsArray[ladyBugIndex] = 1;
    }

    for (let j = 2; j < arrayInput.length; j++) {
        let commandsString = arrayInput[j];
        let commandsArray = commandsString.split(" ");

        ladyBugIndex = Number(commandsArray[0]);
        let direction = commandsArray[1];
        let flightLength = Number(commandsArray[2]);

        if (occupiedPositionsByLadybugsArray[ladyBugIndex] === 0 || ladyBugIndex < 0 || ladyBugIndex > (occupiedPositionsByLadybugsArray.length - 1)) {
            continue;
        }

        occupiedPositionsByLadybugsArray[ladyBugIndex] = 0;

        if (flightLength < 0) {
            direction = direction === 'right' ? 'left' : 'right';
            flightLength = Math.abs(flightLength);
        }

        if (direction === "right") {
            targetPosition = ladyBugIndex + flightLength;
        } else if (direction === "left") {
            targetPosition = ladyBugIndex - flightLength;
        }

        while (occupiedPositionsByLadybugsArray[targetPosition] === 1) {
            if (direction === 'right') {
                targetPosition += flightLength;
            } else if (direction === 'left') {
                targetPosition -= flightLength;
            }
        }

        if (targetPosition > (occupiedPositionsByLadybugsArray.length - 1) || targetPosition < 0) {
            continue;
        }

        occupiedPositionsByLadybugsArray[targetPosition] = 1;

    }

    printLine = occupiedPositionsByLadybugsArray.join(' ');
    console.log(printLine);
}

solve([ 5, '3', '3 left 2', '1 left -2']);