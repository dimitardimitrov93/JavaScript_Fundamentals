function solve(baseInput, incrementInput) {
    
    let base = Number(baseInput);
    let increment = Number(incrementInput);

    let stepSideSize = base;

    let totalStoneRequired = 0;
    let totalMarbleRequired = 0;
    let totalLapisLazuliRequired = 0;
    let totalGoldRequired = 0;

    let totalPyramidHeight = 0;
    let counter = 1;

    while (stepSideSize > 2) {
        totalStoneRequired += (((stepSideSize * stepSideSize) - ((stepSideSize - 1) * 4)) * increment);

        if (counter == 5) {
            totalLapisLazuliRequired += (((stepSideSize - 1) * 4) * increment);
            counter = 0;
        } else {
            totalMarbleRequired += (((stepSideSize - 1) * 4) * increment);
        }

        counter++;
        totalPyramidHeight += increment;

        if (base % 2 == 0) {      
            if (stepSideSize > 4) {
                stepSideSize -= 2;
            } else {
                break;
            }
        } else {
            if (stepSideSize >= 3) {
                stepSideSize -= 2;
            } else {
                break;
            }
        }
    }

    totalPyramidHeight += increment;

    totalStoneRequired = Math.ceil(totalStoneRequired);
    totalMarbleRequired = Math.ceil(totalMarbleRequired);
    totalLapisLazuliRequired = Math.ceil(totalLapisLazuliRequired);
    totalGoldRequired = Math.ceil(stepSideSize * increment);
    totalPyramidHeight = Math.floor(totalPyramidHeight);

    console.log(`Stone required: ${totalStoneRequired}`);
    console.log(`Marble required: ${totalMarbleRequired}`);
    console.log(`Lapis Lazuli required: ${totalLapisLazuliRequired}`);
    console.log(`Gold required: ${totalGoldRequired}`);
    console.log(`Final pyramid height: ${totalPyramidHeight}`);
}

solve(12, 1);