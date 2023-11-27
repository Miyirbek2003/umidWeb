window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.pageYOffset > 50) {
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.left = "0";
        header.style.zIndex = 7;
    }
    else {
        header.style.position = "static";

    }
});


window.onscroll = () => {
    var current = "";
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".item-link");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });
};

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.nav-links').toggleClass('active')
    });


});

