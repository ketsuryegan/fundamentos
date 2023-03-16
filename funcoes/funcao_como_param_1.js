function executar(funcao) {
    if(typeof funcao === "function") {
        funcao()
    }
}

function bomDia() {
    return "Bom dia"
}

executar(3)
executar(bomDia)

const x = bomDia
const y = bomDia()
