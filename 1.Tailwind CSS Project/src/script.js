
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".slide");
const bg = document.querySelectorAll(".blue-banner-bg");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    bg.forEach((bgCol) => {
        bgCol.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    bg[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
    });
});

/*=============================================
    Nav background color change when scrolling
===============================================*/
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        document.getElementById("nav-gold").style.display = "block";
    } else if (window.scrollY < 100) {
        document.getElementById("nav-gold").style.display = "none";
    }
});

AOS.init();


$('.powerSection').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});