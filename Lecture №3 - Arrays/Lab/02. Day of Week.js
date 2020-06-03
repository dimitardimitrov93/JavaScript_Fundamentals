function solve(dayNumber) {
    
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDay = '';

    if (dayNumber >= 1 && dayNumber <= (daysOfWeek.length)) {
        currentDay = daysOfWeek[dayNumber - 1];

        console.log(currentDay);
    } else {
        console.log('Invalid day!');
    }
}

solve(0);