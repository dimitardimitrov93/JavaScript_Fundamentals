function solution(nameInput, areaInput, populationInput, countryInput, postCodeInput) {
    let cityInfo = {
        name: nameInput,
        area: areaInput,
        population: populationInput,
        country: countryInput,
        postCode: postCodeInput
    };

    for (const key in cityInfo) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}

solution('Sofia', '492', '1238438', 'Bulgaria', '1000');