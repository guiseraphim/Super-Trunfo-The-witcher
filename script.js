var carta0 = {
  nome: "Eredin",
  imagem:
    "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/05/eredin-o-rei-da-cacada-selvagem-pode-aparecer-em-the-witcher-blood-origin-diz-site.jpg",
  atributos: {
    ataque: 10,
    defesa: 9,
    magia: 6
  }
};
var carta1 = {
  nome: "Triss Merigold",
  imagem:
    "https://manualdosgames.com/wp-content/uploads/2021/02/tumblr_pmmo8gpKI31wwdtjqo1_1280.png",
  atributos: {
    ataque: 9,
    defesa: 5,
    magia: 10
  }
};
var carta2 = {
  nome: "Yennefer de Vengerberg",
  imagem:
    "https://psverso.com.br/wp-content/uploads/2021/04/the-witcher-3-guia-romance-yennefer.png",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};
var carta3 = {
  nome: "Geralt de Rívia",
  imagem:
    "https://videogamemais.com.br/wp-content/uploads/2015/07/the-witcher-3-003.jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};
var carta4 = {
  nome: "Letho de Gulet",
  imagem:
    "https://th.bing.com/th/id/OIP.LfdMv5WWKY-M8PlUoUxevwHaHZ?pid=ImgDet&rs=1",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 5
  }
};
var carta5 = {
  nome: "Imlerith",
  imagem:
    "https://vignette4.wikia.nocookie.net/villains/images/0/0e/Imlerith-0.jpg/revision/latest?cb=20151128164738",
  atributos: {
    ataque: 9,
    defesa: 10,
    magia: 5
  }
};
var carta6 = {
  nome: "Caranthir",
  imagem:
    "https://vignette.wikia.nocookie.net/thewitcher/images/6/67/Caranthir-1434315305792_1280w.jpg/revision/latest?cb=20171117032215&path-prefix=pt-br",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};
var carta7 = {
  nome: "Ciri",
  imagem:
    "https://th.bing.com/th/id/R.9948bed5ec430e421d97c165b2dceb6f?rik=Fk70zQ0LarkY4Q&pid=ImgRaw&r=0",
  atributos: {
    ataque: 15,
    defesa: 15,
    magia: 15
  }
};
var carta8 = {
  nome: "Vesemir",
  imagem:
    "https://th.bing.com/th/id/R.e875bea55bf1e799b4d16cc88c724313?rik=%2b%2fQ1kjX%2bqtMgsQ&pid=ImgRaw&r=0",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 7
  }
};
var carta9 = {
  nome: "Regis",
  imagem:
    "https://th.bing.com/th/id/OIP.PFF2i9fpZ1Drek-Vr0S2UAHaN0?pid=ImgDet&rs=1",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};

var cartas = [
  carta0,
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9
];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numCartaMaquina = parseInt(Math.random() * 11);
  cartaMaquina = cartas[numCartaMaquina];

  var numCartaJogador = parseInt(Math.random() * 11);

  while (numCartaJogador == numCartaMaquina) {
    numCartaJogador = parseInt(Math.random() * 11);
  }
  cartaJogador = cartas[numCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type = 'radio' name = 'atributo' value = '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = ` <p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function obtemAtributo() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  var divResultado = document.getElementById("resultado");
  var htmlResultado;
  var valorJogador = cartaJogador.atributos[atributoSelecionado];
  var valorMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorJogador < valorMaquina) {
    htmlResultado = "<p class='resultado-final'>Você Perdeu!</p>";
  } else if (valorJogador > valorMaquina) {
    htmlResultado = "<p class='resultado-final'>Você Venceu!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type = 'text' name = 'atributo' value = '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = ` <p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}