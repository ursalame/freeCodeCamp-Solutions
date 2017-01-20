function diff(arr1, arr2){
    return arr1.filter(function (val){
        return arr2.indexOf(val) < 0;
    });
}

function diffArray(arr1, arr2) {
    return diff(arr1,arr2).concat(diff(arr2, arr1));
}

var res = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(res);