function destroyer(arr) {
    var args = [].slice.call(arguments);

    return arr.filter(function (value){
        return (args.indexOf(value) == -1);
    });
}

var res = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(res);