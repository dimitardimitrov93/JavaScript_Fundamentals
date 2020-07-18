function solve(input) {
    
    let indexToCut = input.length / 2;
    let firstHalf = input.substring(0, indexToCut);
    let secondHalf = input.substring(indexToCut);

    console.log(stringReverser(firstHalf));
    console.log(stringReverser(secondHalf));

    function stringReverser(string) {

        let reversedString = '';
        
        for (let i = string.length - 1; i >= 0; i--) {
            reversedString += string[i];
        }

        return reversedString;
    }
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');