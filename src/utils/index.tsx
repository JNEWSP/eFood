export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getPrecoTotal = (items: PratoDetalhado[]) => {
  return items.reduce((acumulador, valorAtual) => {
    const quantidade = valorAtual.quantidade || 1
    return acumulador + (valorAtual.preco * quantidade)
  }, 0)
}