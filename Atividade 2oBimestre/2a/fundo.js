
function mudarCorDeFundo(event) {
    const novaCor = event.target.value;
    document.body.style.backgroundColor = novaCor;
    verificarCorEImagem(novaCor);
}

window.onload = function() {
    const colorInput = document.getElementById("colorInput");
    colorInput.addEventListener("input", mudarCorDeFundo);
}
