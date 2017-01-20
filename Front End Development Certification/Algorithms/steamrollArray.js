function steamrollArray(arr) {
    return arr.reduce(function (acc, current) {
        return acc.concat(Array.isArray(current) ? steamrollArray(current) : current);
    }, []);
}

var res = steamrollArray([1, [2], [3, [[4]]]]);

console.log(res);