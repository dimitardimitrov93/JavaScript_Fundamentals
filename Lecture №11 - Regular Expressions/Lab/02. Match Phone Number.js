function solve(arrInput) {

  let arr = arrInput.slice();
  let unvalidatedNumbers = arr.shift();

  let regExpPattern = /\+359+((\s{1})|([-]))[2]\1\d{3}\1\d{4}\b/g;
  let validNumber;
  let validNumbersArr = [];
    
  while ((validNumber = regExpPattern.exec(unvalidatedNumbers)) !== null) {
      validNumbersArr.push(validNumber[0]);
  }

  console.log(validNumbersArr.join(', '));
}

solve([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
