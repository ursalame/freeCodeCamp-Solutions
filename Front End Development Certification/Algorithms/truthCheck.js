function truthCheck(collection, pre) {
    return collection.filter(function (val) {
        return Boolean(val[pre]) == false;
    }).length == 0;
}

var res = truthCheck([
    {
        "user": "Tinky-Winky",
        "sex": "male",
        "age": 0
    },
    {
        "user": "Dipsy",
        "sex": "male",
        "age": 3
    },
    {
        "user": "Laa-Laa",
        "sex": "female",
        "age": 5
    },
    {
        "user": "Po",
        "sex": "female",
        "age": 4
    }
    ], "age");

console.log(res);