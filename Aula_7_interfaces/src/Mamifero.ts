import { Animal } from "./Animal";

export class Mamifero implements Animal{
    nome:string;
    constructor(nome:string){
        this.nome=nome;
    }
    ehOvipero():boolean{
        return this.nome == 'ornitorrinco';
    }
    ehLactante():boolean{
        return true;
    }
}