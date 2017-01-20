String.prototype.startWithVowel = function () {
    return this.charAt(0).toLowerCase().isVowel();
};

String.prototype.isVowel = function () {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(this.toLowerCase()) != -1;
};

function getFirstVowelIndex(str){
    for(var i =0; i<str.length; i++){
        if(str.charAt(i).isVowel()){
            return i;
        }
    }
    return -1;
}

function translatePigLatin(str) {
    if (str.startWithVowel()) {
        return str + "way";
    }

    var sliceIndex = getFirstVowelIndex(str);

    return str.slice(sliceIndex) + str.slice(0, sliceIndex) + "ay";
}


var res = translatePigLatin("algorithm");

console.log(res);
