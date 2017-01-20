function spinalCase(str) {
    return str
        .replace(/(?!^)(( |_)+[a-z]|( |_)*[A-Z])/g, function (match, offset) {
            return ((offset ? '-' : '') + match).replace(/( |_)/g,"");
        })
        .toLowerCase();
}

var res = spinalCase('Teletubbies say Eh-oh');

console.log(res);