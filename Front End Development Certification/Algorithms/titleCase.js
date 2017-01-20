/**
 * Created by desktop on 2/01/17.
 */
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function titleCase(str) {
    var lowerStr = str.toLowerCase();

    var strArray = lowerStr.split(" ");
    var capitalisedArray = [];

    for (var i = 0, len = strArray.length; i < len; i++) {
        capitalisedArray.push(strArray[i].capitalizeFirstLetter());
    }

    return capitalisedArray.join(" ");
}

console.log(titleCase("I'm a little tea pot"));