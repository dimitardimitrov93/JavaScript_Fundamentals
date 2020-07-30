function solve(arrInput) {
    
    let arr = arrInput.slice();
    let stringToManipulate = arr.shift();

    let regExpPattern = /\b(?<day>\d{2})([\.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDate;
    let validDatesArr = [];
    
    while ((validDate = regExpPattern.exec(stringToManipulate)) !== null) {
        validDatesArr.push(`Day: ${validDate.groups['day']}, Month: ${validDate.groups['month']}, Year: ${validDate.groups['year']}`);
    }

    console.log(validDatesArr.join('\n'));
}

solve([
  '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
]);