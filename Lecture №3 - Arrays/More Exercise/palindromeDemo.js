function solution(arrInput) {

    let arr = arrInput.slice();
    
    let currentSequence = '';
    let reversedSequence = '';

    let longestPalindrome = '';
    let previousPalindromeLength = 0;

    let currentPalindrome = '';

    let secondLoopStart = 0;

    for (let i = 0; i < arr.length; i++) {

        let startIndex = 0;
        let endIndex = 0;

        if (arr.length > 1) {
            secondLoopStart = (i + 1);
        } else {
            secondLoopStart = 0;
        }

        for (let j = secondLoopStart; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                startIndex = [i];
                endIndex = (j + 1);

                currentSequence = arr.slice(startIndex, endIndex).join('');


                for (let k = currentSequence.length - 1; k >= 0; k--) {
                    reversedSequence += currentSequence[k];
                }

                if (reversedSequence === currentSequence) {
                    currentPalindrome = currentSequence;

                    if (currentPalindrome.length > previousPalindromeLength) {
                        longestPalindrome = currentPalindrome;
                        previousPalindromeLength = longestPalindrome.length;
                        reversedSequence = '';
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    }

    console.log(longestPalindrome);
    console.log(previousPalindromeLength);
}

solution(['a', 'h', 'c', 'h', 'x', 'x', 'u']);
solution(['a', 'b', 'c', 'c', 'd']);
solution(['a', 'b', 'b', 'a']);
solution(['h', 'h', 'x', 'x', 'x', 'h']);
solution(['a']);