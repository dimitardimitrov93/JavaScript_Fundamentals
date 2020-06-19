function solution(arrayInput) {

    let targetThickness = arrayInput[0];
    let operationType = '';
    let xRayCounter = 0;
    let operationsCount = 0;

    for (let i = 1; i < arrayInput.length; i++) {
        let initialThickness = arrayInput[i];
        let currentThickness = initialThickness;

        console.log(`Processing chunk ${initialThickness} microns`);

        processingCrystal(currentThickness);
    }

    function operationCut(crystalThickness) {
        operationType = 'Cut';
        return crystalThickness / 4;
    }

    function operationLap(crystalThickness) {
        operationType = 'Lap';
        return crystalThickness *= 0.8;
    }

    function operationGrind(crystalThickness) {
        operationType = 'Grind';
        return crystalThickness -= 20;
    }

    function operationEtch(crystalThickness) {
        operationType = 'Etch';
        return crystalThickness -= 2;
    }

    function operationXray(crystalThickness) {
        operationType = 'X-ray';
        xRayCounter++;
        return crystalThickness += 1;
    }

    function transportAndWashing(crystalThickness) {
        operationType = 'Transporting and washing';
        console.log(operationType);
        return Math.floor(crystalThickness);
    }

    function printAndResetCounter(operType, operCount) {
        console.log(`${operType} x${operCount}`);
        operationsCount = 0;
    }

    function processingCrystal(currentThickness) {
        while (currentThickness !== targetThickness) {
            if (currentThickness >= (targetThickness * 4)) {
                while (currentThickness >= (targetThickness * 4)) {
                    currentThickness = operationCut(currentThickness);
                    operationsCount++;
                }
            } else if (currentThickness > (targetThickness * 1.2)) {
                while (currentThickness > (targetThickness * 1.2)) {
                    currentThickness = operationLap(currentThickness);
                    operationsCount++;
                }
            } else if (currentThickness > (targetThickness + 20)) {
                while (currentThickness > (targetThickness + 20)) {
                    currentThickness = operationGrind(currentThickness);
                    operationsCount++;
                }
            } else if (currentThickness >= (targetThickness + 2)) {
                while (currentThickness >= (targetThickness + 2)) {
                    currentThickness = operationEtch(currentThickness);
                    operationsCount++;
                }
            } else if ((currentThickness === (targetThickness - 1)) && (xRayCounter < 1)) {
                currentThickness = operationXray(currentThickness);
                operationsCount++;
            }
            
            printAndResetCounter(operationType, operationsCount);
            currentThickness = transportAndWashing(currentThickness);

            if (currentThickness === targetThickness) {
                console.log(`Finished crystal ${currentThickness} microns`)
            }
        }
    }
}

solution([1000, 4000, 8100]);