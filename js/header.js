$(function(){
    $(".idea").click(function(){
        window.open("details.html?lvv=companyIdea")
    })
    $(".culture").click(function(){
        window.open("details.html?lvv=companyCulture")
    })
    $(".Environment").click(function(){
        window.open("details.html?lvv=companyEnvironment")
    })
    $(".talents").click(function(){
        window.open("details.html?lvv=talents")
    })
    $(".teams").click(function(){
        window.open("details.html?lvv=team")
    })

    $(".joinUS").click(function(){
        window.open("details.html?lvv=joinUs")
    })
    $(".telUs").click(function(){
        window.open("details.html?lvv=telUs")
    })

    $(window).scroll(function(){
        if($('body,html').scrollTop()>500){
            $(".topwrap").fadeIn(200)
        }else{
            $('.topwrap').fadeOut(200)
        }
    })
    $('#scrolltop').click(function(){
       console.log(1)
        $('body,html').animate({'scrollTop':0},500)
    })

})