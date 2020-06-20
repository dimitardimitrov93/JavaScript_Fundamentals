function mapDemo(arrayInput) {
    let arr = arrayInput.slice();

    console.log(`Initial array: ${arr.join(' ')}`);

    let mappedArray = arr.map(n => n * 2);

    console.log(`Final array: ${mappedArray.join(' ')}`);
}

mapDemo([2, 4, 8, 16, 32, 64]);