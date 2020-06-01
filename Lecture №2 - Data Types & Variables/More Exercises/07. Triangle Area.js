function solve(sideA, sideB, sideC) {
    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let areaOfTriangle = Math.sqrt(semiPerimeter * ((semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC)));

    console.log(areaOfTriangle);
}

solve(2, 3.5, 4);