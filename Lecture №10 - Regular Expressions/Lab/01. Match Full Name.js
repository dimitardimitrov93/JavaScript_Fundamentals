function solve(arrInput) {

    let regExPattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let arr = arrInput.slice();

    let names = arr.shift();
    let validNames = [];

    while ((validName = regExPattern.exec(names)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));
}

solve([
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov",
]);
