let lisn = []
let soma = 0

function adicionar(){
    let num = document.getElementById('fnum')
    var n = Number(num.value)
    if(n < 0 || n > 100 || lisn.indexOf(n) != -1){
        alert('Valor inválido ou já encontrado na lista')
    }else{
        lisn.push(n)
        let item = document.createElement('option')
        item.text = `O valor ${n} foi adicionado`
        item.value = n
        flista.appendChild(item)
        soma += n
    }
}

function fim(){
    let calc = document.createElement('p')
    if(lisn.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        lisn.sort()
        calc.innerHTML += `<p>Ao todo, temos ${lisn.length} números cadastrados.</p>`
        calc.innerHTML += `<p>O maior valor informado foi ${lisn[lisn.length-1]}.</p>`
        calc.innerHTML += `<p>O menor valor informado foi ${lisn[0]}.</p>`
        calc.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        calc.innerHTML += `<p>A média dos valores digitados é ${soma/lisn.length}.</p>`
        res.appendChild(calc)
    }
}