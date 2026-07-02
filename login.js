function mostrarCaixa() {
    document.getElementById("overlay").style.display = "flex";
}

function esconderCaixa() {
    document.getElementById("overlay").style.display = "none";
}

function baby() {
    esconderCaixa();
}

// Verificação de força de senha
var campoSenha = document.getElementById("senha");

if (campoSenha) {
    campoSenha.addEventListener("input", function() {
        var senha = campoSenha.value;

        var temTamanho = senha.length >= 8;
        var temMaiuscula = /[A-Z]/.test(senha);
        var temMinuscula = /[a-z]/.test(senha);
        var temNumero = /[0-9]/.test(senha);
        var temEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=]/.test(senha);

        atualizarRequisito("reqTamanho", temTamanho);
        atualizarRequisito("reqMaiuscula", temMaiuscula);
        atualizarRequisito("reqMinuscula", temMinuscula);
        atualizarRequisito("reqNumero", temNumero);
        atualizarRequisito("reqEspecial", temEspecial);

        var pontuacao = [temTamanho, temMaiuscula, temMinuscula, temNumero, temEspecial]
            .filter(Boolean).length;

        var barra = document.getElementById("forcaBarra");
        var texto = document.getElementById("forcaTexto");

        if (senha.length === 0) {
            barra.style.width = "0%";
            barra.style.backgroundColor = "red";
            texto.textContent = "Digite uma senha";
            texto.style.color = "#333";
        } else if (pontuacao <= 2) {
            barra.style.width = "25%";
            barra.style.backgroundColor = "red";
            texto.textContent = "Senha fraca";
            texto.style.color = "red";
        } else if (pontuacao === 3 || pontuacao === 4) {
            barra.style.width = "65%";
            barra.style.backgroundColor = "orange";
            texto.textContent = "Senha média";
            texto.style.color = "orange";
        } else if (pontuacao === 5) {
            barra.style.width = "100%";
            barra.style.backgroundColor = "green";
            texto.textContent = "Senha forte";
            texto.style.color = "green";
        }
    });
}

function atualizarRequisito(id, valido) {
    var item = document.getElementById(id);
    if (valido) {
        item.classList.add("valido");
    } else {
        item.classList.remove("valido");
    }
}

// Validação ao clicar em COMECAR
function validarLogin() {
    var usuario = document.getElementById("usuario").value.trim();
    var senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        alert("Preencha usuário e senha.");
        return false;
    }

    var temTamanho = senha.length >= 8;
    var temMaiuscula = /[A-Z]/.test(senha);
    var temMinuscula = /[a-z]/.test(senha);
    var temNumero = /[0-9]/.test(senha);
    var temEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=]/.test(senha);

    if (!(temTamanho && temMaiuscula && temMinuscula && temNumero && temEspecial)) {
        alert("Sua senha ainda não atende todos os requisitos de segurança.");
        return false;
    }
    
    return true;
}