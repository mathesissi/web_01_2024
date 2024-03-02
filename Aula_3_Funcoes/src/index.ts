//Exercício 1
//Crie uma função que receba uma lista de números como parâmetro e retorne o
//maior número da lista.
function listarMaior(...lista:number[]){
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
function verificar(x: number){
    if(x % 2 == 0){
        return true;
        
    }
    else{
        return false;
    }
}
console.log("Exercicio 2: " + verificar(4));

//Exercício 3
//Implemente uma função que calcule a média aritmética de um array de números
//e retorne o resultado. Utilize essa função para calcular a média de diferentes
//conjuntos de números.
function mediaAritmetica(...numeros:number[]){
    let soma=0;
    for(let i=0; i<numeros.length; i++){
        soma = soma + numeros[i];
    }
    let resultado = 0;
    resultado = soma/numeros.length;
    return resultado;
}
console.log("exercicio 3:" + mediaAritmetica(10,3,5));

// Exercício 4
//  Crie uma função que receba uma string como parâmetro e retorne a mesma 
// string com todas as letras em caixa alta. Utilize essa função para converter 
// diferentes strings.
function caixaalta(palavras:string){
    return palavras.toUpperCase();
}
console.log("exercicio 4:" + caixaalta("oiii"));

// Exercício 5
// Desenvolva uma função que determine se um número é primo ou não. Retorne 
// true se for primo e false se não for

function verificarPrimo(numero: number) {
    if(numero<=1){
        return false;
    }
    for(let i=2; i < numero; i++){
        if(numero % i  === 0){
            return false;
        }
        return true;
    }
}
console.log("exercicio 5:" + verificarPrimo(11));

// Exercício 6
//  Implemente uma função que inverta a ordem dos elementos em um array. 
// Utilize essa função para inverter a ordem de diferentes conjuntos de elementos
function inverterOrdem(...variavel1: number[]){
    let novaOrdem = "";
    for (let i = variavel1.length - 1; i >= 0; i--) {
        novaOrdem += variavel1[i];
    }
    return novaOrdem;
}

console.log("exercicio 6:" + inverterOrdem(1,2,3,4,5));

// Exercício 7
//  Crie uma função que receba um valor e uma porcentagem como parâmetros. A 
// função deve retornar o valor acrescido da porcentagem indicada.
function porcentagem(valor:number, porcentagem:number){
    var resultado= 0;
    if(valor === 0){
        return 0;
    }
    else{
        let conversão =(porcentagem/100) + 1;
        resultado = valor*conversão;
        return resultado;
    }    
}
console.log("exercicio 7:" + porcentagem(12, 50));

//  Exercício 8
//  Crie uma função que receba uma string e retorne a mesma string, mas com as 
// palavras em ordem reversa. 
function inverterP(frase: string): string {
    let resultado = "";
    let palavraAtual = "";
    
    for (let i = 0; i < frase.length; i++) {
        const char = frase[i];
        if (char === ' ' || i === frase.length - 1) {
            resultado = palavraAtual + ' ' + resultado;
            palavraAtual = '';
        } else {
            palavraAtual += char;
        }
    }
    return resultado.trim(); 
}

console.log("exercicio 8 (simplificado): " + inverterP("Socorro Deus"));
console.log("exercicio 8 (simplificado): " + inverterP("Odeio quando os codigos nao funcionam"));
// Exercício 9
//  Implemente uma função que retorne a soma de todos os números pares em um 
// array.
function somarPar(...numeros:number[]){
    let soma=0;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] % 2 === 0){
            soma+=numeros[i];
        }
    }
    return soma;
}
console.log("exercicio 9:" + somarPar(1,2,3,4,5,6,7,8));
// Exercício 10
//  Crie uma função que calcule o fatorial de um número. Utilize essa função para 
// calcular o fatorial de diferentes números
function fatorial(numeros:number){
    let resultado=1;
    for(let i=numeros; i>=1; i--){
      resultado*=i; 
    }
    return resultado;
}
console.log("exercicio 10:" + fatorial(5));
console.log("exercicio 10:" + fatorial(7));
console.log("exercicio 10:" + fatorial(20));