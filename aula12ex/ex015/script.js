function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // *Criança
                img.setAttribute('src', 'imagens/crianca-h.jpg')
            }else if(idade < 21){
                // *Jovem
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            }else if(idade < 50){
                // *Adulto
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            }else{
                // *Idoso
                img.setAttribute('src', 'imagens/velho-h.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // *Criança
                img.setAttribute('src', 'imagens/crianca-m.jpg')
            }else if(idade < 21){
                // *Jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            }else if(idade < 50){
                // *Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            }else{
                // *Idoso
                img.setAttribute('src', 'imagens/velho-m.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}