function enviar() {
    var nome = document.getElementById('txtn')
    var num = document.getElementById('txtnum')
    var data_n = document.getElementById('txtdn')
    var resposta = document.getElementById('res')

    if (nome.value.length == 0 || num.value.length == 0 || data_n.value.length == 0) {
        alert('Faltam dados, por favor tente novamente!')
    } else {
        resposta.innerHTML = `Recebemos seus dados, ${nome.value}, obrigado!` 
    }

}