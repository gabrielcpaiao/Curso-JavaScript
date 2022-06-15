//sintaxe para criar objetos
//no último elemento tem uma função. Objetos podem guardar funcionalidade, isso se chama metodos

let amigo = {nome:'Jose', 
sexo:'M', 
peso:85.4, 
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

console.log(typeof amigo)
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)