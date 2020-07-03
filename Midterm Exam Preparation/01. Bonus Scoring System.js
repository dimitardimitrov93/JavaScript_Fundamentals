function scoringSystem(arrInput) {

    let arr = arrInput.slice();

    let studentsCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let additionalCourseBonus = Number(arr.shift());

    let studentAttendances = arr.slice().map(function (a) {
        return Number(a);
    });

    let sortedAttendances = studentAttendances.sort((a, b) => b - a);
    let maxAttendances = sortedAttendances[0];
    let nearestMaxAttendances = sortedAttendances[1];

    maxAttendances = ((maxAttendances / nearestMaxAttendances) * nearestMaxAttendances);

    let nearestMaxBonus = ((nearestMaxAttendances / lecturesCount) * (5 + additionalCourseBonus));
    let totalMaxBonus = Math.ceil((((maxAttendances / lecturesCount) * (5 + additionalCourseBonus)) / nearestMaxBonus) * nearestMaxBonus);

    console.log(`Max Bonus: ${totalMaxBonus}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

scoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '2'
]);