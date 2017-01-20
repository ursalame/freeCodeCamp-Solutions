function largestElem(arr){
    return Math.max.apply(Math,arr);
}

function largestOfFour(arr) {
    var arrayLength = arr.length;
    var largestElems = [];
    for (var i = 0; i < arrayLength; i++) {
        largestElems.push(largestElem(arr[i]));
    }
    return largestElems;
}

 var res = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 console.log(res);
