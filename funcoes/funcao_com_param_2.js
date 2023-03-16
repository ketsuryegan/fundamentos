function executar(fn) {
    if (typeof fn === "function") {
        console.log(fn())
    }
}

function somar(a, b) {
    return a + b
}

function bomDia() {
    return "Bom dia!!"
}

executar(somar)
console.log(bomDia())
