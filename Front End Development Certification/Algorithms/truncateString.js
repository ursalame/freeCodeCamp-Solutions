function truncateString(str, num) {
    if(num >= str.length){
        return str;
    }

    return ((num > 3)?str.substr(0,num-3):str.substr(0,num)).concat("...");
}

var res = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
console.log(res);