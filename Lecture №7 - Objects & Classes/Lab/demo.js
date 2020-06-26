function demo() {

    class Person {

        // keys/values - valid for all instances of this class
        name = '';
        age = '';

        constructor(name, age, makesound) {
            // keys/values assigned dynamically for each instance of the class

            this.name = name;
            this.age = age;

            this.greeting = function() {
                return `${this.name} says hi.`;
            }
        }
    }

    let firstPerson = new Person('Dimitar', '26');
    let secondPerson = new Person('Rengiya', '31');

    console.log(firstPerson);
    console.log(secondPerson.greeting());
}

demo();