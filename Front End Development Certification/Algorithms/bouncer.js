function bouncer(arr) {
    return arr.filter(Boolean);
}

var res = bouncer([false, null, 0, NaN, undefined, ""]);

console.log(res);