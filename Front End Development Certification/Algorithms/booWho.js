function booWho(bool) {
    return (typeof(bool) === "boolean");
}

var res = booWho("true");


console.log(res);
