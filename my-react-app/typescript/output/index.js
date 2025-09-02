var num = 1;
var str = "1";
var bool = true;
var u = undefined;
var n = null;
var letnumArray = [1, 2, 3, 4, 5];
var person = {
    name: "alice",
    age: 18,
};
var person2 = {
    name: "adi",
    age: 18,
    direction: "north"
};
var EDirection;
(function (EDirection) {
    EDirection["North"] = "north";
    EDirection["South"] = "south";
    EDirection["East"] = "east";
    EDirection["West"] = "west";
})(EDirection || (EDirection = {}));
var direction = EDirection.North;
console.log(direction);
function add(x, y) {
    return x + y;
}
function foo(data) {
    if (typeof data === "number") {
        data.toFixed(2);
    }
    else if (typeof data === "function") {
        return data();
    }
}
var add2 = function (x, y) { return x + y; };
var add3 = function (x, y) { return x + y; };
var person3 = {
    name: "asd",
    age: 12,
    contact: "12344444"
};
function toNumberArray(x, y) {
    return [x, y];
}
function toStringArray(x, y) {
    return [x, y];
}
function toArray(x, y) {
    return [x, y];
}
toArray(2, 3);
toArray(true, false);
var arr = [1, "aa", true];
arr[1];
console.log("hello");
//# sourceMappingURL=index.js.map