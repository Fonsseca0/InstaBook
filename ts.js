function mostrarCaixa() {
    document.getElementById("overlay").style.display = "flex";
}

function esconderCaixa() {
    document.getElementById("overlay").style.display = "none";
}

function baby() {
    esconderCaixa();
}

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

    var likeDiv = document.createElement("div");
    var likeImg = document.createElement("img");
    likeImg.className = "like";
    likeImg.src = "like.png";
    likeDiv.appendChild(likeImg);

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