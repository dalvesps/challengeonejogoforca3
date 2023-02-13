let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavraSecretaSorteadaEmLibras;

const palavras = [
    palavra001 = {
        nome: "RATO",
        libras: " <video src=\"libras/Rato.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"  },

        palavra002 = {
        nome: "TARTARUGA",
        libras: " <video src=\"libras/Tartaruga.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    },
     palavra003 = {
       nome: "PEIXE",
        libras: " <video src=\"libras/Peixe.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    },
    palavra004 = {
        nome: "PASSARO",
        libras: " <video src=\"libras/Passaro.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    }, palavra005 = {
        nome: "GIRAFA",
        libras: " <video src=\"libras/Girafa.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    }, palavra006 = {
        nome: "GATO",
        libras: " <video src=\"libras/Gato.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    }, palavra007 = {
        nome: "ELEFANTE",
        libras: " <video src=\"libras/Elefante.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    }, palavra008 = {
        nome: "COELHO",
        libras: " <video src=\"libras/Coelho.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    }, palavra009 = {
        nome: "COBRA",
        libras: " <video src=\"libras/Cobra.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    }, palavra010 = {
        nome: "CACHORRO",
        libras: " <video src=\"libras/Cachorro.mp4\" width=\"400\" height=\"500\"preload=\"auto\"controls autoplay loop ></video>  ",
        categoria: "Categoria: ANIMAL"
    },
];
criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)


    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    palavraSecretaSorteadaEmLibras = palavras[indexPalavra].libras;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
    console.log(palavraSecretaSorteadaEmLibras)


}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    const libras = document.getElementById("libras");
    libras.innerHTML = palavraSecretaSorteadaEmLibras;

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }

}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra);
    if (pos < 0) {
        tentativas--
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("OPS!", "não foi dessa vez... 😞  A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS", "você ACERTOU! ✨");
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }

}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel")
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function () {
    location.reload();
});