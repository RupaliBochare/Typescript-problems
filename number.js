"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numStream = (0, rxjs_1.from)(num);
numStream.pipe((0, rxjs_1.filter)(function (item) {
    return item % 2 !== 0;
}), (0, rxjs_1.map)(function (x) { return x * 2; })).subscribe({
    next: function (value) {
        console.log(value);
    }
});
