"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var email_1 = require("./email");
var person_1 = require("./person");
var phone_1 = require("./phone");
var contactos = [];
contactos.push(new person_1.Contacto("Borja", "Diez", 35, "78933264R", "8 de noviembre", "Azul", "masculino", new address_1.Direccion("Calle iturribide", 93, 3, "izq", 48006, "Bilbao", "Bizkaia"), new email_1.Email("personal", "borja@g.com"), new phone_1.Telefono("personal", 6785280), "Esto tambien es una nota"));
contactos.push(new person_1.Contacto("Cynthia", "Escobar", 32, "Y7620943E", "29 de noviembre", "negro", "femenino", new address_1.Direccion("grupo Francisco Llaseras", 7, 1, "izq", 48910, "Sestao", "Bizkaia"), new email_1.Email("personal", "cynthia@g.com"), new phone_1.Telefono("personal", 6552212), "Esto es una nota"));
contactos.push(new person_1.Contacto("Nicolas", "Escobar", 26, "109895456", "19 de junio", "verdeo", "masculino", new address_1.Direccion("grupo Francisco Llaseras", 7, 1, "izq", 48910, "Sestao", "Bizkaia"), new email_1.Email("trabajo", "nicolas@g.com"), new phone_1.Telefono("personal", 688759724), "Esto es una nota"));
for (var i = 0; i < contactos.length; i++) {
    console.log(contactos[i]);
}
var filtroPorDni = contactos.filter(function (x) { return x.DNI == "Y7620943E"; })[0];
var newAddress = new address_1.Direccion("Avenida Siempre viva", 5, 1, "Izq", 48910, "Bilbao", "Bizkaia");
filtroPorDni.direccion.pop();
filtroPorDni.direccion.push(newAddress);
var newEmail = new email_1.Email("trabajo", "mitrabajo@g.com");
filtroPorDni.email.pop();
filtroPorDni.email.push(newEmail);
var newTelefono = new phone_1.Telefono("Emergencias", 6386689);
filtroPorDni.tel.pop();
filtroPorDni.tel.push(newTelefono);
for (var i = 0; i < contactos.length; i++) {
    console.log(contactos[i]);
}
