function slasher(arr, howMany) {
    if(howMany <= 0) return arr;
    if(howMany > arr.length) return [];

    return arr.slice((arr.length - howMany)*-1);
}

var res = slasher([1, 2, 3], 4);

console.log(res);