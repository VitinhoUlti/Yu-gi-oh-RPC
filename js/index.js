let cartas = [
    "Dragão Branco", "Mago Negro", "Exodia" 
]
let tipos = [
    "Pedra", "Papel", "Tesoura"
]
let imagens = [
    "dragon.png", "magician.png", "exodia.png"
]
let monstrosrivais = []

const equiperival = document.getElementById("equiperival")
const equipe = document.getElementById("equipe")

const spanNome = document.getElementById("nome");
const spanTipo = document.getElementById("tipo");
const cartaimagem = document.getElementById("carta");

const spanVitoria = document.getElementById("Wins");
const spanPerdas = document.getElementById("Looses");

const combateCartaj = document.getElementById("cartaj")
const combateCartar = document.getElementById("cartar")

let vitorias = 0;
let percas = 0;

for (let i = 0; i < cartas.length; i++) {
    const element = cartas[i];
    const tipo = tipos[i];
    const imagem = imagens[i];

    let monstro = {
        div: document.createElement("div"),
        tipo: tipo,
        nome: element,
        imagem: imagem
    };
    monstrosrivais.push(monstro)
    monstro.div.classList = `monstro`
    equiperival.appendChild(monstro.div)

    let monstroequipe = {
        div: document.createElement("div"),
        tipo: tipo,
        nome: element,
        imagem: imagem
    };
    monstroequipe.div.classList = `monstro`
    equipe.appendChild(monstroequipe.div)

    monstroequipe.div.addEventListener("mouseenter", () => {
        spanNome.textContent = monstroequipe.nome;
        spanTipo.textContent = `Atributo: ${monstroequipe.tipo}`;
        cartaimagem.style.background = `url(./imagens/monstros/${monstroequipe.imagem})`
        cartaimagem.style.backgroundSize = `cover`
    })
    monstroequipe.div.addEventListener("click", () => {
        combateCartaj.style.background = `url(./imagens/monstros/${monstroequipe.imagem})`;
        combateCartaj.style.backgroundSize = `cover`;

        let valorRandom = Math.floor(Math.random()*cartas.length);
        let monstrocombate = {
            nome: cartas[valorRandom],
            tipo: tipos[valorRandom],
            imagem: imagens[valorRandom]
        }
        combateCartar.style.background = `url(./imagens/monstros/${monstrocombate.imagem})`;
        combateCartar.style.backgroundSize = `cover`;

        if(monstroequipe.tipo=="Pedra"){
            if(monstrocombate.tipo=="Tesoura"){
                ganhar()
            }else if(monstrocombate.tipo=="Pedra"){
                empate()
            }else {
                perder()
            }
        } else if(monstroequipe.tipo=="Papel"){
            if(monstrocombate.tipo=="Pedra"){
                ganhar()
            }else if(monstrocombate.tipo=="Papel"){
                empate()
            }else {
                perder()
            }
        } else if(monstroequipe.tipo=="Tesoura"){
            if(monstrocombate.tipo=="Papel"){
                ganhar()
            }else if(monstrocombate.tipo=="Tesoura"){
                empate()
            }else {
                perder()
            }
        }
    })
}
function ganhar() {
    vitorias++
    mostrarvitoria()
}
function perder() {
    percas++
    mostrarvitoria()
}
function empate() {
    mostrarvitoria()
}
function mostrarvitoria() {
    spanVitoria.textContent = `${vitorias}`
    spanPerdas.textContent = `${percas}`
}