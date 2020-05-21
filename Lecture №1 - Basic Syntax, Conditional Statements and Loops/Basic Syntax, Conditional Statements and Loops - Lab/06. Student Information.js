function solve(studentName, studentAgeInput, studentGradeInput) {
    
    let studentAge = Number(studentAgeInput);
    let studentGrade = Number(studentGradeInput);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`);
}

solve('John', 15, 5.54678);