$(function () {
    $(".aside ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(this).parent().parent().siblings().eq($(this).index()).css("display", "block")
            .siblings().css("display", "none");
        $(this).parent().parent().css("display", "block");
    });
    //发展历程
    $(".devolope .btn-next").click(function () {
        $(".devolope .items a.hover").next().addClass("hover").siblings().removeClass("hover");
        $(".dep-detail>div").eq($(".devolope .items a.hover").index()).css("display", "block")
            .siblings().css("display", "none");
    });
    $(".devolope .btn-pre").click(function () {
        $(".devolope .items a.hover").prev().addClass("hover").siblings().removeClass("hover");
        $(".dep-detail>div").eq($(".devolope .items a.hover").index()).css("display", "block")
            .siblings().css("display", "none");
    });
    $(".scroll-lable .items a").click(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".dep-detail>div").eq($(this).index()).css("display", "block").siblings().css("display", "none");
    });
    //发展历程结束
    //万达党建
    $(".nav-main ul>li").hover(function () {
        $(this).children(".option").stop().slideDown("slow");
    });
    $(".nav-main ul>li").mouseleave(function () {
        $(this).children(".option").stop().slideUp("slow");
    });
})