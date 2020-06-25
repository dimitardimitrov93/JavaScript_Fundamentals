function solution(jsonString) {
    let person = JSON.parse(jsonString);

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }

}

solution('{"name": "George", "age": 40, "town": "Sofia"}');