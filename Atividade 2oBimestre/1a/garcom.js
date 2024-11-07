    function aumentar() {
        let counter = document.getElementById("numero");
        counter.textContent = parseInt(counter.textContent) + 1;
        mudarfundo();
      }

      function diminuir() {
        let counter = document.getElementById("numero");
        counter.textContent = parseInt(counter.textContent) - 1;
        mudarfundo();
      }

      function aumentar() {
        let counter = document.getElementById("numero");
        counter.textContent = parseInt(counter.textContent) + 1;
        mudarfundo();
    }
    
    function diminuir() {
        let counter = document.getElementById("numero");
        counter.textContent = parseInt(counter.textContent) - 1;
        mudarfundo();
    }
    
    function mudarfundo() {
        let count = parseInt(document.getElementById("numero").textContent);
    
        if (count > 10) {
            document.body.style.backgroundImage = "url('./garcom2.png')";
        } else {
            document.body.style.backgroundImage = "url('./garcom.png')";
        }
    }