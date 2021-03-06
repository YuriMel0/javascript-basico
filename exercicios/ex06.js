const ex03 = require('./ex03')

// Calcular montante com juros simples
const juroSimples = function (capitalInicial, juros, tempo) {
    let rendimento = capitalInicial * juros * tempo
    let montante = capitalInicial + rendimento
    return `R$ ${montante.toFixed(2).replace('.', ',')}`
}

console.log(juroSimples(4000, 0.02, 24))

// Calcular montante com juros compostos 
const jurosCompostos = function (capital, taxaFixa, tempo) {
    let montante = capital * (ex03.potencia((1 + taxaFixa), tempo))
    return `R$ ${montante.toFixed(2).replace('.', ',')}`
}

console.log(jurosCompostos(5000, 0.01, 6))