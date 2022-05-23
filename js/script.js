let listaNoticias = [{
        titulo: "Brasil começa a vender terrenos na lua",
        descricao: "tem gente vendendo terreno na lua nesse pais de louco"
    },
    {
        titulo: "Tenho sono",
        descricao: "Dormi muito tarde e acordei muito cedo"
    },
    {
        titulo: "O dolar esta alto",
        descricao: "não é novidade mas temos que noticiair"
    },
    {
        titulo: "desça dai",
        descricao: "jacaré no seco anda"
    },
    {
        titulo: "Compra de NFT aumenta no Brasil",
        descricao: "Por causa dos joguinhos que usam nft"
    },
    {
        titulo: "Ta frio mas ta calor tambem",
        descricao: "tem lugar que ta frio e tem lugar que ta calor"
    }
]

function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias")

    let template = "";



    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];

        template += `
      <div class="cardnews"><img src="img/cardnews.jpg" alt="#"> <h3>${noticia.titulo}</h3> <p>${noticia.descricao}</p> </div >
      `

    }

    espaco.innerHTML = template;

}



let menu = document.getElementById("menu")

function mostrarMenu() {
    if (menu.style.display != "flex") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}

function mostrarPopup() {
    window.alert("eae parça")
}

let email = document.getElementById("campo-email")

function enviarEmail() {
    let emailDigitado = email.value
    console.log(emailDigitado)
}