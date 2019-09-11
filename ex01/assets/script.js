function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.querySelector('input.txtano');   //pegando elemento assim tem que colocar a tag que pertence
    var res = document.querySelector('div.res');

    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        } else if(fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
    }

}