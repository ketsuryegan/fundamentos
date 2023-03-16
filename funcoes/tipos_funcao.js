function somar(a,b) {
    return a + b
}

let resultado = somar(30,56)
console.log(resultado)
console.log(somar(30,56))


function exibirMultiplicacao(a,b) {
    console.log(a * b)
}

exibirMultiplicacao(10,21)
exibirMultiplicacao(7,9)

function retornarDataAtual() {
    return new Date()
}

console.log(retornarDataAtual())

function exibirHoraAtual() {
    console.log(new Date (). getHours())
}

exibirHoraAtual();