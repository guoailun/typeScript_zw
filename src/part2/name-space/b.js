/// <reference path = 'a.ts' />
var Shape;
(function (Shape) {
    function square(r) {
        return r * r;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(2));
console.log(Shape.square(2));
