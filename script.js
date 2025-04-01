document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-tema")) {
    const temaArquivo = event.target.getAttribute("data-tema");
    const botoesTema = document.querySelectorAll("[data-tema]");
    botoesTema.forEach((btn) => btn.classList.remove("tema-ativo"));
    event.target.classList.add("tema-ativo");
    document.getElementById("temaEstilo").setAttribute("href", temaArquivo);
  }
});
