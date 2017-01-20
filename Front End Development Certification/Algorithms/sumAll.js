function range(start, end){
    if(start > end){
        return range(end,start);
    }

    return new Array(end-start+1).fill().map(function(val, index, arr){
        return start +index;
    });
}

function sumAll(arr) {
    var rangeArr = range(arr[0], arr[1]);
    return rangeArr.reduce(function (a, b) {
        return a + b;
    }, 0);
}
var res = sumAll([4, 1]);

console.log(res);