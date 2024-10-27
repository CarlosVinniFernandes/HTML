function calcular(params) {
    var nota1;
    var nota2;
    var media;
    var frase;

    var nota1 = parseFloat(document.getElementById('x').value);
    var nota2 = parseFloat(document.getElementById('y').value);
    var media = (nota1 + nota2) / 2;
    media = (nota1 + nota2)/2;

    //document.getElementById('resp').innerText = "A média é: " + media;

    if (media >= 7) {
        frase = `Média: ${media}<br>Status: Aprovado!`
        document.getElementById('resp').className = "aprovado"; // Mudando a classe
    }
     else if(media<4){
        document.getElementById('resp').innerText += "Game over!";
    }
    else {
        document.getElementById('resp').innerText += "Recuperação!";

    }

    document.getElementById('resp').innerText = frase;

}