function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var img = document.createElement('img');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("(ERRO!) Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
       var genero = '';
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');

       if (fsex[0].checked) {
        genero = "Homem";
        if (idade >= 0 && idade< 10) {
            //Criaança
            img.setAttribute('src', 'bebe.png');
        } else if (idade < 21) {
            //Jovem
            img.setAttribute(`src`, `homemjovem.png`);
        } else if (idade < 50) {
            //Adulto
            img.setAttribute(`src`, `adulto.png`);
        } else {
            //Idoso
            img.setAttribute(`src`, `idoso.png`);
        }
       } else if (fsex[1].checked){
        genero = "Mulher";
        if (idade >= 0 && idade< 10) {
            //Criaança
            img.setAttribute('src', 'menina.png');
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'mulherjovem.png');
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'adultomulher.png');
        } else {
            //Idoso
            img.setAttribute('src', 'idosa.png');
        }
       }
       res.getElementsByClassName.textAlign = 'center';
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br><br>`;
       res.appendChild(img);
    }
}