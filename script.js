const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  });
}

let cartCount = 0;
const cartCountElement = document.querySelector("#cart-count");
const cartButton = document.querySelector(".cart-button");

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount += 1;
    if (cartCountElement) cartCountElement.textContent = cartCount;
    if (cartButton) cartButton.setAttribute("aria-label", `Carrinho com ${cartCount} ${cartCount === 1 ? "produto" : "produtos"}`);
    const originalText = button.textContent;
    button.textContent = "Adicionado!";
    window.setTimeout(() => { button.textContent = originalText; }, 1100);
  });
});

if (cartButton) {
  cartButton.addEventListener("click", () => {
    alert(`Seu carrinho tem ${cartCount} ${cartCount === 1 ? "produto" : "produtos"}.`);
  });
}

const searchButton = document.querySelector(".search-button");
if (searchButton) {
  searchButton.addEventListener("click", () => {
    const term = window.prompt("O que você deseja encontrar?");
    if (term && term.trim()) {
      const products = [...document.querySelectorAll(".product-card")];
      const found = products.find((card) => card.textContent.toLowerCase().includes(term.trim().toLowerCase()));
      if (found) found.scrollIntoView({ behavior: "smooth", block: "center" });
      else alert("Nenhum produto encontrado com esse termo.");
    }
  });
}

const newsletterForm = document.querySelector("#newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#newsletter-email").value.trim();
    if (email) {
      alert("Obrigada por se inscrever! (Demonstração: conecte o formulário a um serviço para salvar os e-mails.)");
      newsletterForm.reset();
    }
  });
}
