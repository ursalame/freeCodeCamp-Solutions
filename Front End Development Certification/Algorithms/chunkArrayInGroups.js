
function chunkArrayInGroups(arr, size) {
    if(size <= 0) return arr;

    var chunks = [];

    for(var i =0; i < arr.length; i+= size){
        chunks.push(arr.slice(i, i+size));
    }

    return chunks;
}

var res = chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(res);