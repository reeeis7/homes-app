const imoveisDB = [
    {
        "Id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Casa",
        "cidade": "Paulo Afonso",
        "estado": "Bahia",
        "favorito": false,
        "tipo": "Casa",
        "adicionais": [
            {
                "chave": "Quartos disponíveis",
                "valor": "4",
            },
            {
                "chave": "Piscina + Área Gourmet",
                "valor": "Sim",
            }
        ]

    },
    {
        "Id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Apto",
        "cidade": "Juazeiro do Norte",
        "estado": "Ceará",
        "favorito": false,
        "tipo": "Apartamento",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "2",
        },
        {
            "chave": "Tamanho",
            "valor": "60m²",
        }
        ]
    },
    {
        "Id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casa",
        "cidade": "Saltinho",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "Casa",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "3",
        },
        {
            "chave": "Tamanho",
            "valor": "100m²",
        }
        ]

    },
    {
        "Id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa",
        "cidade": "Campina Grande",
        "estado": "Paraíba",
        "favorito": false,
        "tipo": "Casa",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "2",
        },
        {
            "chave": "Tamanho",
            "valor": "50m²",
        }]
    },
    {
        "Id": 5,
        "url_foto": "img/5.jpg",
        "nome": "KitNet",
        "cidade": "Santo Ándre",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "Apartamento",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "2",
        },
        {
            "chave": "Tamanho",
            "valor": "30m²",
        }]
    },
    {
        "Id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Mansão Moderna",
        "cidade": "Xique-Xique",
        "estado": "Bahia",
        "favorito": false,
        "tipo": "Casa",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "5",
        },
        {
            "chave": "Tamanho",
            "valor": "100m²",
        },
        {
            "chave": "Condomínio",
            "valor": "Sim",
        },
        {
            "chave": "Porteira Fechada",
            "valor": "Sim",
        }]

    },
    {
        "Id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "Casa",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "3",
        },
        {
            "chave": "Tamanho",
            "valor": "70m²",
        },
        {
            "chave": "Grande área verde",
            "valor": "Sim",
        }]
    },
    {
        "Id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa",
        "cidade": "Pirassununga",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "Casa",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "2",
        },
        {
            "chave": "Tamanho",
            "valor": "60m²",
        },
        {
            "chave": "Condomínio",
            "valor": "Sim",
        }]
    },
    {
        "Id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Conjunto Habitacional",
        "cidade": "Sertãozinho",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "Apartamento",
        "adicionais": [{
            "chave": "Comôdo(s) disponíveis",
            "valor": "1",
        },
        {
            "chave": "Tamanho",
            "valor": "10m²",
        }]
    },
    {
        "Id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Mansão",
        "cidade": "Passa e Fica",
        "estado": "Rio Grande do Norte",
        "favorito": false,
        "tipo": "Casa",
        "adicionais": [{
            "chave": "Quartos disponíveis",
            "valor": "5",
        },
        {
            "chave": "Tamanho",
            "valor": "120m²"
        }]
    }
]
function buscar_todos_imoveis() {
    return imoveisDB
}
function buscar_imovel_pelo_id(id) {
    for (let i = 0; i < imoveisDB.length; i++) {
        const imv = imoveisDB[i];
        if (imv.Id == id) {
            return imv;
        }
    }
}