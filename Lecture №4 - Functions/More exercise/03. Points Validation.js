function solution(arrayInput) {
    
    let x1 = arrayInput[0];
    let y1 = arrayInput[1];
    let x2 = arrayInput[2];
    let y2 = arrayInput[3];

    let cartesianStartPoint1 = 0;
    let cartesianStartPoint2 = 0;

    let distanceBetweenPoints = distanceCalculator(x1, y1, x2, y2);
    let distanceBetweenFirstPointAndZero = distanceCalculator(x1, y1, cartesianStartPoint1, cartesianStartPoint2);
    let distanceBetweenSecondPointAndZero = distanceCalculator(x2, y2, cartesianStartPoint1, cartesianStartPoint2);

    function distanceCalculator(x1, y1, x2, y2) {
        return Math.sqrt(((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2))));
    }

    function isInteger(number) {
        if (number % 1 === 0) {
            return true;
        } else {
            return false;
        }
    }

    function validationAndPrint(firstNumber, secondNumber, thirdNumber) {
        if (isInteger((distanceBetweenFirstPointAndZero))) {
            console.log(`{${x1}, ${y1}} to {${cartesianStartPoint1}, ${cartesianStartPoint2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${cartesianStartPoint1}, ${cartesianStartPoint2}} is invalid`);
        }
    
        if (isInteger(distanceBetweenSecondPointAndZero)) {
            console.log(`{${x2}, ${y2}} to {${cartesianStartPoint1}, ${cartesianStartPoint2}} is valid`);
        } else {
            console.log(`{${x2}, ${y2}} to {${cartesianStartPoint1}, ${cartesianStartPoint2}} is invalid`);
        }
    
        if (isInteger(distanceBetweenPoints)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    return validationAndPrint(distanceBetweenFirstPointAndZero, distanceBetweenSecondPointAndZero, distanceBetweenSecondPointAndZero);
}

solution([2, 1, 1, 1]);