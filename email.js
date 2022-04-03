"use strict";
exports.__esModule = true;
exports.Email = void 0;
var Email = /** @class */ (function () {
    function Email(tipo, email) {
        this._tipo = tipo;
        this._email = email;
    }
    Object.defineProperty(Email.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (t) {
            this._tipo = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    return Email;
}());
exports.Email = Email;
