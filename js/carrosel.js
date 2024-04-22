var swiper = new Swiper(".mySwiper", {
  loop: false,
  slidesPerView: "auto",
  // spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// window.addEventListener("resize", function () {
//   if (window.innerWidth < 650) {
//     swiper.params.slidesPerView = 1;
//   } else {
//     swiper.params.slidesPerView = "auto";
//   }

//   swiper.update();
// });

// swiper.autoplay.start();
// swiper.params.autoplay.delay = 6000;

var swiper = new Swiper(".mySwiper-sec", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-home", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 24,
  // pagination: {
  //   el: ".swiper-pagination",
  //   // type: "fraction",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-xp", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
