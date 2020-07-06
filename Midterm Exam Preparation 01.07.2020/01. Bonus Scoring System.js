function scoringSystem(arrInput) {

    let arr = arrInput.slice();

    let studentsCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let additionalCourseBonus = Number(arr.shift());

    let totalMaxBonus = 0;
    let maxAttendances = 0;

    let studentAttendances = arr.slice().map(function (a) {
        return Number(a);
    });

    while (studentAttendances.length > 0) {

        let currentStudentAttendances = studentAttendances.shift();
        let currentStudentBonus = Math.ceil((currentStudentAttendances / lecturesCount) * (5 + additionalCourseBonus));

        if (currentStudentBonus > totalMaxBonus) {
            totalMaxBonus = currentStudentBonus;
            maxAttendances = currentStudentAttendances;
        } else {
            continue;
        }

    }

    console.log(`Max Bonus: ${totalMaxBonus}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

// scoringSystem([
//     '5',  '25', '30',
//     '12', '19', '24',
//     '16', '2'
// ]);

scoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '30'
  ]);