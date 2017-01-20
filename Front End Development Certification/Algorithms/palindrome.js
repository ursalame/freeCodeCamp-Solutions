/**
 * Created by desktop on 2/01/17.
 */
function reverse(str){
    return str.split("").reverse().join("");
}

function palindrome(str) {
    var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    return (cleanStr == reverse(cleanStr));
}

console.log(palindrome("A man, a plan, a canal. Panama"));