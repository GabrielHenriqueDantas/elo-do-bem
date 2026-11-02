
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



/* Validação do formulário de contato */
const formulario = document.querySelector(".contact-form");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

if (formulario && mensagemSucesso) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const campos = [
            { id: "nome", nome: "Nome completo" },
            { id: "email", nome: "E-mail" },
            { id: "telefone", nome: "Telefone" },
            { id: "mensagem", nome: "Mensagem" }
        ];

        let formularioValido = true;
        mensagemSucesso.textContent = "";

        campos.forEach(function (campo) {
            const elemento = document.getElementById(campo.id);
            const grupo = elemento.closest(".form-group");

            const erroAnterior = grupo.querySelector(".mensagem-erro");
            if (erroAnterior) {
                erroAnterior.remove();
            }

            elemento.classList.remove("campo-invalido");

            let erro = "";

            if (elemento.value.trim() === "") {
                erro = "Preencha o campo " + campo.nome + ".";
            } else if (campo.id === "email" &&
                       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(elemento.value.trim())) {
                erro = "Digite um e-mail válido.";
            } else if (campo.id === "telefone" &&
                       elemento.value.replace(/\D/g, "").length < 10) {
                erro = "Digite um telefone válido com DDD.";
            }

            if (erro !== "") {
                formularioValido = false;
                elemento.classList.add("campo-invalido");

                const aviso = document.createElement("small");
                aviso.className = "mensagem-erro";
                aviso.textContent = erro;
                grupo.appendChild(aviso);
            }
        });

        if (formularioValido) {
            mensagemSucesso.textContent =
                "Formulário preenchido com sucesso! Esta é uma demonstração.";

            formulario.reset();
        }
    });
}

