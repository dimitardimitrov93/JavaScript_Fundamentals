function solve(arrInput) {
    
    let arr = arrInput.slice();
    let currentLine = arr.shift();

    let supplies = {};

    while (currentLine !== 'END') {

        let tokens = currentLine.split('->');
        let command = tokens.shift();
        let store = tokens.shift();

        if (command === 'Add') {

            let items = tokens[0].split(',');

            if (!supplies.hasOwnProperty(store)) {
                supplies[store] = items;
            } else {
                let newItems = supplies[store].concat(items);
                supplies[store] = newItems;
            }
        } else if (command === 'Remove') {

            if (supplies.hasOwnProperty(store)) {
                delete supplies[store];
            }             
        }

        currentLine = arr.shift();
    }
    
    let unsortedSupplies = Array.from(Object.entries(supplies));
    let sortedSupplies = unsortedSupplies.sort((a, b) => {
        if (a[1].length !== b[1].length) {
            return b[1].length - a[1].length;
        } else {
            return b[0].localeCompare(a[0]);
        }
    });

    console.log('Stores list:');
    
    for (const store of sortedSupplies) {
        console.log(store[0]);
        store[1].forEach(supply => {
            console.log(`<<${supply}>>`);
        });
    }
}

solve([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
]);

solve([
    'Add->Peak->Waterproof,Umbrella',
    'Add->Groceries->Water,Juice,Food',
    'Add->Peak->Tent',
    'Add->Peak->Sleeping-Bag',
    'Add->Peak->Jacket',
    'Add->Groceries->Lighter',
    'Remove->Groceries',
    'Remove->Store',
    'END'
]);