function loadingBar(currentProgress) {

    let progressCounter = currentProgress / 10;
    let percentSymbols = '';
    let dotSymbols = ''

    for (let i = 0; i < progressCounter; i++) {
        percentSymbols += '%';
    }

    for (let j = progressCounter; j < 10; j++) {
        dotSymbols += '.';
    }

    let printLine = `${currentProgress}% [${percentSymbols}${dotSymbols}]`;

    if (currentProgress < 100) {
        console.log(printLine);
        console.log('Still loading...');
    } else {
        printLine = `[${percentSymbols}${dotSymbols}]`;
        console.log('100% Complete!');
        console.log(printLine);
    }
}

loadingBar(100);