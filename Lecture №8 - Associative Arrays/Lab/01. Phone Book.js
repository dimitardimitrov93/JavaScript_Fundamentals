function phoneBook(arrInput) {

    let arr = arrInput.slice();
    let phoneBookAssocArr = {};

    for (const line of arr) {
        let [name, phone] = line.split(' ');

        phoneBookAssocArr[name] = phone;
    }

    // Possible solutions:

    // 1. Convert the associative array into an ordinary array and forEach through its elements:
    // Object.entries(phoneBookAssocArr).forEach(x => {
    //     console.log(`${x[0]} -> ${x[1]}`);
    // });

    // 2. Extract the keys from the associative array and use them to print their values
    // Object.keys(phoneBookAssocArr).forEach(key => {
    //     console.log(`${key} -> ${phoneBookAssocArr[key]}`); 
    // });

    // 3. For-in loop through the associative array and print the key-value pairs(kvp)
    for (const contact in phoneBookAssocArr) {
        console.log(`${contact} -> ${phoneBookAssocArr[contact]}`);   
    }

}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);