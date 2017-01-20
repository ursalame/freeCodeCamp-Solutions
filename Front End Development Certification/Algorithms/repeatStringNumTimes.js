
function repeatStringNumTimes(str, num) {
    return (num >= 0)?new Array(num+1).join(str):"";
}

var res = repeatStringNumTimes("abc", 5);
console.log(res);