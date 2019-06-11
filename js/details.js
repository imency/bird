$(function () {
    // 导入头部和底部
    $("header").load("header.html")
    $("footer").load("footer.html")

$(".like").hover(function(){
    $(this).addClass("animated bounce")
})
$(".like").click(function(){
   $(".tips").show().addClass("animated bounce ")
})



var news=getUrlParmas("lvv")
// console.log(news)

// news===>xiaoniaoNews1
// articleData[news].data
var data=articleData[news].data
$(".big-title").html(data.typeTitle)
$(".type-title").html(data.typeEntitle)
$(".title-list>span").html(data.title)
$(".data").html(data.updateAt)
$(".auther>span").html(data.updateByFullName)
$(".content").html(data.content)
$('.tu img').attr('src',data.coverImg)
// 获取页面中ul传过来的参数
function getUrlParmas(name){
    // news=xiaoniaoNews1
var reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)')
var r=window.location.search.substr(1).match(reg)

// console.log(r)
// 将问号截取
// console.log(window.location.search)
//  
if(r!=null){
return  r[2]
}else{
    return '';
}

}










})