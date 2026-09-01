document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,

        disable: window.innerWidth < 992
    });
});