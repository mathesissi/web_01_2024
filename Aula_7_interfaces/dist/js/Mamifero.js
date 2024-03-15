"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
class Mamifero {
    constructor(nome) {
        this.nome = nome;
    }
    ehOvipero() {
        return this.nome == 'ornitorrinco';
    }
    ehLactante() {
        return true;
    }
}
exports.Mamifero = Mamifero;
