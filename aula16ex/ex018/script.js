let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        res.innerHTML = ''
        var n = Number(num.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}


function fim(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        res.innerHTML = ''
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for( let pos in valores){
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
            soma += valores[pos]
            }
        let media = soma / tot
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}