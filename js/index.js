$(function () {
    // 导入头部和底部
    $("header").load("header.html")
    $("footer").load("footer.html")
    // $('.rTop').load("header.html")
    $(".map").load("map.html")

    //返回顶部
    $(window).scroll(function () {
        if ($('body,html').scrollTop() > 500) {
            $(".topwrap").fadeIn(200)
        } else {
            $('.topwrap').fadeOut(200)
        }
    })
    $('#scrolltop').click(function () {
        console.log(1)
        $('body,html').animate({ 'scrollTop': 0 }, 500)
    })



    // 主页banner
    var animateRunning = false
    var num = 0

    $(".left").click(function () {
        if (num == 0) {
            num = $("#banner li").length - 1;
        } else {
            num--
        }
        $("#banner li").eq(num).fadeIn().siblings("#banner li").fadeOut()
        $('.wrap div').eq(num).addClass("active").siblings('.wrap div').removeClass("active")

    })

    $(".right").click(function () {
        if (num == $("#banner li").length - 1) {
            num = 0
        } else {
            num++
        }
        $("#banner li").eq(num).fadeIn().siblings("#banner li").fadeOut()
        $('.wrap div').eq(num).addClass("active").siblings('.wrap div').removeClass("active")
    })

    $(".wrap div").click(function () {
        $(this).addClass("active").siblings('.wrap div').removeClass("active")
        //   
        $("#banner li").eq($(this).index()).fadeIn().siblings("#banner li").fadeOut()
    })


    //    主要产品
    var num = 0;

    $(".line-on").click(function () {

        var ww = $(this).index()
        // var 一个变量来接收当前的索引值
        pr = ww
        // 把当前的索引值ww赋值给pr
        $("#neirong>li").eq($(this).index()).show().siblings("#neirong>li").hide()
        $(".new-line>div").eq($(this).index()).addClass("banner-icon").siblings(".new-line>div").removeClass("banner-icon")
        if ($(this).index() > num) {
            num = $(this).index()
            $("#neirong>li").removeClass("animated fadeInLeft fadeInRight").eq(num).addClass("animated fadeInLeft")
        } else if ($(this).index() < num) {
            num = $(this).index()
            $("#neirong>li").removeClass("animated fadeInLeft fadeInRight").eq(num).addClass("animated fadeInRight")
        }
    })

    var pr = 0
    $(".prev").click(function () {
        if (pr == 0) {
            // 当索引是第一个点的时候
            // 让它等于最后一个点
            pr = $("#neirong li").length - 1;
        } else {
            pr--
            // 从最后的索引--
            $(".line-on").eq(pr).addClass("banner-icon").siblings(".line-on").removeClass("banner-icon")
            //  点变颜色

            $("#neirong li").eq(pr).show().siblings("#neirong li").hide()
            //  每个li显示
            $("#neirong li").eq(pr).removeClass("animated fadeInLeft fadeInRight").addClass("animated fadeInLeft")
            // animated动画
        }

    })
    $(".next").click(function () {
        if (pr == $("#neirong li").length - 1) {
            pr = 0;
        } else {
            pr++
            $(".line-on").eq(pr).addClass("banner-icon").siblings(".line-on").removeClass("banner-icon")
            //  点变颜色

            $("#neirong li").eq(pr).show().siblings("#neirong li").hide()
            //  每个li显示
            $("#neirong li").eq(pr).removeClass("animated fadeInLeft fadeInRight").addClass("animated fadeInRight")
            // animated动画
        }

    })


    // 业务范围

    $('.add-icon').click(function () {
        var _this = $(this).parent().parent().index();
        if ($('.detail').eq(_this).css('display') == 'block') {
            $('.detail').eq(_this).slideUp()
            $('.add-icon').removeClass('add')


        } else {
            $('.detail').slideUp()
            $('.detail').eq(_this).slideDown()
            $('.add-icon').removeClass('add').eq(_this).addClass('add')

        }
    })




    $('.center-img').click(function () {
        var _this = $(this).parent().parent().index();
        if ($('.detail').eq(_this).css('display') == 'block') {
            $('.detail').eq(_this).slideUp()
            $('.add-icon').removeClass('add')

        } else {
            $('.detail').slideUp()
            $('.detail').eq(_this).slideDown()
            $('.add-icon').removeClass('add').eq(_this).addClass('add')
            $(".center-img").removeClass("animated rubberBand").eq(_this).addClass("animated rubberBand")


        }
    })

    // 团队介绍 无缝轮播
    $(function () {
        var num=0;
        var run = false
        $(".left").click(function () {
            if (!run) {
                run = true;
                $("#cows").animate({ 'left': -1130 }, 300, function () {
                    $(".lione").first().appendTo("#cows");
                    $("#cows").css({ 'left': 0 })
                    run = false
                })
            }
        })
        //    

        $(".right").click(function () {

            if (!run) {
                run = true
                $(".lione").last().prependTo("#cows")
                $("#cows").css({ 'left': -1130 })
                $("#cows").animate({ 'left': 0 }, 300, function () {
                    run = false
                })
            }
        })


    })

    






})