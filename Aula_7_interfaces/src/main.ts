import { Animal } from "./Animal";
import { Mamifero } from "./Mamifero";
import { Ave } from "./Ave"

function imprimeAnimal(animal: Animal){
    console.log(`O animal ${animal.nome} é lactante:${animal.ehLactante()}`);
    console.log(`O animal ${animal.nome} é oviporo:${animal.ehOvipero()}`);
}

let ave = new Ave("Pato");
let mamifero = new Mamifero("Gato");

imprimeAnimal(mamifero);
imprimeAnimal(ave);