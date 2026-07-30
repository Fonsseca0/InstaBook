function mostrarCaixa() {
    document.getElementById("overlay").style.display = "flex";
}

function esconderCaixa() {
    document.getElementById("overlay").style.display = "none";
}

function baby() {
    esconderCaixa();
    iniciarTutorial();
}
/*^*/
/*v*/
function iniciarTutorial() {
    document.getElementById("tutorialOverlay").style.display = "flex";
    document.getElementById("balaoStories").style.display = "block";
    document.getElementById("balaoVisibilidade").style.display = "none";
}

function proximoBalao() {
    document.getElementById("balaoStories").style.display = "none";
    document.getElementById("balaoVisibilidade").style.display = "block";
}

function fecharTutorial() {
    document.getElementById("tutorialOverlay").style.display = "none";
}

// Gera números aleatórios de curtidas ao carregar a página
function inicializarCurtidas() {
    document.querySelectorAll(".like-container").forEach(function(container) {
        var span = container.querySelector(".like-count");
        var numeroAleatorio = Math.floor(Math.random() * 500) + 1;
        span.textContent = numeroAleatorio;
        span.dataset.base = numeroAleatorio; // guarda o valor original
    });
}

// Função de curtir/descurtir
function curtir(img) {
    var container = img.closest(".like-container");
    var span = container.querySelector(".like-count");
    var base = parseInt(span.dataset.base, 10);
    var jaCurtido = img.classList.contains("curtido");

    if (!jaCurtido) {
        img.classList.add("curtido");
        span.classList.add("curtido");
        span.textContent = base + 1;
    } else {
        img.classList.remove("curtido");
        span.classList.remove("curtido");
        span.textContent = base;
    }
}

window.addEventListener("DOMContentLoaded", inicializarCurtidas);
/**/
// Nova caixa do botão "mais"
document.getElementById("btnMais").addEventListener("click", function(e) {
    e.preventDefault();
    mostrarCaixaMais();
});

function mostrarCaixaMais() {
    document.getElementById("overlayMais").style.display = "flex";
}
function esconderCaixaMais() {
    document.getElementById("overlayMais").style.display = "none";
}

// Seleção de imagem para novo post
document.querySelectorAll(".opcaoPost").forEach(function(img) {
    img.addEventListener("click", function() {
        document.querySelectorAll(".opcaoPost").forEach(function(i) {
            i.classList.remove("selecionada");
        });
        this.classList.add("selecionada");

        var mensagemErro = document.getElementById("mensagemErro");

        if (this.getAttribute("data-valido") === "true") {
            mensagemErro.style.display = "none";
            postarImagem(this.src);
            esconderCaixaMais();
        } else {
            mensagemErro.style.display = "block";
        }
    });
});

function postarImagem(src) {
    var feed = document.querySelector(".feed");

    var novoPost = document.createElement("div");
    novoPost.className = "post";
    var img = document.createElement("img");
    img.src = src;
    novoPost.appendChild(img);

    /* */
    var likeDiv = document.createElement("div");
    likeDiv.className = "like-container";

    var likeImg = document.createElement("img");
    likeImg.className = "like";
    likeImg.src = "like.png";
    likeImg.setAttribute("onclick", "curtir(this)");

    var likeSpan = document.createElement("span");
    likeSpan.className = "like-count";
    var numeroAleatorio = Math.floor(Math.random() * 500) + 1;
    likeSpan.textContent = numeroAleatorio;
    likeSpan.dataset.base = numeroAleatorio;

    likeDiv.appendChild(likeImg);
    likeDiv.appendChild(likeSpan);
    /* */

    feed.insertBefore(likeDiv, feed.firstChild);
    feed.insertBefore(novoPost, likeDiv);
}

// Reseta seleção e erro toda vez que a caixa "mais" é aberta
document.getElementById("btnMais").addEventListener("click", function() {
    document.querySelectorAll(".opcaoPost").forEach(function(i) {
        i.classList.remove("selecionada");
    });
    document.getElementById("mensagemErro").style.display = "none";
});