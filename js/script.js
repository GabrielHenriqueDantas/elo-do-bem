
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-open");

        const aberto = menu.classList.contains("menu-open");
        botaoMenu.setAttribute("aria-expanded", aberto);
    });
}

/* FAQ interativo */
const perguntas = document.querySelectorAll(".faq-button");

perguntas.forEach(function (pergunta) {
    pergunta.addEventListener("click", function () {
        const item = pergunta.closest(".faq-item");

        item.classList.toggle("active");

        const aberto = item.classList.contains("active");
        pergunta.setAttribute("aria-expanded", aberto);
    });
});


/* Formulario de contato */
const formulario = document.querySelector(".contact-form");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

if (formulario && mensagemSucesso) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        mensagemSucesso.textContent =
            "Formulario preenchido com sucesso! Esta é uma demonstração.";

        formulario.reset();
    });
}
