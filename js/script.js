
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-open");

        const aberto = menu.classList.contains("menu-open");
        botaoMenu.setAttribute("aria-expanded", aberto);
    });
}
