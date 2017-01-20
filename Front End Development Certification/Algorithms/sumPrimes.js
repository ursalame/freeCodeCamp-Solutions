function isPrime(num) {
    var sqrt = Math.sqrt(num);
    for(var i = 2; i<=sqrt; i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}

function sumPrimes(num) {
    var arr = new Array(num-1).fill().map(function (val, index) {
        return index+2;
    });

    return arr.reduce(function (a, b) {
        return isPrime(b) ? a + b : a;
    }, 0);
}

var res = sumPrimes(977);

console.log(res);