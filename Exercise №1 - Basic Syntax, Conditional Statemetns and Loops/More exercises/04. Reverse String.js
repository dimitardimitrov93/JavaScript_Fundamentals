function solve(name) {

    let nameReversed = "";

    for (let i = name.length - 1; i >= 0; i--) {
        nameReversed += name[i];
    }

    console.log(nameReversed);
}

solve('Hello');