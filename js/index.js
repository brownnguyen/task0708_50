$('#backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});
window.onscroll = function () {
    if (window.pageYOffset > window.innerHeight / 2) {
        document.querySelector('#backTop').style.opacity = 0.8;
        document.querySelector('#backTop').style.visibility = "visible"
    }
    else {
        document.querySelector('#backTop').style.opacity = 0;
        document.querySelector('#backTop').style.visibility = "hidden"
    }
}
$("#scroll").click(function () {
    $('html, body').animate({
        scrollTop: $("#link-one").offset().top - 75
    }, 1500);
});
let menuBurger = document.querySelector('.header-md-content .menu-burger .menu');
let headNav = document.querySelector('.header .head-nav');
menuBurger.onclick = function () {
    menuBurger.classList.toggle('active');
    if (menuBurger.classList.contains('active')) {
        headNav.classList.add('active');
    }
    else {
        headNav.classList.remove('active')
    }
}