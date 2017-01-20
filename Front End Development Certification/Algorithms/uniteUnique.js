function uniteUnique(arr) {
    for (var i = 0; i < arguments.length; i++) {
        arr = arr.concat(arguments[i].filter(function (elem) {
            return arr.indexOf(elem) === -1;
        }));
    }

    return arr;
}
var res = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(res);
