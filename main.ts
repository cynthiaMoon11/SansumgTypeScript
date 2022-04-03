import { Direccion } from "./address";
import { Email } from "./email";
import { Contacto } from "./person";
import { Telefono } from "./phone";


let contactos: Contacto[] = [];

contactos.push(new Contacto(

    "Borja",
    "Diez",
    35,
    "78933264R",
    "8 de noviembre",
    "Azul",
    "masculino",
    new Direccion(
        "Calle iturribide",
        93,
        3,
        "izq",
        48006,
        "Bilbao",
        "Bizkaia"
    ),
    new Email(
        "personal",
        "borja@g.com"
    ),
    new Telefono(
        "personal",
        6785280
    ),
    "Esto tambien es una nota"
)
)

contactos.push(new Contacto(
    "Cynthia",
    "Escobar",
    32,
    "Y7620943E",
    "29 de noviembre",
    "negro",
    "femenino",
    new Direccion(
        "grupo Francisco Llaseras",
        7,
        1,
        "izq",
        48910,
        "Sestao",
        "Bizkaia"
    ),
    new Email(
        "personal",
        "cynthia@g.com"
    ),
    new Telefono(
        "personal",
        6552212
    ),
    "Esto es una nota"
)
)


contactos.push(new Contacto(
    "Nicolas",
    "Escobar",
    26,
    "109895456",
    "19 de junio",
    "verdeo",
    "masculino",
    new Direccion(
        "grupo Francisco Llaseras",
        7,
        1,
        "izq",
        48910,
        "Sestao",
        "Bizkaia"
    ),
    new Email(
        "trabajo",
        "nicolas@g.com"
    ),
    new Telefono(
        "personal",
        688759724
    ),
    "Esto es una nota"
)
);


for(let i = 0; i < contactos.length; i++) {
    console.log(contactos[i]);
}


let filtroPorDni: Contacto = contactos.filter(x => x.DNI == "Y7620943E")[0];
let newAddress: Direccion = new Direccion("Avenida Siempre viva",5,1,"Izq",48910,"Bilbao", "Bizkaia",);

filtroPorDni.direccion.pop();
filtroPorDni.direccion.push(newAddress);

let newEmail: Email = new Email("trabajo","mitrabajo@g.com");

filtroPorDni.email.pop();
filtroPorDni.email.push(newEmail);

let newTelefono:Telefono = new Telefono("Emergencias", 6386689);

filtroPorDni.tel.pop();
filtroPorDni.tel.push(newTelefono);


for(let i = 0; i < contactos.length; i++) {
    console.log(contactos[i]);
}





