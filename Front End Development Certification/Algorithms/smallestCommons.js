function getRange(min, max) {
    if (max < min) {
        return getRange(max, min);
    }

    return new Array(max - min + 1).fill().map(function (val, index) {
        return min + index;
    });
}

function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
    var range = getRange(arr[0], arr[1]);

    var smallest = arr[0] < arr[1] ? arr[0] : arr[1];

    for (var i = 0; i < range.length; i++) {
        smallest = lcm(smallest, range[i]);
    }

    return smallest;
}

var res = smallestCommons([1, 5]);


console.log(res);