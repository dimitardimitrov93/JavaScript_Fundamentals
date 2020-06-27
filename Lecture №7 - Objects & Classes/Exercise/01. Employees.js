function companyRegister(arrInput) {
    
    let arr = arrInput.slice();
    let employeesList = [];

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
        employeesList.push(currentEmployee);
    }
}

companyRegister([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);