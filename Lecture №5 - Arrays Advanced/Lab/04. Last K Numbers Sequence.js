function numberSequence(n, k) {

    let arr = [1];
    let currentArr = [];

    let start = 0;
    let end = 0;

    for (let i = 1; i < n; i++) {

        let sum = 0;

        if (i < k) {
            start = 0;
            end = i;
        } else if (i === k) {
            start = i - k;
            end = k;
        } else if (k > i) {
            start = 1;
            end = i;
        } else {
            start = i - k;
            end = i;
        }

        currentArr = arr.slice(start, end);
        sum = currentArr.reduce((x1, x2) => x1 + x2);
        arr.push(sum);
    }

    console.log(arr.join(' '));
}

numberSequence(8, 2);