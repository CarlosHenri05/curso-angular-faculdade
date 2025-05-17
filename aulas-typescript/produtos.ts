class ProdutoGenerico {}

class Produto extends ProdutoGenerico {
  nome: string
  codigo: number
  preco: number

  constructor(nome: string, codigo: number, preco: number) {
    super()
    this.nome = nome
    this.codigo = codigo
    this.preco = preco
  }

  getNome(): string {
    return this.nome
  }
}
