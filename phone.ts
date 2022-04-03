export class Telefono {
    private _tipo:string;
    private _numero:number;
   
    constructor(tipo: string, num: number){
        this._tipo = tipo;
        this._numero = num;
    }
    public get tipo() : string{
        return this._tipo;
    }
    public set tipo (t:string){
		this._tipo = t;
	}

    public get numero() : number{
        return this._numero;
    } 	
	public set numero (n:number){
		this._numero = n;
	}
}