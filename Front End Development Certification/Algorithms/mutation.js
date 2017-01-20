function mutation(arr) {
    if (arr.length != 2) return false;

    var needles = arr[1].toLowerCase().split("");
    var word = arr[0].toLowerCase();

    for (var i = 0; i < needles.length; i++) {
        if (word.indexOf(needles[i]) === -1) {
            return false;
        }
    }

    return true;
}

var res = mutation(["hello", "hey"]);

console.log(res);