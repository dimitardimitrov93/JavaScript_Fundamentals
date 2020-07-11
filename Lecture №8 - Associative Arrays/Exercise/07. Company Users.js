function solve(arrInput) {
    
    let arr = arrInput.slice();
    let companyEmployees = {};

    arr.forEach(element => {

        let currentInfo = element.split(' -> ');
        let currentCompanyName = currentInfo[0];
        let currentEmployeeId = currentInfo[1];
        
        if (!companyEmployees[currentCompanyName]) {
            companyEmployees[currentCompanyName] = [currentEmployeeId];
        } else if (companyEmployees[currentCompanyName] && !companyEmployees[currentCompanyName].includes(currentEmployeeId)) {
            companyEmployees[currentCompanyName].push(currentEmployeeId);
        }
    });

    let sortedCompanies = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < sortedCompanies.length; i++) {

        console.log(sortedCompanies[i][0]);
        
        for (let j = 0; j < sortedCompanies[i][1].length; j++) {
            console.log(`-- ${sortedCompanies[i][1][j]}`);
        }
    }
}

// solve([
//   "SoftUni -> AA12345",
//   "SoftUni -> BB12345",
//   "Microsoft -> CC12345",
//   "HP -> BB12345",
// ]);

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);
