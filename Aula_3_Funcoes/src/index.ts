//Exercício 1
//Crie uma função que receba uma lista de números como parâmetro e retorne o
//maior número da lista.
function listarMaior (...lista:number[]){
    let num=0;
    for(let i=0; i<lista.length; i++){
        if(lista[i]>num){
            num=lista[i];
        }
    }
    return num;
}
console.log("Exercicio 1: " + listarMaior(10,3,2,7,2,20,30));

//Exercício 2
//Desenvolva uma função que receba um número como parâmetro e verifique se
//ele é par ou ímpar. Retorne true se for par e false se for ímpar.
function verificar (x: number){
    if(x % 2 == 0){
        return true;
        
    }
    else{
        return false;
    }
}
console.log("Exercicio 2: " + verificar(4));