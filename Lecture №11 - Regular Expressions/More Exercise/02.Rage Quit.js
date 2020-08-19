function solve(arrInput) {
 
    let arr = arrInput.slice();
    let str = arr[0];

    let regEx = /(?<currentSymbols>[^\d]+)(?<count>[0-9]+)/g;
    let uniqueSymbols = [];
    
    let matches = null;
    let rageMessage = '';

    while ((matches = regEx.exec(str))) {

        let rageSymbols = matches.groups['currentSymbols'].toUpperCase();
        let countOfSymbols = Number(matches.groups['count']);
        
        for (let i = 0; i < countOfSymbols; i++) {
            rageMessage += rageSymbols;
        }
        
        if (countOfSymbols > 0) {
            let symbolsToPush = rageSymbols.split('');
            symbolsToPush.forEach(symbol => {
                if (!uniqueSymbols.includes(symbol)) {
                    uniqueSymbols.push(symbol);
                }
            });
        }
    }

    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
    console.log(rageMessage);
}

solve([ 'aSd2&5s@1' ]);
solve(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'])
solve([ 'a3' ]);
