/**
 * Created by desktop on 2/01/17.
 */
function findLongestWord(str) {
    var strArray = str.split(" ");
    var longestWord = 0;

    strArray.forEach(function (word) {
        if(word.length > longestWord){
            longestWord = word.length;
        }
    });

    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));