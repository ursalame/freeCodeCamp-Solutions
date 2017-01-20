function getMissingElement(element){
    var pairs = {"A":"T", "T":"A", "G":"C","C":"G"};
    return pairs.hasOwnProperty(element)?pairs[element]:null;
}

function pairElement(str) {
    return str.split("").map(function (c) {
       return [c,getMissingElement(c)];
    });
}

var res = pairElement("GCG");

console.log(res);
