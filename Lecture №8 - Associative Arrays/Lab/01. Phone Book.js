function phoneBook(arrInput) {

    let arr = arrInput.slice().map(x => x.split(' '));
    let phoneBookObj = {};

    arr.forEach(x => 
       phoneBookObj[x[0]] = x[1]
    );

    for (const contact in phoneBookObj) {
        console.log(`${contact} -> ${phoneBookObj[contact]}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);