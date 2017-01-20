function getLettersRange(str) {
    var start = str.charCodeAt(0);
    var end = str.charCodeAt(str.length - 1);

    return new Array(end - start + 1).fill().map(function (val, index) {
        return String.fromCharCode(start + index);
    });
}

function fearNotLetter(str) {
    var missingLetters = getLettersRange(str).filter(function (val) {
        return str.indexOf(val) < 0;
    }).join("");

    return (missingLetters.length === 0) ? undefined : missingLetters;
}


var res = fearNotLetter("bcd");

console.log(res);
