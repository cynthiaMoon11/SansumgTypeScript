export class Email {
    private _tipo:string;
    private _email:string;

    
    constructor(tipo: string, email: string){
        this._tipo = tipo;
        this._email = email;
    } 
    public get tipo():string{
        return this._tipo;
    }
    public set tipo (t:string){
		this._tipo = t;
	}
    public get email():string{
        return this._email;
    }
    public set email (email:string){
		this._email = email;
	}   
}
