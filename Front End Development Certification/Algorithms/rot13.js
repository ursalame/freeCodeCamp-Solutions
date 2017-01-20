function rot13(str) {
    return str.replace(/[A-Za-z]/g, function (c) {
        var shift = ( c <= "M" ? 13 : -13 );
        return String.fromCharCode(c.charCodeAt(0) + shift);
    });
}

var res = rot13("SERR PBQR PNZC");
console.log(res);