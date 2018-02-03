$(function () {

    // TAB메뉴

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        if ($(this).hasClass('more')) {
            // window.open('http://asddasd.com', '_self')
            return;
        } else {
            $(this).siblings("li").removeClass("selected");
            //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
            $(this).addClass("selected");
            $(".tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn();
        }
    });

    // ROLLING BANNER

    $(".rollingBan").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
});