function solve(arrInput) {
    
    let arr = arrInput.slice();
    let mailValidationRegEx = /(?:^| )([a-z][a-z0-9\-\._]+@[a-z0-9\-]+(\.[a-z0-9\-]+){1,})/g;

    let currentLine = arr.shift();

    let validMails = currentLine.match(mailValidationRegEx);

    if (validMails !== null) {

        for (const mail of validMails) {
            console.log(mail.trim());
        }
    }
}

solve([ 'Please contact us at: support@github.com.', 'end' ]);
solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end']);
solve(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']);