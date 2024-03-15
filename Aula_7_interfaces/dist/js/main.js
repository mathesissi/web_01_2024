"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mamifero_1 = require("./Mamifero");
const Ave_1 = require("./Ave");
function imprimeAnimal(animal) {
    console.log(`O animal ${animal.nome} é lactante:${animal.ehLactante()}`);
    console.log(`O animal ${animal.nome} é oviporo:${animal.ehOvipero()}`);
}
let ave = new Ave_1.Ave("Pato");
let mamifero = new Mamifero_1.Mamifero("Gato");
imprimeAnimal(mamifero);
imprimeAnimal(ave);
