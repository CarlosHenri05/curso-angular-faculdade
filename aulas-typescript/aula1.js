var nome = 'Carlos';
var numero = 1;
var numeroFlutuante = 1.75;
var ativado = true;
var qualquer = 'Blalalala';
var desconhecido = 'Ola'; // Qualquer coisa também
// Arrays
var arrayDeNomes = ['Carlos', 'Cecilia', 'Pedro'];
for (var i = 0; i < arrayDeNomes.length; i++) {
    console.log(arrayDeNomes[i]);
}
// Tuplas
var carros = [
    ['Golf', 2020],
    ['Gol', 2016],
];
var pessoaUm = {
    nome: 'Carlos',
    idade: 19,
    cpf: '12355678975',
};
var carro = {
    nome: 'Civic',
    modelo: 'Honda',
    ano: 2017,
};
// Union -> quero pesquisar depois, não achei tão util no contexto dessa aula
// Funções
// Transformamos em função genérica por conta da aula
function soma(x, y) {
    // Existem vários tipos de retorno, void, number, string
    return x + y;
}
// Arrow-function
var soma2 = function (x, y) {
    return x + y;
};
var subtracao = function (x, y) {
    return x - y;
};
var r1 = soma(1, 2);
var r2 = soma('1', '2');
console.log(r1, r2);
