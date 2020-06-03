function solve(dayNumber) {
    
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDay = '';

    if (dayNumber >= 0 && dayNumber <= (daysOfWeek.length - 1)) {
        currentDay = daysOfWeek[dayNumber - 1];

        console.log(currentDay);
    } else {
        console.log('Invalid day!');
    }
}

solve(11);