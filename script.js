// MENSAGEM DE BOAS-VINDAS
let usuario = prompt("Digite seu nome");
if (usuario !== null) {
  usuario = usuario.trim();
  if (usuario !== "") {
    let nomeFormatado =
      usuario.charAt(0).toUpperCase() +
      usuario.slice(1).toLowerCase();
    alert("Bem-vindo, " + nomeFormatado + "!");
  }
}

// GALERIA DE IMAGENS
const imagens = [
  "imagens/galeria1.jpg",
  "imagens/galeria2.jpg",
  "imagens/galeria3.jpg"
];

let imagemAtual = 0;
const imagemSlider =
  document.getElementById("sliderImage");
const botaoProximo =
  document.getElementById("nextBtn");
const botaoAnterior =
  document.getElementById("prevBtn");
function trocarImagem() {
  imagemSlider.src =
    imagens[imagemAtual];
}

botaoProximo.onclick = function () {
  imagemAtual++;
  if (imagemAtual >= imagens.length) {
    imagemAtual = 0;
  }
  trocarImagem();
};

botaoAnterior.onclick = function () {
  imagemAtual--;
  if (imagemAtual < 0) {
    imagemAtual =
      imagens.length - 1;
  }
  trocarImagem();
};

// LOGIN
const abrirLogin =
  document.getElementById("openLogin");
const modal =
  document.getElementById("loginModal");
const fecharModal =
  document.getElementById("closeModal");
abrirLogin.onclick = function () {
  modal.style.display =
    "block";
};

fecharModal.onclick = function () {
  modal.style.display =
    "none";
};

// FORMULÁRIO
const formulario =
  document.getElementById("contactForm");
formulario.onsubmit = function (event) {
  event.preventDefault();
  let nome =
    document.getElementById("name").value;
  let email =
    document.getElementById("email").value;
  let senha =
    document.getElementById("password").value;
  nome = nome.trim();
  email = email.trim();
  senha = senha.trim();
  if (nome === "") {
    alert("Digite seu nome!");
    return;
  }
  if (email === "") {
    alert("Digite seu email!");
    return;
  }
  if (senha === "") {
    alert("Digite sua senha!");
    return;
  }
  if (email.includes("@") === false) {
    alert("Email inválido!");
    return;
  }
  if (senha.length < 4) {
    alert("Senha muito curta!");
    return;
  }
  let nomeFormatado =
    nome.charAt(0).toUpperCase() +
    nome.slice(1).toLowerCase();
  alert(
    "Formulário enviado com sucesso, " +
    nomeFormatado + "!"
  );
};

// EFEITO NOS CARDS
const cards =
  document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  cards[i].onmouseover = function () {
    cards[i].style.backgroundColor =
      "#eaf1ff";
  };
  cards[i].onmouseout = function () {
    cards[i].style.backgroundColor =
      "#f7f9fd";
  };
}

// VERIFICAR IMAGENS
function isImagem(nome) {
  let lower =
    nome.toLowerCase();
  return (
    lower.endsWith(".png") ||
    lower.endsWith(".jpg") ||
    lower.endsWith(".webp")
  );
}

for (let i = 0; i < imagens.length; i++) {
  console.log(
    imagens[i] + " -> " +
    isImagem(imagens[i])
  );
}