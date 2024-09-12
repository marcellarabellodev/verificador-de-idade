function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var txtAno = document.getElementById('txtAno');
    var resultado = document.querySelector('div#resultado');

    if (txtAno.value.length == 0 || Number(txtAno.value) > ano){
        window.alert('[EERO] Verifique os dados e tente novcamente!')
    } else{
        var radSex = document.getElementsByName('radSex');
        var idade = ano - Number(txtAno.value);
        var genero = '';
        var img = document.createElement('img'); // criando imagem dinamicamente ao invés de criar pelo HTML
        img.setAttribute('id', 'foto'); // criando imagem dinamicamente

        if (radSex[0].checked){  // se o que tiver flegado for masculino então é o ZERO, se for femino é o UM
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'foto-bebe-masc.png');
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto-jovem-masc.png');
            } else if (idade < 60){
                // adulto
                img.setAttribute('src', 'foto-adulto-masc.png');
            } else{
                // idoso
                img.setAttribute('src', 'foto-idoso-masc.png');
            }
        } else if (radSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'foto-bebe-fem.png');
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto-jovem-fem.png');
            } else if (idade < 60){
                // adulto
                img.setAttribute('src', 'foto-adulto-fem.png')
            } else{
                // idoso
                img.setAttribute('src', 'foto-idosa-fem.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.style.textAlign = 'center' // centralizar texto
        resultado.appendChild(img); // adicionar elemento img
    }
}