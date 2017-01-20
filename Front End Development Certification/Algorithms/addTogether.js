function addTogether() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length === 0 || !isNumber(args[0])) return undefined;

    var a = args[0];

    if (args.length > 1) {
        var b = args[1];

        if (!isNumber(a) || !isNumber(b)) {
            return undefined;
        }

        return a + b;
    }

    return function (c) {
        return addTogether(a, c);
    };
}

function isNumber(n) {
    return typeof(n) === "number";
}

var res = addTogether("http://bit.ly/IqT6zt");

console.log(res);

