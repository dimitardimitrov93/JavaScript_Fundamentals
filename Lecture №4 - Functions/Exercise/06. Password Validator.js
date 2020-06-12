function passwordValidator(passwordAttempt) {
    function lengthCheker(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function charactersChecker(password) {
        let letterNumber = /^[0-9a-zA-Z]+$/;
        let charValidation = false;
        for (let i = 0; i < password.length; i++) {
            if (((password[i]).match(letterNumber))) {
                charValidation = true;
            } else {
                charValidation = false;
                break;
            }
        }

        if (charValidation) {
            return true;
        } else {
            return false;
        }
    }

    function digitsChecker(password) {
        let digitsCounter = 0;
        
        for (let j = 0; j < password.length; j++) {
            let currentChar = password[j];
            let charConvertedToInt = currentChar.charCodeAt();

            if (charConvertedToInt >= 48 && charConvertedToInt <= 57) {
                digitsCounter++;
                if (digitsCounter >= 2) {
                    break;
                }
            } else {
                continue;
            }
        }

        if (digitsCounter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    const lengthValidation = lengthCheker(passwordAttempt);
    const charactersValidation = charactersChecker(passwordAttempt);
    const digitsCountValidation = digitsChecker(passwordAttempt);

    if (lengthValidation && charactersValidation && digitsCountValidation) {
        console.log('Password is valid');
    } else {
        if (lengthValidation === false) {
            console.log('Password must be between 6 and 10 characters');
        } 
        
        if (charactersValidation === false) {
            console.log('Password must consist only of letters and digits');   
        } 
        
        if (digitsCountValidation === false) {
            console.log('Password must have at least 2 digits');
        }
    }
}

passwordValidator('Pa$s$s');