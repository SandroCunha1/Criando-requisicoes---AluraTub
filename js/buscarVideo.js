import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosPesquisa );

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    busca.forEach(element => lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem)));
}
const btnPesquisa = document.querySelector("[data-btnPesquisa")
console.log(`Botão pesquisa: ${btnPesquisa}`)
btnPesquisa.addEventListener('click', evento => buscarVideo(evento))