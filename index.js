let filmCard = document.querySelectorAll(".filmCard");
let carosello = document.querySelectorAll(".slide");

for (let i = 0; i < filmCard.length; i++) {
  filmCard[i].innerHTML += `
<h4 class="mb-0">VIS A VIS</h4>
<p>S:3 E:1 minuto 3</p>
<div class="riprendi d-flex justify-content-start align-items-center gap-2">
  <ion-icon name="play-circle-outline" class="fs-3"></ion-icon>
  <p class="mb-0">Riprendi</p>
  <div class="barra"><div class="contenutoBarra"></div></div>
</div>`;
}

// QUESTO E' L'EXTRA CHE HO PROVATO A FARE:

// DECOMMENTA IL CSS DALLA RIGA 62 ALLA 68 !!!!

// let hiddenCarousel = function (scroll) {
//   for (let i = 0; i < carosello.length; i++) {
//     if (window.scrollY > 220 && i < 1) {
//       carosello[i].classList.remove("selezionato");
//     } else if (window.scrollY > 420 && i < 2) {
//       carosello[i].classList.remove("selezionato");
//     } else if (520 > window.scrollY > 620 && i === carosello.length - 1) {
//       carosello[i].classList.remove("selezionato");
//     } else {
//       carosello[i].classList.add("selezionato");
//     }
//   }
// };
// addEventListener("scroll", hiddenCarousel);
