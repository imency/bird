$(function () {

    $(".header_nav li").click(function () {
        $(this).addClass("header_navli").siblings(".header_nav li").removeClass("header_navli")
    })

    // 全屏轮播
    var widths, heigths
    function resize() {
        widths = $(document).width()
        heigths = $(document).height()
        $(".Quan").css({
            "width": widths,
            "height": heigths,
        })
        $(".animation").css({
            "width": widths,
            "height": heigths,
        })
        $(".Quan_Ul").css({
            "width": widths,
            "height": $(".Quan_Ul-now").length * heigths
        })
        $(".Quan_Ul-now").each(function (a, ss) {
            $(ss).css({
                "width": widths,
                "height": heigths,
            })
        })
        $(".Quan_Ul").css({
            "top": -page * heigths
        })
        $('#banner').css({
            "width": widths * 4,
            "height": heigths
        })
        $('#banner').children().css({
            'width': widths,
            "height": heigths
        })
    }
    // 蓝色首屏
    var time5 = setTimeout(function () {
        // $(".an_img").css({
        //     margin
        // })
        $(".an_img").animate({ "margin-top": "-70px" }, 500)
        $(".animation_wb_title").delay(700).show(0)
        $(".animation_wb_title_one").delay(1400).show(0)
        $(".use_learn").delay(2100).show(0)
        $(".animation_p_one").delay(2800).show(0)
        $(".animation_p_two").delay(3500).show(0)
        $(".animation").delay(6000).slideUp(600)
    }, 5000)
    $(".animation").dblclick(function () {
        $(this).slideUp(500)
    })
    $(".done-next").click(function () {
        $(".Quan_Ul").css({
            "top": -heigths + "px"
        })
    })
    resize()
    window.onresize = resize;
    var page = 0;
    var running = false;
    function scrollUp() {
        if (!running) {
            running = true;
            setTimeout(function () {
                running = false
            }, 1000)
            if (page > 0) {
                page--
                $(".Quan_Ul").css({
                    "top": -page * heigths + "px"
                })
            }
        }
    }
    function scrollDown() {
        if (!running) {
            running = true;
            setTimeout(function () {
                running = false
            }, 1000)
            if (page < $(".Quan_Ul-now").length - 1) {
                page++
                $(".Quan_Ul").css({
                    "top": -page * heigths + "px"
                })
            }
        }
    }
    // 哈希跳转
    var hash = parseInt(window.location.hash.substr(1))
    if (hash == 1 || hash == 2 || hash == 3 || hash == 4) {
        page = hash
    }
    $(".Quan_Ul").css({
        "top": -hash * heigths + "px"
    })
    function myEvent(obj, ev, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(ev, fn)
        } else {
            obj.attachEvent('on' + ev, fn)
        }
    }
    myEvent(window, 'mousewheel', mousewheel)
    myEvent(window, "DOMMouseScroll", mousewheel)
    function mousewheel(ev) {
        var oEvent = ev || event
        if (oEvent.wheelDelta) {
            if (oEvent.wheelDelta > 0) {
                scrollUp()
            } else {
                scrollDown()
            }
        } else if (oEvent.detail) {
            if (oEvent.detail > 0) {
                scrollDown()
            } else {
                scrollUp()
            }
        }
    }
    //   下一个
    $(".done-next").click(function () {
        console.log(".done-next")
        $(".Quan_Ul-now:eq(2)").show()
    })

    //    第二个轮播
    var number = 0
    $("#foleft").click(function () {
        if (number == 0) {
            number = 0
            $("#foleft").css("opacity", 0.3)
        } else {
            number--
        }
        $("#banner").animate({ "left": -($(window).width() * number) })
        $("#foright").css("opacity", 1)
    })

    $("#foright").click(function () {

        if (number >= $("#banner>li").length - 1) {
            number = $("#banner>li").length - 1
            $("#foright").css("opacity", 0.3)
        } else {
            number++
        }
        $("#banner").animate({ "left": -($(window).width()) * number })
        $("#foleft").css("opacity", 1)

    })


    //    呼吸灯
    function light() {
        $(".Quan_Ul-now").find(".deng").toggle()
    }
    var ww = setInterval(light, 600)

















    //选项卡    
    $(".btn-box>div").mouseover(function () {
        $(".kuai>div").eq($(this).index()).show().siblings("div").hide()

    })











})
