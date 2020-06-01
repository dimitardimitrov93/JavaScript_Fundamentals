function solve(coneRadius, coneHeight) {
    
    let slantHeight = ((Math.pow(coneRadius, 2)) + (Math.pow(coneHeight, 2)));
    slantHeight = Math.sqrt(slantHeight);

    let surfaceArea = Math.PI * (Math.pow(coneRadius, 2)) + Math.PI * coneRadius * slantHeight;
    let volume = Math.PI * (Math.pow(coneRadius, 2)) * coneHeight / 3;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

solve(3, 5);