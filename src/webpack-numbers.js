// это сбилженный скрипт через build, просто скопировал сюда из диста чтобы заиспользовать в модуле
!function (e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r(require("lodash")) : "function" == typeof define && define.amd ? define(["lodash"], r) : "object" == typeof exports ? exports.webpackNumbers = r(require("lodash")) : e.webpackNumbers = r(e._)
}(window, (function (e) {
    return function (e) {
        var r = {};

        function n(o) {
            if (r[o]) return r[o].exports;
            var t = r[o] = {i: o, l: !1, exports: {}};
            return e[o].call(t.exports, t, t.exports, n), t.l = !0, t.exports
        }

        return n.m = e, n.c = r, n.d = function (e, r, o) {
            n.o(e, r) || Object.defineProperty(e, r, {enumerable: !0, get: o})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, r) {
            if (1 & r && (e = n(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e) for (var t in e) n.d(o, t, function (r) {
                return e[r]
            }.bind(null, t));
            return o
        }, n.n = function (e) {
            var r = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(r, "a", r), r
        }, n.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, n.p = "", n(n.s = 2)
    }([function (r, n) {
        r.exports = e
    }, function (e) {
        e.exports = JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]')
    }, function (e, r, n) {
        "use strict";
        n.r(r), n.d(r, "numToWord", (function () {
            return i
        })), n.d(r, "wordToNum", (function () {
            return f
        }));
        var o = n(0), t = n.n(o), u = n(1);

        function i(e) {
            return t.a.reduce(u, (r, n) => n.num === e ? n.word : r, "")
        }

        function f(e) {
            return t.a.reduce(u, (r, n) => n.word === e && e.toLowerCase() ? n.num : r, -1)
        }
    }])
}));
