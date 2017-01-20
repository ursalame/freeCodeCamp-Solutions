function dropElements(arr, func) {
    if(arr.length == 0 || func(arr[0])){
        return arr;
    }

    return dropElements(arr.slice(1),func);
}

var res = dropElements([0, 1, 0, 1], function(n) {return n === 1;});

console.log(res);