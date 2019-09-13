function contar(){
    var initi = document.querySelector('input.txtinit')
    var end = document.querySelector('input.txtfim')
    var step = document.querySelector('input.txtpasso')
    var res = document.querySelector('div.res')

    if (initi.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        alert('[ERRO]Faltam dados')
    } else {
        res.innerHTML = 'Contando:'
        var initiNum = Number(initi.value)
        var endNum = Number(end.value)
        var stepNum = Number(step.value)
        

        for(var result = initiNum; result <= endNum; result += stepNum){   //se lembra desse operador
            res.innerHTML += ` ${result} `
        }
    }
}