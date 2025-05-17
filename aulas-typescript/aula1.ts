let nome: string = 'Carlos'
let numero: number = 1
let numeroFlutuante: number = 1.75
let ativado: boolean = true
let qualquer: any = 'Blalalala'

let desconhecido: unknown = 'Ola' // Qualquer coisa também

// Arrays
let arrayDeNomes: string[] = ['Carlos', 'Cecilia', 'Pedro']

for (let i = 0; i < arrayDeNomes.length; i++) {
  console.log(arrayDeNomes[i])
}

// Tuplas
let carros: [string, number][] = [
  ['Golf', 2020],
  ['Gol', 2016],
]

// Types

type Pessoa = {
  nome: string
  idade: number | string
  cpf: string
  apelido?: string
}

const pessoaUm: Pessoa = {
  nome: 'Carlos',
  idade: 19,
  cpf: '12355678975',
}

// Interfaces
interface Veiculo {
  nome: string
  modelo: string
  ano: number
}

const carro: Veiculo = {
  nome: 'Civic',
  modelo: 'Honda',
  ano: 2017,
}

// Union -> quero pesquisar depois, não achei tão util no contexto dessa aula

// Funções

// Transformamos em função genérica por conta da aula
function soma<T>(x: T, y: T): any {
  // Existem vários tipos de retorno, void, number, string
  return (x as any) + (y as any)
}

// Arrow-function
const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y
}

const subtracao: (x: number, y: number) => number = (x, y) => {
  return x - y
}

let r1 = soma<number>(1, 2)
let r2 = soma<string>('1', '2')

console.log(r1, r2)
