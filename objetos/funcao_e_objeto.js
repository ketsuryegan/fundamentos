function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }

}

const d1 = criarData(3, 10, 2019)
const d2 = criarData(14, 11, 2001)
const d3 = criarData(29, 4, 2015)

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())