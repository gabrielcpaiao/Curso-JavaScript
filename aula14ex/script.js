function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Passo será: 1")
            p = 1 
        }
        if (i < f) { 
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F642} ` 
                //coloca um emoji
                //
            }
        } else {
            for(let c = 1; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F642} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}