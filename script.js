
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

function cadastroFinalizado(){
    alert('Parabéns, agora você faz parte da comunidade de pessoas que possuem total controle sobre o dinheiro! Bem-vindo!');
}