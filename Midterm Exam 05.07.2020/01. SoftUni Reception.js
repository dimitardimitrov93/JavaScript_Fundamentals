function productivityCalculator(arrInput) {

    let arr = arrInput.slice().map(Number);

    let employeesEfficiencyPerHour = arr.slice(0, 3);
    let initialStudentQuestions = arr[3];
    let currentStudentQuestions = initialStudentQuestions;

    let answersPerHour = employeesEfficiencyPerHour.reduce((a, b) => a + b, 0);
    let timeNeededForAllQuestions = 0;

    for (let i = 1; i < initialStudentQuestions; i++) {
        if ((i === 1) || ((i % 4 !== 0) && (currentStudentQuestions > 0))) {
            currentStudentQuestions -= answersPerHour;
            timeNeededForAllQuestions++;
        } else if ((i % 4 === 0) && (currentStudentQuestions > 0)) {
            timeNeededForAllQuestions++;
        } else if (currentStudentQuestions <= 0) {
            break;
        }
    }

    console.log(`Time needed: ${timeNeededForAllQuestions}h.`);
}

// productivityCalculator(['5','6','4','20']);
productivityCalculator(['1','2','3','45']);
productivityCalculator(['3','2','5','40']);