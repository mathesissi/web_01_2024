import { Animal } from "./Animal";
export class Ave implements Animal{
    nome:string;

    constructor(nome:string){
        this.nome=nome;
    }
    ehOvipero():boolean{
        return true; 
    }
    ehLactante():boolean{
        return false;
    }
}