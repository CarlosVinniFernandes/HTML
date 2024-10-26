function somar(params) {
    var ano;
    let idade;

    ano = document.getElementById('ano').value;
    idade = 2027 - ano;

    //(idade);:
    document.getElementById('resp').innerText = `Sua idade: ${idade}` ;
}