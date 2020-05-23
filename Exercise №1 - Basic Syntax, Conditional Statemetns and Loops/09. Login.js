function solve(input) {

    let username = input.shift();
    let correctPassword = "";
    let incorrectAttemptsCounter = 0;

    for (let i = (username.length - 1); i >= 0; i--) {
        correctPassword += username[i];
    }

    let passwordAttempt = input.shift();

    while (passwordAttempt != correctPassword) {
        incorrectAttemptsCounter++;

        if (incorrectAttemptsCounter >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log('Incorrect password. Try again.');
        
        passwordAttempt = input.shift();
    }

    if (passwordAttempt === correctPassword) {
        console.log(`User ${username} logged in.`);
    }

}

solve(['Acer','login','go','let me in','recA']);