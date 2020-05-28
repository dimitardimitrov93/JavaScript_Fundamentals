function solve(yearInput, monthInput, dateInput) {

    if (yearInput < 10) {
        yearInput = 1901;
    }

    let currentDate = new Date(`${yearInput}-${monthInput}-${dateInput}`);

    let nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    let yy = nextDay.getFullYear();
    let mm = nextDay.getMonth() + 1;
    let dd = nextDay.getDate();

    console.log(`${yy}-${mm}-${dd}`);
}

solve(2001, 1, 1);