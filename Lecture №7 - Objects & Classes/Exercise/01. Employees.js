function solution(arrInput) {
    
    let arr = arrInput.slice();

    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }

        printInfo() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    for (const element of arr) {
        let currentEmployee = new Employee(element, (element.length));
        currentEmployee.printInfo();
    }
}

solution([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);