// MOSTRAR / OCULTAR SENHA
function mostrarSenha() {
  const senha = document.getElementById("senha");
  const btn = document.getElementById("btnSenha");

  if (senha.type === "password") {
    senha.type = "text";
    btn.innerText = "Ocultar";
  } else {
    senha.type = "password";
    btn.innerText = "Mostrar";
  }
}

// BOTÃO SENHA
const botaoSenha = document.getElementById("btnSenha");

if (botaoSenha) {
  botaoSenha.addEventListener("click", mostrarSenha);
}

// LOGIN
const formulario = document.getElementById("loginForm");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    localStorage.setItem("usuarioEmail", email);

    window.location.href = "portfolio.html";
  });
}

// USUÁRIO
const usuario = localStorage.getItem("usuarioEmail");
const usuarioLogado = document.getElementById("usuarioLogado");

if (usuarioLogado) {
  if (!usuario) {
    window.location.href = "login.html";
  } else {
    usuarioLogado.innerText = "Usuário logado: " + usuario;
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("usuarioEmail");

  window.location.href = "login.html";
}
