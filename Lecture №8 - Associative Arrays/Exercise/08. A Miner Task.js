function mining(arrInput) {

    let arr = arrInput.slice();
    let resourcesQuantities = {};

    while (arr.length > 0) {

        let resource = arr.shift();
        let quantity = Number(arr.shift());

        if (!resourcesQuantities[resource]) {
            resourcesQuantities[resource] = quantity;
        } else {
            resourcesQuantities[resource] = resourcesQuantities[resource] + quantity;
        }
    }

    let resources = Object.entries(resourcesQuantities);
    resources.forEach(resource => {
        
        let resourceName = resource[0];
        let resourcesQuantity = resource[1];

        console.log(`${resourceName} -> ${resourcesQuantity}`);    
    });
}

mining([
    "gold", 
    "155", 
    "silver", 
    "10", 
    "copper", 
    "17", 
    "gold", 
    "15"
]);

mining([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])