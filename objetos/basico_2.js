const produto = {
    nome: "iPad",
    preco: 5600,
    desconto: 0.15,
    precocomDesconto: function () {
        return this.preco * (1 - this.desconto)
    }
};

console.log(produto.nome)
console.log(produto.precocomDesconto())
