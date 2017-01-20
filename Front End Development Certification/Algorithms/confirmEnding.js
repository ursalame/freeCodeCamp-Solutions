
function confirmEnding(str, target) {
    return str.substr(str.length-target.length) == target;
}

var res = confirmEnding("Bastian", "n");
console.log(res);
