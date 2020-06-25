function distinctArray(arrayInput) {
    
    let arr = arrayInput.slice();
    
    // let duplicateFinder = arr.filter((element, index) => arr.indexOf(element) === index);

    let finalArray = duplicateFinder2(arr);
    console.log(finalArray.join(' '));

    function duplicateFinder2(array) {

        let arrayLength = array.length;
        let currentArray = array.slice();
        let arrayToCheck = [];

        for (let i = 0; i < arrayLength; i++) {
            previousElement = array[i];
            arrayToCheck = array.slice(i + 1);
            
            if (arrayToCheck.includes(previousElement)) {
                for (let j = (i + 1); j < currentArray.length; j++) {
                    let currentElement = array[j];
    
                    if (previousElement === currentElement) {
                        currentArray.splice(j, 1);
                        break;
                    } else {
                        continue;
                    }
                }
            } else {
                continue;
            }
        }

        return currentArray;
    }

    // console.log(duplicateFinder.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);