function scrolltop() {
  let a = window.document;
  a = location.href = "#home";
}
let contact = document.getElementById("contactForm");
contact.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    `Pedido de desculpas não pode ser aceito devido a alguns erros técnicos`
  );
});
