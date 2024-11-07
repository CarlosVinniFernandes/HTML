    function validador() {
      const login = document.getElementById("login").value;
      const senha = document.getElementById("senha").value;
      const erroDeLogin = document.getElementById("erroDeLogin");
      const erroDeSenha = document.getElementById("erroDeSenha");

      erroDeLogin.style.display = "none";
      erroDeSenha.style.display = "none";

      if (login === "ale@cesupa.br" && senha === "123123") {
        window.location.href = "https://www.cesupa.br";
        }

      else if (login === "pedro@giroto.com" && senha === "223344"){
        window.location.href = "https://www.detran.pa.gov.br";
        } 

      else if (login === "isaac@java.com" && senha === "asdasd") {
        window.location.href = "https://www.idopterlabs.com.br/";
        } 

      else {
        if (login !== "ale@cesupa.br" && login !== "pedro@giroto.com" && login !== "isaac@java.com") {
            erroDeLogin.style.display = "block";
        }
        if (
          (login === "ale@cesupa.br" && senha !== "123123") ||
          (login === "pedro@giroto.com" && senha !== "223344") ||
          (login === "isaac@java.com" && senha !== "asdasd")
        ) {
            erroDeSenha.style.display = "block";
        }
      }
    }