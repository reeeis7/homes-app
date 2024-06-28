function buscar_imovel() {
    const url_pagina = window.location.href
    const id = url_pagina.split("=")[1]
    const imvDetalhe = buscar_imovel_pelo_id(id)
    atualizarimovel(imvDetalhe)
}
function atualizarimovel(imovel) {
    const imgImv = document.getElementById("img")
    imgImv.setAttribute("src",  imovel.url_foto)

    const nomeImv = document.getElementById("nome_casa")
    nomeImv.textContent = imovel.nome

    const loc = document.getElementById("loc")
    loc.textContent = `${imovel.cidade} - ${imovel.estado}`

    const adicionais = imovel.adicionais
    const ul = document.getElementById("lista_adicionais")
    if (adicionais.lenght == 0) {

        const li = document.createElement("li")
        li.textContent = "Não há adicionais para o imovel"
        ul.appendChild(li)
    }else{
        for (let i =0; i < adicionais.length; i++) {
            const adicional = adicionais[i]
    
            const chave = adicional.chave
            const valor = adicional.valor
    
            const li = document.createElement("li")
            li.textContent = `${chave}: ${valor}`
    
            ul.appendChild(li)
        }
    }
}
