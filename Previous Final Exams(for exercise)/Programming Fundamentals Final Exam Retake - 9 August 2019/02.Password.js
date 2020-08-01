function solve(arrInput) {
    
    let arr = arrInput.slice();
    let numberOfInputs = Number(arr.shift());

    let validationPattern = /(^.+)[>](?<pass>([0-9]{3}\|)([a-z]{3}\|)([A-Z]{3}\|)([^><]{3}))[<]\1$/;

    for (let i = 0; i < numberOfInputs; i++) {

        let currentInput = arr[i];
        let isValidPassword = validationPattern.test(currentInput);
        let password = '';

        if (isValidPassword) {
            let unmodifiedString = validationPattern.exec(currentInput);
            password = unmodifiedString[2].split('|').join('');
            console.log(`Password: ${password}`);
        } else {
            console.log('Try another password!');
        }
    }
}

// solve([
//     '3',
//     '##>00|no|NO|!!!?<###',
//     '##>123|yes|YES|!!!<##',
//     '$$<111|noo|NOPE|<<>$$'
// ]);

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
]);