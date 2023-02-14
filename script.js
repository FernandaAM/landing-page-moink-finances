
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validarSenha(){
    senha1 = document.getElementsByName("definaSenha").value;
    senha2 = document.getElementsByName("confirmeSenha").value;

    if (senha1 != senha2){
        senha2.setCustomValidity("As senhas não conferem! Digite senhas iguais.");
        return false;
    }
    return true;
}

function finalizarCadastro(){
    alert('Parabéns, agora você faz parte da comunidade de pessoas que possuem total controle sobre o dinheiro! Bem-vindo!');
}

