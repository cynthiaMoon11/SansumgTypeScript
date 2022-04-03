"use strict";
exports.__esModule = true;
exports.Contacto = void 0;
var address_1 = require("./address");
var email_1 = require("./email");
var phone_1 = require("./phone");
var telefono1 = new phone_1.Telefono('personal', 688759728);
var email1 = new email_1.Email('personal', 'cynthia@g.com');
var address1 = new address_1.Direccion('grupo francisco llaseras', 7, 1, 'izq', 48910, 'Sestao', 'Bizkaia');
var Contacto = /** @class */ (function () {
    function Contacto(nombre, apellido, edad, DNI, cumpleaños, colorFav, sexo, direccion, email, tel, notas) {
        this._direccion = [];
        this._email = [];
        this._tel = [];
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleaños = cumpleaños;
        this._colorFav = colorFav;
        this._sexo = sexo;
        this._direccion.push(direccion);
        this._email.push(email);
        this._tel.push(tel);
        this._notas = notas;
    }
    Object.defineProperty(Contacto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (apellido) {
            this._apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (DNI) {
            this._DNI = DNI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleaños;
        },
        set: function (cumpleaños) {
            this._cumpleaños = cumpleaños;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "colorFav", {
        get: function () {
            return this._colorFav;
        },
        set: function (colorFav) {
            this._colorFav = colorFav;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (direccion) {
            this._direccion = direccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "tel", {
        get: function () {
            return this._tel;
        },
        set: function (tel) {
            this._tel = tel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (notas) {
            this._notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    return Contacto;
}());
exports.Contacto = Contacto;
/* export let contacto1: any = new Contacto('cynthia', 'escobar', 32, 'Y7620943', '29 de noviembre', 'negro', 'femenino', address1, email1, telefono1, 'esto es una prueba'); */
var contactoPrueba = new Contacto("Borja", "Diez", 35, "78933264R", "8 de noviembre", "Azul", "masculino", new address_1.Direccion("Calle iturribide", 93, 3, "izq", 48006, "Bilbao", "Bizkaia"), new email_1.Email("personal", "borja@g.com"), new phone_1.Telefono("personal", 6785280), "Esto tambien es una nota");
