let imoveis = buscar_todos_imoveis()

if (window.localStorage.getItem("lista") == null) {
    window.localStorage.setItem("item", JSON.stringify(imoveis))
} else {
    imoveis = JSON.parse(window.localStorage.getItem("lista"))
}

const apartamentoCheckbox = document.getElementById("Apartamento");
const casaCheckbox = document.getElementById("Casa");

apartamentoCheckbox.addEventListener("change", filtrar_por_tipo);
casaCheckbox.addEventListener("change", filtrar_por_tipo);

function filtrar_por_tipo() {
    limpar_lista()
    if (apartamentoCheckbox.checked && casaCheckbox.checked) {
        mostrar_todos_imoveis();
    } else if (apartamentoCheckbox.checked) {
        filtrar_por_tipo_apartamento();
    } else if (casaCheckbox.checked) {
        filtrar_por_tipo_casa();
    } else {
        mostrar_todos_imoveis()
    }
}

function filtrar_por_tipo_apartamento() {
    limpar_lista();
    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        if (imovel.tipo == "Apartamento") {
            criarImovelHTML(imovel);
        }
    }
}

function filtrar_por_tipo_casa() {
    limpar_lista();
    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        if (imovel.tipo == "Casa") {
            criarImovelHTML(imovel);
        }
    }
}

function criarImovelHTML(imovel) {

    const section = document.createElement("section")
    section.setAttribute("class", "listing")

    const img = document.createElement("img")
    img.setAttribute("class", "listing-photo")
    img.setAttribute("src", imovel.url_foto)
    section.appendChild(img)


    const h2 = document.createElement("h2")
    h2.setAttribute("class", "listing-heading")
    h2.textContent = imovel.nome

    section.appendChild(h2)

    const p = document.createElement("p")
    p.setAttribute("Class", "listing-location")
    p.textContent = imovel.cidade + " - " + imovel.estado
    section.appendChild(p)


    const a = document.createElement("a")
    a.textContent = "Veja mais"
    const url = `detalhes.html?imovel_id=${imovel.Id}`
    a.setAttribute("href", url)
    section.appendChild(a)

    const fav_id = `fav-${imovel.Id}`
    const favorito = document.createElement("img")
    favorito.setAttribute("id", fav_id)

    if (imovel.favorito == true) {
        favorito.setAttribute("src", "img/coracao.png")
    } else if (imovel.favorito == false) {
        favorito.setAttribute("src", "img/heart.png")
    }

    favorito.setAttribute("class", "favorito")
    favorito.setAttribute("onclick", `favoritar(${JSON.stringify(imovel)})`)

    section.appendChild(favorito)

    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)
}
function filtrar() {
    const pesquisa = document.getElementById("pesquisa").value
    listar_imoveis_com_filtro(pesquisa)
}
function favoritar(imovel) {
    const fav_id = `fav-${imovel.Id}`
    const fav = document.getElementById(fav_id)
    const posicao_lista = imovel.Id - 1

    if (fav.getAttribute("src") == "img/heart.png") {
        fav.setAttribute("src", "img/coracao.png")
        imoveis[posicao_lista].favorito = true
    } else {
        fav.setAttribute("src", "img/heart.png")
        imoveis[posicao_lista].favorito = false
    }
    window.localStorage.setItem("lista", JSON.stringify(imoveis))
}
function mostrar_favoritos() {
    limpar_lista()

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        if (imovel.favorito == true) {
            criarImovelHTML(imovel)
        }
    }
}
function filtrar_com_enter(tecla) {
    if (tecla.keyCode == 13) {
        tecla.preventDefault()
        filtrar()
    }
}
function listar_imoveis_com_filtro(texto) {

    limpar_lista()

    if (texto == "") {
        mostrar_todos_imoveis()
    } else {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i]

            const textoM = removerAcentos(texto.toUpperCase())
            const cidadeImovelM = removerAcentos(imovel.cidade.toUpperCase())
            const estadoImovelM = removerAcentos(imovel.estado.toUpperCase())

            if (cidadeImovelM.search(textoM) == 0 || estadoImovelM.search(textoM) == 0) {
                //aparecer na pagina
                criarImovelHTML(imovel)
            }
        }
    }


}
function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function mostrar_todos_imoveis() {
    limpar_lista()

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        criarImovelHTML(imovel)
    }
}
function limpar_lista() {
    const sectionResults = document.getElementById("lista-imoveis")
    while (sectionResults.lastElementChild) {
        sectionResults.removeChild(sectionResults.lastElementChild)
    }
}

mostrar_todos_imoveis()
