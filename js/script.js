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
        if (idade >= 0 && idade < 10) {
            //Criaança
            img.setAttribute('src', 'img/menino.png');
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'img/homemjovem.jpg');
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'img/homemadulto.png');
        } else {
            //Idoso
            img.setAttribute('src', 'img/idoso.png');
        }
       } else if (fsex[1].checked){
        genero = "Mulher";
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'img/menina.png');
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'img/mulherjovem.png');
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'img/mulheradulto.png');
        } else {
            //Idoso
            img.setAttribute('src', 'img/idosa.png');
        }
       }
       res.getElementsByClassName.textAlign = 'center';
       res.innerHTML = `<b>Detectamos ${genero} com ${idade} anos.</b><br><br>`;
       res.appendChild(img);
    }
}