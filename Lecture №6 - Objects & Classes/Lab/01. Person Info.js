function solution(firstNameInput, lastNameInput, ageInput) {
    let personInfo = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        age: ageInput
    };

    for (const key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`);
    }
}

solution('Peter', 'Pan', '20');