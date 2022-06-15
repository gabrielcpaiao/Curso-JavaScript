var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    //como vai usar o node.js  tem que usar o console.log
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}