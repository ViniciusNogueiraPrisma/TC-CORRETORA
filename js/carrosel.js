var swiper = new Swiper(".mySwiper-xp", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper-invest", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-cards-home", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function initSwiper() {
  console.log("Width: ", window.innerWidth); // Verificar a largura da tela
  if (window.innerWidth < 992) {
    console.log("Initializing Swiper"); // Verificar se o Swiper está sendo inicializado
    var swiper = new Swiper(".swiper-cards-invest", {
      loop: false,
      slidesPerView: "auto",
      // spaceBetween: 12,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

initSwiper();

window.addEventListener("resize", function () {
  console.log("Window resized"); // Verificar se o evento de redimensionamento está sendo detectado
  initSwiper();
});
