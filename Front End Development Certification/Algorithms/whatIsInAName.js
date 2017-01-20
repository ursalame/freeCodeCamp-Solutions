function hasAllProperties(element, properties) {
    for (var i = 0; i < properties.length; i++) {
        if (element.hasOwnProperty(properties[i]) === false) {
            return false;
        }
    }
    return true;
}

function allPropertiesMatch(element, source) {
    var keys = Object.keys(source);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (element.hasOwnProperty(key) === false || element[key] !== source[key]) {
            return false;
        }
    }
    return true;
}

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    for (var j = 0; j < collection.length; j++) {
        var element = collection[j];

        if (allPropertiesMatch(element, source)) {
            arr.push(element);
        }
    }

    // Only change code above this line
    return arr;
}

var res = whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2});

console.log(res);