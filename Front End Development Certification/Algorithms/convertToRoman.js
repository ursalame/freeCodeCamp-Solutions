function convertToRoman(num) {
    var table = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1};
    var roman = "";

    for(var romanKey in table){
        var numVal = table[romanKey];

        while(num >= numVal){
            num -= numVal;
            roman += romanKey;
        }
    }
    return roman;
}

var res = convertToRoman(36);
console.log(res);