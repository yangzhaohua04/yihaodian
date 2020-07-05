$(() => {
    $(".prod_list>ul>li").mouseenter(function () {
        console.log("123");
        let index = $(this).index();
        $(".prod_content_l>ul").children().eq(index).addClass("block").siblings().removeClass("block")
        $(".big_box").children().eq(index).addClass("block").siblings().removeClass("block")
    })

    $(".prod_list_box").mousemove(function (e) {
        let left1 = e.pageX - $(".prod_list_box").offset().left - ($(".mirror-box").width() / 2);
        let top1 = e.pageY - $(".prod_list_box").offset().left - ($(".mirror-box").height() * 1.5);
        if (left1 > $(this).width() - $(".mirror-box").width()) {
            left1 = $(this).width() - $(".mirror-box").width()
        }
        if (top1 < 0) {
            top1 = 0
        }
        if (top1 > $(this).height() - $(".mirror-box").height()) {
            top1 = $(this).height() - $(".mirror-box").height()
        }
        if (left1 < 0) {
            left1 = 0
        }
        $(".mirror-box").css({
            "left": left1 + "px",
            "top": top1 + "px"
        });
        var pX = left1 / ($(".prod_list_box").width() - $(".mirror-box").width())
        var pY = top1 / ($(".prod_list_box").height() - $(".mirror-box").height())
        $(".big_box>img").css({
            "left": -pX * ($(".big_box img").width() - $(".big_box").width()),
            "top": -pY * ($(".big_box img").height() - $(".big_box").height())
        })

        $(".big_box").css("display", "block")
        $(".mirror-box").css("display", "block")
    })

    $(".prod_list_box").mouseleave(function () {

        $(".mirror-box").css("display", "none")
        $(".big_box").css("display", "none")
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() > 830) {
            $(".details>ul").addClass("fixed");
        }
        else {
            $(".details>ul").removeClass("fixed");
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".right_box").addClass("opacity");
        }
        else {
            $(".right_box").removeClass("opacity");
        }
    })


})

