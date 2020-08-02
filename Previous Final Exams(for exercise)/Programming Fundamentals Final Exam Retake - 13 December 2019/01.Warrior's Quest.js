function solve(arrInput) {
    
    let arr = arrInput.slice();
    let skillToDecipher = arr.shift();

    let currentLine = arr.shift();

    while (currentLine !== 'For Azeroth') {

        let tokens = currentLine.split(' ');
        let command = tokens[0];
        let tempSkill = '';

        if (command === 'GladiatorStance') {
            tempSkill = skillToDecipher.toUpperCase();
            skillToDecipher = tempSkill;
            console.log(skillToDecipher);
            
        } else if (command === 'DefensiveStance') {
            tempSkill = skillToDecipher.toLowerCase();
            skillToDecipher = tempSkill;
            console.log(skillToDecipher);
        } else if (command === 'Dispel') {

            let index = Number(tokens[1]);
            let replacementLetter = tokens[2];
            let isValidIndex = false;

            if ((index >= 0) && (index <= (skillToDecipher.length - 1))) {
                isValidIndex = true;
            }

            if (isValidIndex) {
                tempSkill = skillToDecipher.split('');
                tempSkill[index] = replacementLetter;
                skillToDecipher = tempSkill.join('');
                console.log('Success!');
            } else {
                console.log('Dispel too weak.');
            }
        } else if (command === 'Target') {

            let subcommand = tokens[1];
            let substring = tokens[2];

            if (subcommand === 'Change') {
                let secondSubstring = tokens[3];
                tempSkill = skillToDecipher.replace(new RegExp(substring, 'g'), secondSubstring);
                skillToDecipher = tempSkill;
                console.log(skillToDecipher);
            } else if (subcommand === 'Remove') {
                tempSkill = skillToDecipher.replace(new RegExp(substring, 'g'), '');
                skillToDecipher = tempSkill;
                console.log(skillToDecipher);
            } else {
                console.log('Command doesn\'t exist!');
            }
        } else {
            console.log('Command doesn\'t exist!');
        }

        currentLine = arr.shift();
    }
}

solve([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
]);

solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance ',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
]);