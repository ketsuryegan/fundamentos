const data = {
    dia: "7" ,
    mes: "3" ,
    ano: "2023" ,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.exibir())