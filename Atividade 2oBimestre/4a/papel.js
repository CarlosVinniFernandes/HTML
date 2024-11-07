function jogar(escolha) {
    const jogada = ["pedra", "papel", "tesoura"];
    const casseb = jogada[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").textContent = `Você escolheu: ${escolha}`;
    document.getElementById("computer-choice").textContent = `O Casseb escolheu: ${casseb}`;

    let saida = "";

    if (escolha === casseb) {
      saida = "Empate!";
    } else if ((escolha === "pedra" && casseb === "tesoura") || (escolha === "papel" && casseb === "pedra") ||(escolha === "tesoura" && casseb === "papel")) {
      saida = "Você derrotou o Grande Casseb!";
    } 
    else {
      saida = "Você perdeu para o Grande Casseb!";
    }

    document.getElementById("saida").textContent = saida;
    
    mudarImagem(casseb);
  }

  function mudarImagem(casseb) {
    const imagemJogada = document.getElementById("imagem-jogada");
    if (casseb === "pedra") {
      imagemJogada.src = "./pedra.png";
    } 
    else if (casseb === "papel") {
        imagemJogada.src = "./papel.png";
    } 
    else if (casseb === "tesoura") {
        imagemJogada.src = "./tesoura.png";
    }
  }