function farming(stringInput) {
    
    let keyMaterials = {
        shards: 0,
        motes: 0,
        fragments: 0,
    };

    let junk = {};

    let requiredMaterials = ['shards', 'fragments', 'motes'];

    let arrInput = stringInput.split(' ');
    let flag = false;

    while (arrInput.length > 0) {

        let quantity = Number(arrInput.shift());
        let material = arrInput.shift().toLowerCase();

        if (keyMaterials[material] !== undefined && requiredMaterials.includes(material)) {
            keyMaterials[material] = keyMaterials[material] + quantity;
        } else if (!junk[material]) {
            junk[material] = quantity;
        } else if (junk[material]) {
            junk[material] = junk[material] + quantity;
        }

        for (const material in keyMaterials) {

            if (keyMaterials[material] >= 250) {
                keyMaterials[material] = keyMaterials[material] - 250;

                if (material === 'shards') {
                    console.log('Shadowmourne obtained!');
                } else if (material === 'motes') {
                    console.log('Dragonwrath obtained!');
                } else {
                    console.log('Valanyr obtained!');
                }

                flag = true;
                break;
            }
        }

        if (flag) {
            break;
        }
    }

    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => {

        if (b[1] !== a[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    sortedKeyMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });

    sortedJunk.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
}

farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');