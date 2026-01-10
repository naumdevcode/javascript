function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora < 6 || hora > 18){
        //* boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#081c1d'
    }else if (hora < 12){
        //* bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#98d8ff'
    }else{
        //* boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#ff8427'
    }
}