const nota1 = 7.8
const nota2 = 3.1
const nota3 = 6.7

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2
}

function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2,))

    if (menorNota === 1) {
        return (n2 + n3) / 2
    } else if (menorNota === n2) {
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }
}

console.log(minimo(nota1, minimo(nota2, 3)))
