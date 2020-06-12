function perfectNumber(number) {

    let properDivisor = 0;
    let sumOfProperDivisors = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            properDivisor = i;
            sumOfProperDivisors += properDivisor;
        } else {
            continue;
        }
    }

    if (sumOfProperDivisors === number) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
} 

perfectNumber(1236498);