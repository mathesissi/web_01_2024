// 01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
//  (Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
//  instância de Carro
class Carro{
   private Modelo:string;
   private AnodoCarro:number;
   private AnoAtual:number;

    constructor (Modelo:string, AnodoCarro:number, AnoAtual:number){
        this.Modelo = Modelo;
        this.AnodoCarro = AnodoCarro;
        this.AnoAtual =AnoAtual;
    }
    get getModelo():string{
        return this.Modelo;
    }
    get getAnodoCarro():number{
        return this.AnodoCarro;
    }
    get getAnoAtual():number{
        return this.AnoAtual;
    }
    set setModelo(Modelo:string){
        this.Modelo = Modelo;
    }
    set setAnodoCarro(AnodoCarro:number){
        this.AnodoCarro = AnodoCarro;
    }
    set setAnoAtual(AnoAtual:number){
        this.AnoAtual = AnoAtual;
    }
    
    calcularIdade():number {
        return this.AnoAtual - this.AnodoCarro;
    }
}

let CAR = new Carro("santana", 1999, 2024);
console.log("Exercicio 1");
console.log(CAR);

CAR.setModelo = "corsa";
console.log(CAR.getModelo);
console.log("O carro possui " + CAR.calcularIdade());
console.log("\n");

// 02 – Desenvolva uma classe Calculadora em TypeScript
// Crie uma classe Calculadora que encapsula funcionalidades matemáticas básicas. Esta classe deve
// possuir os seguintes requisitos:
// • Dois atributos numéricos (valor1 e valor2) para armazenar os operandos das operações.
// • Um construtor que aceite dois números como parâmetros e os atribua aos respectivos
// atributos.
// • Métodos para realizar as seguintes operações matemáticas:
// ◦ Soma: retorna a adição dos dois valores.
// ◦ Subtração: retorna a diferença entre os dois valores.
// ◦ Multiplicação: retorna o resultado da multiplicação dos dois valores.
// ◦ Divisão: retorna o resultado da divisão do primeiro valor pelo segundo valor. Atenção:
// evite divisões por zero.
// ◦ Porcentagem: retorna a porcentagem do primeiro valor em relação ao segundo valor.
// ◦ Getters e Setters
// Certifique-se de que a classe lida corretamente com situações de erro, como a divisão por zero.
// Teste todos os métodos.
// 03 – Desenvolva uma classe Produto em

class Calculo {
    private valor1: number;
    private valor2: number;

    constructor(valor1: number, valor2: number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get getValor1():number{
        return this.valor1;
    }
    get getValor2():number{
        return this.valor2;
    }
    set setValor1(valor1:number){
        this.valor1=valor1;
    }
    set setValor2(valor2:number){
        this.valor2=valor2;
    }
    Soma(){
        return this.valor1 + this.valor2;
    }
    Subtracao(){
        return this.valor1 - this.valor2;
    }
    Multi(){
        return this.valor1 * this.valor2;
    }
    Divisao(){
        if(this.valor2==0){
            return "Não é possivel dividir por zero";
        }
        else{
            return this.valor1 / this.valor2;
        }
    }
    Porcemtagem(){
        let conv = this.valor2 /100;
        return this.valor1 * conv;
    }
}
let Conta = new Calculo(1,20);
console.log("Exercicio 2");
console.log("O valor1 eh: ", Conta.getValor1);
console.log("O valor2 eh: ", Conta.getValor2);
console.log("Resultado da soma: ", Conta.Soma());

Conta.setValor1 = 93;
console.log("Resultado da subtracao: ", Conta.Subtracao());

Conta.setValor2= 2.5;
console.log("Resultado da multiplicacao: ", Conta.Multi());

Conta.setValor2= 0;
console.log("Resultado da divisão: ", Conta.Divisao());

Conta.setValor2= 6;
console.log("Resultado da divisão: ", Conta.Divisao());

Conta.setValor1= 72;
Conta.setValor2= 8;
console.log("Resultado da porcentagem: ", Conta.Porcemtagem(), "\n");

// 03 – Desenvolva uma classe Produto em TypeScript
// Crie uma classe Produto que represente um item disponível em um catálogo de uma loja virtual. A
// classe deve ter as seguintes características:
// Atributos:
// • nome: uma string que representa o nome do produto.
// • preco: um número que representa o preço do produto.
// • quantidadeEmEstoque: um número inteiro que indica a quantidade disponível em estoque do
// produto.
// Construtor:
// • Deve aceitar três parâmetros: nome, preco e quantidadeEmEstoque, e atribuí-los aos
// respectivos atributos da classe.
// Métodos:
// • calcularValorTotalEmEstoque(): retorna o valor total em estoque do produto, calculado
// multiplicando o preço pelo quantidade em estoque.
// • reporEstoque(quantidade: number): adiciona a quantidade especificada ao estoque do
// produto.
// • vender(quantidade: number): remove a quantidade especificada do estoque do produto. Se a
// quantidade desejada for maior do que a disponível em estoque, deve ser lançado um erro
// indicando que não há estoque suficiente.
// • Getters e Setters
// Certifique-se de que a classe lida corretamente com situações de erro, como tentar vender mais
// produtos do que há em estoque. Teste todos os métodos

class Produto{
    private nome: string;
    private preco: number;
    private quantidadeEmEstoque: number;

    constructor(nome:string, preco:number, quantidadeEmEstoque:number){
        this.nome = nome;
        this.preco= preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    get getNome():string{
        return this.nome;
    }
    get getPreco():number{
        return this.preco;
    }
    get getQuantidadeEmEstoque():number{
        return this.quantidadeEmEstoque;
    }

    set setNome(nome:string){
        this.nome;
    }
    set setPreco(preco:number){
        this.preco;
    }
    set setQuantidadeEmEstoque(quantidadeEmEstoque:number){
        this.quantidadeEmEstoque;
    }
    
    calcularValorTotalEmEstoque(){
        return this.preco * this.getQuantidadeEmEstoque;
    }
    reporEstoque(quantidade: number){
        this.quantidadeEmEstoque += quantidade;
    }
    vender(quantidade: number){
        this.quantidadeEmEstoque -= quantidade;
    }
}

let Produto1 = new Produto("Xarope_de_milho", 24.00, 19);
console.log("Exercicio");
console.log(Produto1);

Produto1.reporEstoque(10);
console.log("O estoque foi reposto com 10 unidades, valor atual: ", Produto1.getQuantidadeEmEstoque, "uni.");

Produto1.vender(5)
console.log("5 unidades foram vendidas, estoque atual: ", Produto1.getQuantidadeEmEstoque, "uni.");
