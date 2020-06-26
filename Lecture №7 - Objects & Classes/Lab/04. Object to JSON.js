function solution(nameInput, lastNameInput, hairColorInput) {

    let personInfoObj = {
        name: nameInput,
        lastName: lastNameInput,
        hairColor: hairColorInput
    };

    let personInfoJson = JSON.stringify(personInfoObj);

    console.log(personInfoJson);
}

solution(
    'George',
    'Jones',
    'Brown'
);