function solve(arrInput) {

    let arr = arrInput.slice();
    let students = {};

    for (const element of arr) {
        let tokens = element.split(' ');
        let student = tokens.shift();
        let grades = tokens.slice().map(x => Number(x));

        if (students[student] === undefined) {
            students[student] = grades;
        } else {            
            students[student] = students[student].concat(grades);
        }
    }

    let sortedGrades = Object.entries(students).sort((a, b) => (a[1].reduce((a, b) => a + b, 0) / a[1].length) - (b[1].reduce((a, b) => a + b, 0) / b[1].length));
    
    sortedGrades.forEach(element => {
        console.log(`${element[0]}: ${element[1].join(', ')}`);
    });
}

solve([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);