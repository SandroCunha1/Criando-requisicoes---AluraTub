async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoJSON = await conexao.json()
    return conexaoJSON
}

async function criaVideos(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações `,
            url : url,
            imagem: imagem
        })
    })

    const conexaoJSON = await conexao.json()
    return conexaoJSON
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoJSON = conexao.json()
    return conexaoJSON
}
export const conectaAPI = {
    listaVideos,
    criaVideos,
    buscaVideo
}