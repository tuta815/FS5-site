$(document).ready(function () {


    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")
        // if ($("#menu").hasClass("menu-ativo")) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }

    })
})




let listaProdutos = [{
    foto: "../img/notebook.png",
    titulo: "Macbook Pro",
    preco: 10000,
    descricao: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá."
},
{
    foto: "../img/headphone.png",
    titulo: "Headphone",
    preco: 10000,
    descricao: "Dormi muito tarde e acordei muito cedo"
},
{
    foto: "../img/tv.png",
    titulo: "Smart TV",
    preco: 10000,
    descricao: "não é novidade mas temos que noticiair"
},
{
    foto: "../img/ps5.png",
    titulo: "Controle PS5",
    preco: 10000,
    descricao: "jacaré no seco anda"
},
{
    foto: "../img/xbox.png",
    titulo: "XBOX ONE",
    preco: 10000,
    descricao: "Por causa dos joguinhos que usam nft"
},
{
    foto: "../img/imac.png",
    titulo: "IMAC",
    preco: 10000,
    descricao: "tem lugar que ta frio e tem lugar que ta calor"
},
{
    foto: "../img/notebook.png",
    titulo: "Macbook Pro",
    preco: 10000,
    descricao: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá."
},
{
    foto: "../img/headphone.png",
    titulo: "Headphone",
    preco: 10000,
    descricao: "Dormi muito tarde e acordei muito cedo"
},
{
    foto: "../img/tv.png",
    titulo: "Smart TV",
    preco: 10000,
    descricao: "não é novidade mas temos que noticiair"
},
{
    foto: "../img/ps5.png",
    titulo: "Controle PS5",
    preco: 10000,
    descricao: "jacaré no seco anda"
},
{
    foto: "../img/xbox.png",
    titulo: "XBOX ONE",
    preco: 10000,
    descricao: "Por causa dos joguinhos que usam nft"
},
{
    foto: "../img/imac.png",
    titulo: "IMAC",
    preco: 10000,
    descricao: "tem lugar que ta frio e tem lugar que ta calor"
}

]

function renderizarDestaques() {
    let espaco = document.getElementById("espaco-destaques")

    let template = "";

    function formatReal(amount) {
        return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(amount);
    }

    for (let index = 0; index < listaProdutos.length; index++) {
        const destaques = listaProdutos[index];

        template += `
      <div class="highlights"><a href=""><img src=${destaques.foto} alt="#"> </a> <div class="destaque"> <h5>${destaques.titulo}</h5> <h4>${formatReal(destaques.preco)}</h4> <p>${destaques.descricao}</p></div > </div >
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