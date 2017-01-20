function isOdd(num) { return num % 2;}

function sumOdds(arr){
    return arr.reduce(function (a,b) {
        return isOdd(b)? a+b:a;
    },0);
}

function getNextFibsNumber(arr){
    return arr[arr.length-1] + arr[arr.length-2];
}

function sumFibs(num) {
    var arr = [1,1];

    var next = getNextFibsNumber(arr);

    while(next <= num){
        arr.push(next);
        next = getNextFibsNumber(arr);
    }

    return sumOdds(arr);
}
var res = sumFibs(75025);

console.log(res);