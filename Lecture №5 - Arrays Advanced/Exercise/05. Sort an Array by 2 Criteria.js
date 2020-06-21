function arraySorter(arrayInput) {
    arr = arrayInput.slice();

    let sortedArray = arr.sort(function(a, b) { 

        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    for (const element of sortedArray) {
        console.log(element);
    }
}

arraySorter(["Isacc", "Theodor", "Jack", "Harrison", "George"]);