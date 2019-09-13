function tabuada(){
    var num = document.querySelector('input.txttab')
    var tab = document.querySelector('select.seltab')
    
    if (num.value.length == 0){
        alert('[ERRO] Digite um número')
    }   else {
        var numTab = Number(num.value)
        var entryNum = 1
        
        tab.innerHTML = ``   //toda vez que colocar um número novo irá limpar a tabuada
        while (entryNum <= 10){
            var item = document.createElement('option')
            item.text = `${numTab} x ${entryNum} = ${numTab * entryNum}`
            tab.appendChild(item)
            entryNum++
        }
    }

}
