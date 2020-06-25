function demo() {
    let person = {};
    person.name = 'Dimitar';
    person.age = 26;
    person.hairColor = 'Black';
    person.greeting = function(name) {
        return `Hello, ${name}!`;
    };
    person.eyeColor = 'Brown';

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

demo();