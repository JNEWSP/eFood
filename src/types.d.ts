declare type PratoDetalhado = {
  id: number
  preco: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  quantidade: number
}

declare type RestauranteDetalhado = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: PratoDetalhado[]
}