function solve(arrInput) {
    
    let arr = arrInput.slice();

    let stringToManipulate = arr.shift();
    let pattern = arr.shift();

    let matches = matchFinder(stringToManipulate, pattern);

    while ((pattern.length > 0) && (matches > 1)) {

        stringToManipulate = shaker(stringToManipulate, pattern);
        console.log('Shaked it.');

        pattern = patternUpdater(pattern);
        matches = matchFinder(stringToManipulate, pattern);
    }

    console.log('No shake.');
    console.log(stringToManipulate);

    function matchFinder(string, pattern) {

        let currentString = string;
        let matches = 0;

        while (currentString.includes(pattern)) {
            matches++;

            if (matches > 1) {
                break;
            }
            currentString = currentString.replace(pattern, (''));
        }

        return matches;
    } 

    function shaker(string, pattern) {

        let currentString = string.replace(pattern, '');
        let firstHalf = currentString.slice(0, currentString.lastIndexOf(pattern));
        let secondHalf = currentString.slice(currentString.lastIndexOf(pattern) + pattern.length);

        let shakenString = firstHalf + secondHalf;

        return shakenString;
    }

    function patternUpdater(pattern) {
        
        let indexToRemove = Math.floor(pattern.length / 2);
        let charToRemove = pattern[indexToRemove];
        pattern = pattern.replace(charToRemove, '');

        return pattern;
    }
}

// solve([ 'astalavista baby', 'sta', '' ]);
solve([ '##mtm!!mm.mm*mtm.#', 'mtm', '' ]);