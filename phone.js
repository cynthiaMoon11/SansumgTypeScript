"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, num) {
        this._tipo = tipo;
        this._numero = num;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (t) {
            this._tipo = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (n) {
            this._numero = n;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
