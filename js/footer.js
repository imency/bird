$(function () {
 $(".music>e").hover(function(){
    
   $(this).addClass("animated rubberBand")
   
 },function(){
     $(this).removeClass("animated rubberBand")
 })



    $('e').click(function () {
        var index = $(this).index()
        var $musics = $('.musics')[index]
        if ($musics.paused) {
            $musics.play()
        }
    })
})