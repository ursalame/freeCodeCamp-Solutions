function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }

    return arr.length;
}

var res = getIndexToIns([5, 3, 20, 3], 5);

console.log(res);