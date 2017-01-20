function myReplace(str, before, after) {
    return str.split(" ").map(function(word){
        if(word == before){
            if(word.charAt(0) == word.charAt(0).toUpperCase()){
                return after.charAt(0).toUpperCase() + after.slice(1);
            }
            return after;
        }
        return word;
    }).join(" ");
}

var res = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

console.log(res);
