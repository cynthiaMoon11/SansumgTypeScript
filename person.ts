import { Direccion } from "./address";
import { Email } from "./email";
import { Telefono } from "./phone";

let telefono1: any= new Telefono('personal', 688759728);
let email1: any = new Email('personal', 'cynthia@g.com');
let address1: any = new Direccion('grupo francisco llaseras', 7, 1, 'izq', 48910, 'Sestao', 'Bizkaia');

export class Contacto {
    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _DNI: string;
    private _cumpleaños: string;
    private _colorFav: string;
    private _sexo: string;
    private _direccion: Direccion[] = [];
    private _email: Email[] = [];
    private _tel: Telefono[] = [];
    private _notas: string;

    constructor(nombre: string, apellido: string, edad: number, DNI: string, cumpleaños: string, colorFav: string,
        sexo: string, direccion: Direccion, email: Email, tel: Telefono, notas: string) {
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
    public set nombre(nombre: string) {
        this._nombre = nombre;
    }
    public set apellido(apellido: string) {
        this._apellido = apellido;
    }
    public set edad(edad: number) {
        this._edad = edad;
    }
    public set DNI(DNI: string) {
        this._DNI = DNI;
    }
    public set cumpleaños(cumpleaños: string) {
        this._cumpleaños = cumpleaños;
    }
    public set colorFav(colorFav: string) {
        this._colorFav = colorFav;
    }
    public set sexo(sexo: string) {
        this._sexo = sexo;
    }
    public set direccion(direccion: Direccion[]) {
        this._direccion = direccion;
    }
    public set email(email: Email[]) {
        this._email = email;
    }
    public set tel(tel: Telefono[]) {
        this._tel = tel;
    }
    public set notas(notas: string) {
        this._notas = notas;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public get apellido(): string {
        return this._apellido;
    }
    public get edad(): number {
        return this._edad;
    }
    public get DNI(): string {
        return this._DNI;
    }
    public get cumpleaños(): string {
        return this._cumpleaños;
    }
    public get colorFav(): string {
        return this._colorFav;
    }
    public get sexo(): string {
        return this._sexo;
    }
    public get direccion(): Direccion[] {
        return this._direccion;
    }
    public get email(): Email[]{
        return this._email;
    }
    public get tel(): Telefono[] {
        return this._tel;
    }
    public get notas(): string {
        return this._notas;
    }

}

/* export let contacto1: any = new Contacto('cynthia', 'escobar', 32, 'Y7620943', '29 de noviembre', 'negro', 'femenino', address1, email1, telefono1, 'esto es una prueba'); */

let contactoPrueba = new Contacto(
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

