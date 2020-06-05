function solve(firstArray, secondArray) {

    for (firstArrayElement of firstArray) {
        for (secondArrayElement of secondArray) {
            if (firstArrayElement === secondArrayElement) {
                console.log(firstArrayElement);
            }
        }
    }
}

solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
