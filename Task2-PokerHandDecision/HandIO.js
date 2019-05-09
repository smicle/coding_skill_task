"use strict";
exports.__esModule = true;
var util_1 = require("../util/util");
var convertSuit = function (n) {
    switch (n) {
        case 3:
            return 'S';
        case 2:
            return 'H';
        case 1:
            return 'D';
        case 0:
            return 'C';
        default:
            return '';
    }
};
var convertNumver = function (n) {
    switch (n) {
        case 1:
            return 'A';
        case 13:
            return 'K';
        case 12:
            return 'Q';
        case 11:
            return 'J';
        default:
            return String(n);
    }
};
var convertCard = function (c) {
    return c.map(function (c) { return ({
        suit: convertSuit(c.suit),
        number: convertNumver(c.number)
    }); });
};
// prettier-ignore
exports.inputHand = function () { return util_1.range(5)
    .map(function (_) { return util_1.input().split(' ').map(function (n) { return Number(n); }); })
    .map(function (c) { return ({
    suit: c[0],
    number: c[1]
}); }); };
exports.outputHand = function (c) {
    return convertCard(c)
        .map(function (c) { return c.suit + ":" + c.number; })
        .join(' ');
};
var s = 3;
var n = 1;
var trump = util_1.range(52).map(function (_) {
    if (n === 14) {
        s--;
        n = 1;
    }
    return {
        suit: s,
        number: n++
    };
});
exports.randHand = function () {
    var hand = util_1.range(5).map(function (_) {
        var n = (Math.random() * trump.length) | 0;
        var c = trump[n];
        trump = trump.filter(function (v) { return v !== trump[n]; });
        return c;
    });
    return hand;
};