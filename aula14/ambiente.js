console.log('Vai começar...')
for (var c = 1; c <= 5; c++) {
    console.log(c)
}
console.log('FIM!')


//Vetores
var vagaCarro = []
let num = [5,8,4]
console.log(`Meu vetor é o ${num}`)
//acrescentando mais um valor
num[3] = 6
console.log(`Meu novo vetor é o ${num}`)

//para acrescentar um valor no final
num.push(7)
console.log(`Meu novo vetor é o ${num}`)

//comprimento de num --> não tem parenteses, lenght é um atributo
num.length

//ordenação --> ordem crescentre
num.sort

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)


for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}