//jshint esversion:10 
(function pageBaseScript() {
    var pageWindow = $(window);
    //navBar on scroll functionality
    (function navbarSlide() {
        var navBar = $('.navbar');
        pageWindow.scroll( () => {
            if (pageWindow.scrollTop() > 300) {
                navBar.addClass('navbar-scroll-down');
            } else if (pageWindow.scrollTop() < 400) {
                navBar.removeClass('navbar-scroll-down');
            }
        });
    }());

    (function toTopDisplay() {
        var topArrow = $(".scrollToTop");

        pageWindow.scroll( ()=>{
            if (pageWindow.scrollTop() > 799) {
                topArrow.addClass('ScrollToTopShow');
            } else if (pageWindow.scrollTop() < 600) {
                topArrow.removeClass('ScrollToTopShow');
            }
        });
    }());

    (function toTop() {
        var toTopBtn = $('.scrollToTop');

        toTopBtn.click(()=>{
            pageWindow.scrollTop(0);
        });
    }());

})();