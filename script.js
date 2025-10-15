// efeito simples de clique e aviso se o link ainda não foi adicionado
document.querySelectorAll(".students a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href") === "#") {
      e.preventDefault();
      alert("O link deste aluno ainda não foi adicionado!");
    }
  });
});
